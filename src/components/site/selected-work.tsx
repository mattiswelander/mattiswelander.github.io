import { works } from "@/lib/site";

export function SelectedWork() {
  return (
    <section id="work" className="shell py-16 md:py-20">
      <div className="mb-10 flex items-end justify-between border-b border-line pb-5">
        <h2 className="font-serif text-3xl tracking-tight text-ink">Selected work</h2>
        <span className="text-[11px] uppercase tracking-[0.18em] text-subtle">2019 &mdash; 2025</span>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {works.map((item) => (
          <figure key={item.title} className="group">
            <img
              src={item.image}
              alt={item.alt}
              loading="lazy"
              width={1024}
              height={1024}
              className="aspect-square w-full rounded-lg object-cover outline-1 -outline-offset-1 outline-ink/10 transition-transform duration-500 group-hover:scale-[1.015]"
            />
            <figcaption className="mt-4 flex items-baseline justify-between">
              <h3 className="font-serif text-lg text-ink">{item.title}</h3>
              <span className="text-[12px] text-subtle">{item.category}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
