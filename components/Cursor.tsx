"use client";

// Custom cursor (desktop only): a fixed ring that lerps toward the pointer,
// morphing into a solid dot over `[data-cursor="link"]` elements or a
// labeled pill over `[data-cursor="label"]` ones (reading the pill's text
// from `data-cursor-label`). Inverts from ink-on-transparent to
// yellow-on-ink over the site's dark sections (#work, #contact).
// Disabled under 860px viewport width and on coarse (touch) pointers.
import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    if (window.innerWidth < 860 || window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = document.createElement("div");
    Object.assign(cursor.style, {
      position: "fixed",
      left: "0",
      top: "0",
      zIndex: "2147483600",
      pointerEvents: "none",
      width: "46px",
      height: "46px",
      minWidth: "0",
      padding: "0",
      borderRadius: "100px",
      border: "2px solid #0E0E0C",
      background: "transparent",
      boxSizing: "border-box",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      whiteSpace: "nowrap",
      fontFamily: "var(--font-geist-mono), ui-monospace, monospace",
      fontSize: "11px",
      fontWeight: "600",
      letterSpacing: "0.15em",
      textTransform: "uppercase",
      color: "#FFF48D",
      opacity: "0",
      transition:
        "width .3s cubic-bezier(.16,1,.3,1), height .3s cubic-bezier(.16,1,.3,1), padding .3s cubic-bezier(.16,1,.3,1), background .3s, border-color .3s, opacity .3s",
    });
    document.body.appendChild(cursor);

    const hideNativeCursor = document.createElement("style");
    hideNativeCursor.textContent = "body, body * { cursor: none !important; }";
    document.head.appendChild(hideNativeCursor);

    let x = -100,
      y = -100,
      cx = -100,
      cy = -100,
      raf: number;

    const darkAt = (el: Element | null) => !!(el && el.closest("#work, #contact"));

    const loop = () => {
      cx += (x - cx) * 0.35;
      cy += (y - cy) * 0.35;
      cursor.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };
    loop();

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      cursor.style.opacity = "1";
      const target = e.target as Element | null;
      const trigger = target?.closest instanceof Function ? target.closest("[data-cursor]") : null;
      const dark = darkAt(target);
      const ink = dark ? "#FFF48D" : "#0E0E0C";
      const mode = trigger ? (trigger as HTMLElement).dataset.cursor : "idle";

      if (mode === "label") {
        cursor.textContent = (trigger as HTMLElement).dataset.cursorLabel || "Open";
        Object.assign(cursor.style, {
          width: "auto",
          height: "38px",
          padding: "0 16px",
          background: dark ? "#FFF48D" : "#0E0E0C",
          borderColor: "transparent",
          color: dark ? "#0E0E0C" : "#FFF48D",
        });
      } else if (mode === "link") {
        cursor.textContent = "";
        Object.assign(cursor.style, { width: "12px", height: "12px", padding: "0", background: ink, borderColor: ink });
      } else {
        cursor.textContent = "";
        Object.assign(cursor.style, { width: "46px", height: "46px", padding: "0", background: "transparent", borderColor: ink });
      }
    };
    const onLeave = () => {
      cursor.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cursor.remove();
      hideNativeCursor.remove();
    };
  }, []);

  return null;
}
