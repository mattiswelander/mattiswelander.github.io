export function About() {
  return (
    <section id="om-mig" className="border-t border-line">
      <div className="shell grid gap-10 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <h2 className="font-serif text-2xl tracking-tight text-ink">Om mig</h2>
        </div>
        <div className="md:col-span-7">
          <p className="max-w-lg text-[15px] leading-relaxed text-subtle">
            Jag är enskild firma utan assistenter, crew eller andrefotograf. Det betyder att jag
            tar på mig färre uppdrag och håller mig nära det jag väljer att göra.
          </p>
        </div>
      </div>
    </section>
  );
}
