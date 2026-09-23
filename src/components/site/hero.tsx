import heroPortrait from "@/assets/hero-portrait.jpg";
import { studio } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="cool-light">
      <div className="shell grid items-end gap-10 pb-16 pt-20 md:grid-cols-12 md:pb-24 md:pt-28">
        <div className="md:col-span-7">
          <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.22em] text-brand">
            Portrait &amp; editorial photography
          </p>
          <h1 className="font-serif text-5xl leading-[1.02] tracking-tight text-ink md:text-6xl">
            Quiet, considered
            <br className="hidden sm:block" /> portraiture &amp; editorial work.
          </h1>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-subtle">
            {studio.name} is a photography practice for brands, editors, and people who value
            restraint. We work slowly, light carefully, and edit with intent.
          </p>
          <div className="mt-8 flex items-center gap-5">
            <a href="#work" className="btn-solid">
              View selected work
            </a>
            <a href="#services" className="btn-quiet">
              Explore services <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="md:col-span-5">
          <img
            src={heroPortrait}
            alt="Portrait of a woman in soft natural window light against a neutral studio wall"
            width={1024}
            height={1280}
            className="aspect-[4/5] w-full rounded-xl object-cover outline-1 -outline-offset-1 outline-ink/10"
          />
        </div>
      </div>
    </section>
  );
}
