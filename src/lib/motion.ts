/* Shared motion vocabulary for the site.
 * focusPull: a label blurs and slides away while a duplicate comes into focus.
 * ruleRedraw: a hairline draws itself in from the left on hover. */

export const focusPull =
  "transition-[translate,filter,opacity] duration-[520ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none";

export const ruleRedraw =
  "group-hover:animate-[rule-redraw_560ms_cubic-bezier(0.16,1,0.3,1)_both] motion-reduce:group-hover:animate-none";
