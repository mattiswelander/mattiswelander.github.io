import { project } from "@/lib/site";

export function Project() {
  return (
    <section id="portfolj" className="shell py-16 md:py-20">
      <div className="mb-10 flex items-end justify-between border-b border-line pb-5">
        <h2 className="font-serif text-2xl tracking-tight text-ink">Portfölj</h2>
        <span className="text-[11px] uppercase tracking-[0.18em] text-subtle">Ett uppdrag</span>
      </div>

      <p className="mb-8 max-w-md text-[14px] leading-relaxed text-subtle">
        En kund så här långs. Jag visar den hellre som det är än fyller sidan med saker som aldrig
        hänt.
      </p>

      <figure>
        <img
          src={project.image}
          alt={project.alt}
          loading="lazy"
          width={1920}
          height={1280}
          className="h-auto w-full rounded-lg object-cover outline-1 -outline-offset-1 outline-ink/10"
        />
        <figcaption className="mt-5 grid gap-4 md:grid-cols-12">
          <div className="md:col-span-7">
            <h3 className="font-serif text-xl text-ink">{project.title}</h3>
            <p className="mt-2 max-w-lg text-[14px] leading-relaxed text-subtle">
              {project.summary}
            </p>
          </div>
          <dl className="space-y-1 text-[13px] md:col-span-5 md:text-right">
            <div className="flex gap-2 md:justify-end">
              <dt className="text-subtle">Kund</dt>
              <dd className="text-ink">{project.client}</dd>
            </div>
          </dl>
        </figcaption>
      </figure>
    </section>
  );
}
