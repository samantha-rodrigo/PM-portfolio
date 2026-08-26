export default function Avatar({ size = 160 }: { size?: number }) {
  return (
    <div
      className="flex shrink-0 items-center justify-center rounded-full border border-border bg-surface font-serif font-bold text-accent"
      style={{ width: size, height: size, fontSize: size * 0.34 }}
      aria-label="Samantha Rodrigo headshot placeholder"
    >
      SR
    </div>
  );
}
