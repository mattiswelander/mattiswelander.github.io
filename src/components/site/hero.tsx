import { Link } from "@tanstack/react-router";

import { heroImage, studio } from "@/lib/site";
import { focusPull, ruleRedraw } from "@/lib/motion";

export function Hero() {
  return (
    <section id="top" className="cool-light">
      <div className="shell grid items-end gap-10 pb-16 pt-20 md:grid-cols-12 md:pb-20 md:pt-24">
        <div className="md:col-span-6">
          <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.22em] text-brand">
            Fotografi &middot; {studio.location}
          </p>
          <h1 className="font-display text-4xl leading-[1.06] tracking-tight text-ink md:text-5xl">
            Bilder för företag,
            <br className="hidden sm:block" /> föreningar och privatpersoner
            <br />
            <span className="text-[0.62em] leading-[1.35] text-subtle">
              &ndash; till hemsidor, sociala medier och mer.
            </span>
          </h1>
          <div className="mt-8">
            <Link to="/portfolj" className="group relative inline-block pb-1">
              <span className="btn-quiet">
                <span className="relative block overflow-hidden leading-[1.5]">
                  <span
                    className={`block blur-[0px] group-hover:-translate-y-full group-hover:blur-[3px] ${focusPull}`}
                  >
                    Se portföljen
                  </span>
                  <span
                    aria-hidden="true"
                    className={`absolute inset-0 block translate-y-full opacity-0 blur-[3px] group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-[0px] ${focusPull}`}
                  >
                    Se portföljen
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 motion-reduce:transition-none"
                >
                  &rarr;
                </span>
              </span>
              <span
                aria-hidden="true"
                className={`absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-brand/40 ${ruleRedraw}`}
              />
            </Link>
          </div>
        </div>
        <div className="md:col-span-6">
          <img
            src={heroImage.src}
            alt={heroImage.alt}
            width={1920}
            height={1280}
            className="h-auto w-full rounded-xl object-cover outline-1 -outline-offset-1 outline-ink/10"
          />
        </div>
      </div>
    </section>
  );
}
