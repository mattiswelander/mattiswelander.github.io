import heroPortrait from "@/assets/hero-portrait.jpg";
import { studio } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="cool-light">
      <div className="shell grid items-end gap-10 pb-16 pt-20 md:grid-cols-12 md:pb-20 md:pt-24">
        <div className="md:col-span-7">
          <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.22em] text-brand">
            Photography &middot; {studio.location}
          </p>
          <h1 className="font-serif text-4xl leading-[1.06] tracking-tight text-ink md:text-5xl">
            Quiet pictures for
            <br className="hidden sm:block" /> small brands and people.
          </h1>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-subtle">
            {studio.name} is a one-person studio. Fewer jobs, taken slowly, from the first note to
            the final files.
          </p>
          <div className="mt-8">
            <a href="#work" className="btn-quiet">
              See the work <span aria-hidden="true">&rarr;</span>
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
