import { services } from "@/lib/site";

export function Services() {
  return (
    <section id="services" className="border-t border-line">
      <div className="shell grid gap-10 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-4">
          <h2 className="font-serif text-3xl tracking-tight text-ink">Services</h2>
          <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-subtle">
            Three focused offerings, each delivered with a full edit and a considered handoff.
          </p>
        </div>
        <div className="divide-y divide-line md:col-span-8">
          {services.map((service) => (
            <div key={service.title} className="flex items-center justify-between gap-6 py-6">
              <div>
                <h3 className="font-serif text-xl text-ink">{service.title}</h3>
                <p className="mt-1 text-[14px] text-subtle">{service.description}</p>
              </div>
              <span className="whitespace-nowrap text-[13px] font-medium text-brand">
                {service.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
