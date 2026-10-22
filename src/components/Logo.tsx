export const APP_NAME = "ADIT Career Bridge";

/**
 * Brand logo: the exact ADIT image, shown as-is (never redrawn or recoloured).
 * The source image has a white background, so it sits in a neutral rounded
 * container that reads on both light and dark surfaces.
 */
export function Logo({ size = 34, full = true }: { size?: number; full?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <img
        src="/logo-nav.png"
        alt="ADIT Career Bridge logo"
        width={size}
        height={size}
        className="rounded-md bg-black p-0.5 ring-1 ring-border/60 object-cover shrink-0"
        style={{ width: size, height: size }}
      />
      {full && (
        <span className="inline-flex flex-col leading-none">
          <span className="text-[17px] font-bold text-foreground">ADIT</span>
          <span className="text-[11px] font-semibold tracking-wide text-muted-foreground">
            Career Bridge
          </span>
        </span>
      )}
    </span>
  );
}
