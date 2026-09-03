// A "what I did" card that flips over on hover to reveal detail on its
// back face. Pure CSS 3D transform — no JS needed since :hover already
// tells us when to flip.
export default function FlipCard({
  index,
  title,
  description,
}: {
  index: string;
  title: string;
  description: string;
}) {
  return (
    <div className="h-[220px] [perspective:1200px]">
      <div className="relative h-full w-full transition-transform duration-[750ms] [transform-style:preserve-3d] [transition-timing-function:cubic-bezier(.16,1,.3,1)] hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 flex flex-col justify-between border border-border bg-surface p-7 [backface-visibility:hidden]">
          <div className="font-mono text-[11px] tracking-[0.14em] text-muted">{index}</div>
          <div className="font-serif text-2xl font-semibold leading-[1.2] tracking-[-0.015em]">{title}</div>
        </div>
        <div className="absolute inset-0 flex items-center border border-accent bg-surface-hover p-7 text-[15px] leading-[1.65] [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {description}
        </div>
      </div>
    </div>
  );
}
