import { project } from "@/lib/site";

export function Project() {
  return (
    <section className="shell py-16 md:py-20">
      <div className="mb-10 border-b border-line pb-5">
        <h2 className="font-display text-2xl tracking-tight text-ink">Portfölj</h2>
      </div>

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
            <h3 className="font-display text-xl text-ink">{project.title}</h3>
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
