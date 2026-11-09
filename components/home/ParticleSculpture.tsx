"use client";

// Canvas-2D particle sculpture for the hero: ~11,000 ink dots over the
// yellow ground that cycle through a sequence of shapes (sphere, torus,
// the words SHIP / ITERATE / REPEAT), each held briefly then morphed into
// the next over ~1.8s with a per-dot staggered delay. The pointer pushes
// nearby dots away (spring-back physics) and tilts the whole shape toward
// the cursor. No lines/glows/gradients — depth comes entirely from
// per-dot radius (how much its surface faces the viewer) rendered in six
// alpha buckets (a halftone look).
//
// This is a direct port of the design reference's wireSculpture(): a
// single long-lived effect managing its own mutable state (typed arrays,
// rAF loop) rather than idiomatic React state, because it's a 60fps
// per-dot simulation where React re-renders would only get in the way.
import { useEffect, useRef } from "react";

type Shape = { kind: "sphere" | "torus" | "word"; p: Float32Array; n: Float32Array };

const N_DEFAULT = 11000;
const N_SMALL_HOST = 6500;
const HOLD = 0.5;
const MORPH = 1.8;
const CAMERA_D = 3.4;

export default function ParticleSculpture() {
  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    const cv = canvasRef.current;
    if (!host || !cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const N = host.clientWidth < 420 ? N_SMALL_HOST : N_DEFAULT;
    const rnd = Math.random;
    const TAU = Math.PI * 2;

    const mk = (kind: Shape["kind"]): Shape => ({ kind, p: new Float32Array(N * 3), n: new Float32Array(N * 3) });
    const lump = (x: number, y: number, z: number) =>
      0.07 * Math.sin(3.1 * x + 1.7 * y) + 0.06 * Math.sin(2.7 * z - 2.3 * x + 1) + 0.05 * Math.sin(4.3 * y + 3.1 * z);

    const sphere = mk("sphere");
    const torus = mk("torus");
    const ga = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < N; i++) {
      const y = 1 - (2 * (i + 0.5)) / N;
      const rr = Math.sqrt(1 - y * y);
      const th = ga * i;
      const x = Math.cos(th) * rr;
      const z = Math.sin(th) * rr;
      const l = 1 + lump(x, y, z) + (rnd() < 0.3 ? (rnd() - 0.5) * 0.1 : 0);
      sphere.p.set([x * l, y * l, z * l], i * 3);
      sphere.n.set([x, y, z], i * 3);

      const u = rnd() * TAU;
      const v = rnd() * TAU;
      const R = 0.74;
      const r = 0.33 + (rnd() < 0.25 ? (rnd() - 0.5) * 0.06 : 0);
      torus.p.set([(R + r * Math.cos(v)) * Math.cos(u), (R + r * Math.cos(v)) * Math.sin(u), r * Math.sin(v)], i * 3);
      torus.n.set([Math.cos(u) * Math.cos(v), Math.sin(u) * Math.cos(v), Math.sin(v)], i * 3);
    }

    const buildWord = (word: string): Shape => {
      const W = 1200;
      const H = 360;
      const oc = document.createElement("canvas");
      oc.width = W;
      oc.height = H;
      const o = oc.getContext("2d")!;
      let fs = 300;
      o.font = `800 ${fs}px "Bricolage Grotesque", sans-serif`;
      const mw = o.measureText(word).width;
      if (mw > W * 0.94) {
        fs *= (W * 0.94) / mw;
        o.font = `800 ${fs}px "Bricolage Grotesque", sans-serif`;
      }
      o.textAlign = "center";
      o.textBaseline = "middle";
      o.fillStyle = "#000";
      o.fillText(word, W / 2, H / 2);
      const d = o.getImageData(0, 0, W, H).data;
      const on = (x: number, y: number) => x >= 0 && y >= 0 && x < W && y < H && d[(y * W + x) * 4 + 3] > 128;
      const pts: number[] = [];
      const edge: boolean[] = [];
      let x0 = W,
        x1 = 0,
        y0 = H,
        y1 = 0;
      for (let y = 0; y < H; y += 2) {
        for (let x = 0; x < W; x += 2) {
          if (!on(x, y)) continue;
          pts.push(x, y);
          edge.push(!on(x + 5, y) || !on(x - 5, y) || !on(x, y + 5) || !on(x, y - 5));
          if (x < x0) x0 = x;
          if (x > x1) x1 = x;
          if (y < y0) y0 = y;
          if (y > y1) y1 = y;
        }
      }
      const s = mk("word");
      const M = edge.length;
      if (!M) return sphere;
      const sc = Math.min(2.5 / (x1 - x0), 1.2 / (y1 - y0));
      const cx = (x0 + x1) / 2;
      const cy = (y0 + y1) / 2;
      for (let i = 0; i < N; i++) {
        const k = (rnd() * M) | 0;
        let x = (pts[2 * k] + rnd() * 2 - cx) * sc;
        let y = -(pts[2 * k + 1] + rnd() * 2 - cy) * sc;
        if (edge[k]) {
          const a = rnd() * TAU;
          const m = rnd() * rnd() * 0.08;
          x += Math.cos(a) * m;
          y += Math.sin(a) * m;
        }
        if (rnd() < 0.03) {
          x += (rnd() - 0.5) * 0.2;
          y += (rnd() - 0.5) * 0.2;
        }
        s.p.set([x, y, (rnd() - 0.5) * 0.14], i * 3);
        s.n.set([(rnd() - 0.5) * 0.5, (rnd() - 0.5) * 0.5, 1], i * 3);
      }
      return s;
    };

    const shapes: Shape[] = [sphere, torus, sphere, sphere, sphere, sphere, sphere, sphere];
    const words = ["SHIP", "ITERATE", "REPEAT"];
    const fillWords = () => words.forEach((w, j) => { shapes[3 + j * 2] = buildWord(w); });
    if (document.fonts && document.fonts.load) {
      document.fonts.load('800 200px "Bricolage Grotesque"').then(fillWords, fillWords);
    } else fillWords();

    const rs = new Float32Array(N);
    const ph = new Float32Array(N);
    const dl = new Float32Array(N);
    for (let i = 0; i < N; i++) {
      rs[i] = 0.55 + rnd() * 0.6;
      ph[i] = rnd() * TAU;
      dl[i] = rnd() * 0.35;
    }
    const ox = new Float32Array(N);
    const oy = new Float32Array(N);
    const vx = new Float32Array(N);
    const vy = new Float32Array(N);

    const NB = 6;
    const bAlpha = [0.32, 0.48, 0.62, 0.76, 0.9, 1];
    const bx: Float32Array[] = [];
    const bc = new Int32Array(NB);
    for (let b = 0; b < NB; b++) bx.push(new Float32Array(N * 3));

    const rot = (kind: Shape["kind"], t: number): [number, number] => {
      if (kind === "sphere") return [0.35 + 0.1 * Math.sin(t * 0.4), t * 0.32];
      if (kind === "torus") return [0.55 + 0.25 * Math.sin(t * 0.35), 0.4 * Math.sin(t * 0.28)];
      return [0.1 * Math.sin(t * 0.5), 0.22 * Math.sin(t * 0.33)];
    };

    let w = 0,
      h = 0,
      dpr = 1;
    const resize = () => {
      dpr = Math.min(2, window.devicePixelRatio || 1);
      w = host.clientWidth;
      h = host.clientHeight;
      cv.width = Math.round(w * dpr);
      cv.height = Math.round(h * dpr);
      if (reduce) draw(0);
    };

    let mx = -9999,
      my = -9999,
      lastX: number | null = null,
      lastY: number | null = null,
      active = false,
      moveAcc = 0,
      tiltX = 0,
      tiltY = 0;
    let cur = 0,
      nxt = 1,
      phase: "hold" | "morph" = "hold",
      phaseT = 0,
      started = false;

    const out: [number, number, number] = [0, 0, 0];
    const tf = (arr: Float32Array, i3: number, c: number[]) => {
      const x = arr[i3],
        y = arr[i3 + 1],
        z = arr[i3 + 2];
      const x1 = x * c[2] + z * c[3];
      const z1 = -x * c[3] + z * c[2];
      out[0] = x1;
      out[1] = y * c[0] - z1 * c[1];
      out[2] = y * c[1] + z1 * c[0];
    };

    const draw = (t: number) => {
      if (!started) {
        phaseT = t;
        started = true;
      }
      let prog = 0;
      if (!reduce) {
        const el = t - phaseT;
        if (phase === "hold" && (el > HOLD || (active && moveAcc > 900 && el > 1))) {
          phase = "morph";
          phaseT = t;
          moveAcc = 0;
        } else if (phase === "morph" && el > MORPH) {
          cur = nxt;
          nxt = (nxt + 1) % shapes.length;
          phase = "hold";
          phaseT = t;
          moveAcc = 0;
        }
        if (phase === "morph") prog = Math.min(1, (t - phaseT) / MORPH);
      }
      tiltX += ((active ? (my / h - 0.5) * 0.5 : 0) - tiltX) * 0.05;
      tiltY += ((active ? (mx / w - 0.5) * 0.6 : 0) - tiltY) * 0.05;
      const A = shapes[cur];
      const B = shapes[nxt];
      const ra = rot(A.kind, t);
      const rb = rot(B.kind, t);
      const ca = [Math.cos(ra[0] + tiltX), Math.sin(ra[0] + tiltX), Math.cos(ra[1] + tiltY), Math.sin(ra[1] + tiltY)];
      const cb = [Math.cos(rb[0] + tiltX), Math.sin(rb[0] + tiltX), Math.cos(rb[1] + tiltY), Math.sin(rb[1] + tiltY)];
      const breathe = 1 + 0.03 * Math.sin(t * 1.2);
      const F = Math.min(w, h) * 0.36 * CAMERA_D;
      const cx = w / 2;
      const cy = h / 2;
      const R = Math.min(w, h) * 0.16;
      const R2 = R * R;
      bc.fill(0);

      const P: [number, number, number] = [0, 0, 0];
      for (let i = 0; i < N; i++) {
        const i3 = i * 3;
        let e = 0;
        if (prog > 0) {
          e = Math.min(1, Math.max(0, (prog - dl[i]) / 0.65));
          e = e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
        }
        tf(A.p, i3, ca);
        P[0] = out[0];
        P[1] = out[1];
        P[2] = out[2];
        tf(A.n, i3, ca);
        let nz = out[2];
        if (e > 0) {
          tf(B.p, i3, cb);
          P[0] += (out[0] - P[0]) * e;
          P[1] += (out[1] - P[1]) * e;
          P[2] += (out[2] - P[2]) * e;
          tf(B.n, i3, cb);
          nz += (out[2] - nz) * e;
        }
        const k = breathe * (1 + 0.015 * Math.sin(t * 2 + ph[i]));
        const px = P[0] * k,
          py = P[1] * k,
          pz = P[2] * k;
        const s = F / (CAMERA_D - pz);
        let sx = cx + px * s,
          sy = cy - py * s;
        if (!reduce) {
          const dx = sx + ox[i] - mx,
            dy = sy + oy[i] - my,
            d2 = dx * dx + dy * dy;
          if (d2 < R2 && d2 > 0.01) {
            const d = Math.sqrt(d2),
              f = (1 - d / R) * 2.4;
            vx[i] += (dx / d) * f;
            vy[i] += (dy / d) * f;
          }
          vx[i] = (vx[i] - ox[i] * 0.06) * 0.86;
          vy[i] = (vy[i] - oy[i] * 0.06) * 0.86;
          ox[i] += vx[i];
          oy[i] += vy[i];
          sx += ox[i];
          sy += oy[i];
        }
        const face = nz > 0 ? Math.pow(Math.min(1, nz), 1.3) : 0;
        const rad = 0.5 + 1.5 * face * rs[i] * (0.6 + 0.4 * ((s * CAMERA_D) / F));
        const b = Math.max(0, Math.min(NB - 1, ((rad - 0.5) / 0.28) | 0));
        const arr = bx[b];
        const j = bc[b] * 3;
        arr[j] = sx;
        arr[j + 1] = sy;
        arr[j + 2] = rad;
        bc[b]++;
      }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      for (let b = 0; b < NB; b++) {
        const arr = bx[b];
        const n = bc[b];
        if (!n) continue;
        ctx.globalAlpha = bAlpha[b];
        ctx.fillStyle = "#0E0E0C";
        ctx.beginPath();
        for (let q = 0; q < n * 3; q += 3) {
          ctx.moveTo(arr[q] + arr[q + 2], arr[q + 1]);
          ctx.arc(arr[q], arr[q + 1], arr[q + 2], 0, TAU);
        }
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const ro = new ResizeObserver(resize);
    ro.observe(host);
    resize();

    if (reduce) {
      draw(0);
      return () => ro.disconnect();
    }

    let visible = true;
    let raf: number;
    const io = new IntersectionObserver((entries) => { visible = entries[0].isIntersecting; }, { threshold: 0 });
    io.observe(host);

    const onMove = (e: PointerEvent) => {
      const r = host.getBoundingClientRect();
      mx = e.clientX - r.left;
      my = e.clientY - r.top;
      if (lastX !== null && lastY !== null) moveAcc += Math.hypot(mx - lastX, my - lastY);
      lastX = mx;
      lastY = my;
      active = true;
    };
    const onLeave = () => {
      active = false;
      mx = my = -9999;
      lastX = lastY = null;
    };
    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerleave", onLeave);

    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      if (visible && w > 0) draw(now / 1000);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={hostRef}
      aria-hidden="true"
      className="relative aspect-square min-w-[280px] max-w-[560px] flex-1 basis-[400px] [touch-action:pan-y]"
    >
      <canvas ref={canvasRef} className="absolute inset-0 block h-full w-full" />
    </div>
  );
}
