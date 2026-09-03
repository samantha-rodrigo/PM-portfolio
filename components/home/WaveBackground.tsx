// Decorative wave graphic pinned to the bottom of the viewport for the
// whole homepage (not just the hero), so it stays visible as you scroll.
// Three layers drift sideways at different speeds; the back two also bob
// vertically, so the whole thing reads as one continuous, seamless loop
// instead of a static shape. Pure CSS animation — no JS needed.
export default function WaveBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 bottom-0 z-0 h-[300px] overflow-hidden"
    >
      <div className="animate-home-bob absolute inset-0">
        <svg
          viewBox="0 0 2000 240"
          preserveAspectRatio="none"
          className="animate-home-wave-slow absolute bottom-0 left-0 h-[300px] w-[200%]"
        >
          <path
            d="M0,140 C250,220 750,60 1000,140 C1250,220 1750,60 2000,140 L2000,240 L0,240 Z"
            className="fill-accent/[0.06]"
          />
        </svg>
      </div>
      <div className="animate-home-bob-reverse absolute inset-0">
        <svg
          viewBox="0 0 2000 240"
          preserveAspectRatio="none"
          className="animate-home-wave-mid absolute bottom-0 left-0 h-[270px] w-[200%]"
        >
          <path
            d="M0,170 C300,240 700,90 1000,170 C1300,240 1700,90 2000,170 L2000,240 L0,240 Z"
            className="fill-accent/[0.11]"
          />
        </svg>
      </div>
      <svg
        viewBox="0 0 2000 240"
        preserveAspectRatio="none"
        className="animate-home-wave-fast absolute bottom-0 left-0 h-[210px] w-[200%]"
      >
        <path
          d="M0,196 C220,240 640,140 1000,196 C1360,240 1780,140 2000,196 L2000,240 L0,240 Z"
          className="fill-accent/[0.16]"
        />
      </svg>
    </div>
  );
}
