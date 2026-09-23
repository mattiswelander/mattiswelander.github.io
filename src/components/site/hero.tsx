import { heroImage, studio } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="cool-light">
      <div className="shell grid items-end gap-10 pb-16 pt-20 md:grid-cols-12 md:pb-20 md:pt-24">
        <div className="md:col-span-6">
          <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.22em] text-brand">
            Fotografi &middot; {studio.location}
          </p>
          <h1 className="font-display text-4xl leading-[1.06] tracking-tight text-ink md:text-5xl">
            Bilder för evenemang,
            <br className="hidden sm:block" /> personer och små verksamheter.
          </h1>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-subtle">
            Jag heter {studio.name}, jag är 18 år och bor utanför {studio.location}. Till vardags
            går jag Fordon och transport.
          </p>
          <div className="mt-8">
            <a href="#portfolj" className="btn-quiet">
              Se portföljen <span aria-hidden="true">&rarr;</span>
            </a>
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
