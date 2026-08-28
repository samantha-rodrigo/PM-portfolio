import Image from "next/image";

export default function Avatar({ size = 160 }: { size?: number }) {
  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-full border border-border bg-surface"
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
