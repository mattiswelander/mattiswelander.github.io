/* Shared motion vocabulary for the site.
 * underlineSlide: a hairline grows in from the left on hover (simple, visible).
 * labelShift: text color transitions smoothly on hover. */

export const underlineSlide =
  "absolute bottom-0 left-0 h-px transition-[width] duration-500 ease-out motion-reduce:transition-none";

export const labelShift =
  "transition-colors duration-300 ease-out motion-reduce:transition-none";
