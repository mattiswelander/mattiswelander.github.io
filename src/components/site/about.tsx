import { notes } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="border-t border-line">
      <div className="shell grid gap-10 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <h2 className="font-serif text-2xl tracking-tight text-ink">About</h2>
        </div>
        <div className="md:col-span-7">
          <p className="max-w-lg text-[15px] leading-relaxed text-subtle">
            A sole trader &mdash; no assistants, no crew, no second photographer. That means I take
            on less work and stay close to the one I have.
          </p>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {notes.map((note) => (
              <li key={note} className="py-3.5 text-[14px] leading-relaxed text-ink">
                {note}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
