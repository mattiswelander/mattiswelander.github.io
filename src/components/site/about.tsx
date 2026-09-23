import { studio } from "@/lib/site";

export function About() {
  return (
    <section>
      <div className="shell py-16 md:py-20">
        <h2 className="font-display text-2xl tracking-tight text-ink">Om mig</h2>
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-subtle">
          Jag heter {studio.name} och bor utanför {studio.location}. Jag går andra året på Fordon och
          transport på Fyrvalla då jag har ett stort bilintresse. Sedan flera år tillbaka har jag
          varit intresserad av foto, och i år har jag valt att satsa mer på fotohobbyn och startat
          enskild firma.
        </p>
      </div>
    </section>
  );
}
