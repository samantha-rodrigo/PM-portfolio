// Circular headshot photo, used on the About page.
// `size` controls the diameter in pixels so it can be reused at other sizes later.
import Image from "next/image";

export default function Avatar({ size = 160 }: { size?: number }) {
  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-full border-2 border-accent/40 shadow-lg shadow-accent-soft"
      style={{ width: size, height: size }}
    >
      <Image
        src="/images/headshot.jpg"
        alt="Samantha Rodrigo"
        fill
        sizes={`${size}px`}
        className="object-cover"
        priority
      />
    </div>
  );
}
