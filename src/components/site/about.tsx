import { aboutImage, studio } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="border-t border-line">
      <div className="shell grid items-center gap-10 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <img
            src={aboutImage.src}
            alt={aboutImage.alt}
            loading="lazy"
            width={1024}
            height={1280}
            className="aspect-[4/5] w-full rounded-xl object-cover outline-1 -outline-offset-1 outline-ink/10"
          />
        </div>
        <div className="md:col-span-7">
          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.22em] text-brand">
            About the studio
          </p>
          <h2 className="font-serif text-3xl leading-[1.1] tracking-tight text-ink md:text-4xl">
            A small practice built on patience and light.
          </h2>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-subtle">
            {studio.name} works with a limited number of clients each season. We believe the best
            images are the ones that don&rsquo;t shout &mdash; restrained, honest, and made to last.
          </p>
        </div>
      </div>
    </section>
  );
}
