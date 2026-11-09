// "sr." lockup: a 44×44 ink rounded square holding lowercase "sr" + a
// yellow dot, followed by the "samantha rodrigo" wordmark. Used in the
// Header; exploration "1a" from SR Logo.dc.html (the one that was chosen).
export default function Logo() {
  return (
    <span className="flex items-center gap-3 whitespace-nowrap font-display font-extrabold">
      <span className="flex h-11 w-11 shrink-0 items-baseline justify-center rounded-xl bg-ink pt-[3px] text-[26px] leading-[1.3] tracking-[-0.07em] text-sun">
        sr
        <span className="ml-[0.06em] h-[0.2em] w-[0.2em] rounded-full bg-sun" />
      </span>
      <span className="text-xl tracking-[-0.03em]">samantha rodrigo</span>
    </span>
  );
}
