import { useState } from "react";

import { studio } from "@/lib/site";

type Fields = { name: string; email: string; details: string };
type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { name: "", email: "", details: "" };

export function Contact() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const message = `Name: ${values.name}
Email: ${values.email}

${values.details}`;

  function update(field: keyof Fields, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSent(false);
  }

  function validate(): boolean {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Please add your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      next.email = "Please add a valid email address.";
    if (values.details.trim().length < 10)
      next.details = "Tell me a little about the shoot.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;

    const subject = `Enquiry — ${values.name.trim()}`;
    window.location.href = `mailto:${studio.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(message)}`;
    setSent(true);
  }

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="contact" className="border-t border-line">
      <div className="shell grid gap-10 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <h2 className="font-serif text-2xl tracking-tight text-ink">Contact</h2>
          <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-subtle">
            Send a few lines about what you need and where you are. You&rsquo;ll hear back with
            availability and a price.
          </p>
          <div className="mt-6 space-y-2 text-[14px] text-ink">
            <a href={`mailto:${studio.email}`} className="block hover:text-brand">
              {studio.email}
            </a>
            <p className="text-subtle">{studio.location}</p>
          </div>
        </div>

        <form className="space-y-4 md:col-span-7" onSubmit={handleSubmit} noValidate>
          <div>
            <label htmlFor="name" className="mb-1.5 block text-[12px] font-medium text-subtle">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={values.name}
              onChange={(event) => update("name", event.target.value)}
              placeholder="Your name"
              aria-invalid={Boolean(errors.name)}
              className="field"
            />
            {errors.name ? (
              <p className="mt-1.5 text-[12px] text-destructive">{errors.name}</p>
            ) : null}
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-[12px] font-medium text-subtle">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={(event) => update("email", event.target.value)}
              placeholder="you@email.com"
              aria-invalid={Boolean(errors.email)}
              className="field"
            />
            {errors.email ? (
              <p className="mt-1.5 text-[12px] text-destructive">{errors.email}</p>
            ) : null}
          </div>

          <div>
            <label htmlFor="details" className="mb-1.5 block text-[12px] font-medium text-subtle">
              What you need
            </label>
            <textarea
              id="details"
              name="details"
              rows={4}
              value={values.details}
              onChange={(event) => update("details", event.target.value)}
              placeholder="A short description of the shoot…"
              aria-invalid={Boolean(errors.details)}
              className="field resize-none"
            />
            {errors.details ? (
              <p className="mt-1.5 text-[12px] text-destructive">{errors.details}</p>
            ) : null}
          </div>

          <button type="submit" className="btn-solid">
            Send inquiry
          </button>

          {sent ? (
            <div className="rounded-lg border border-line bg-panel p-4 text-[13px] leading-relaxed text-subtle">
              <p className="font-medium text-ink">Your email app should be opening.</p>
              <p className="mt-1">
                If nothing appeared, email{" "}
                <a href={`mailto:${studio.email}`} className="text-brand hover:underline">
                  {studio.email}
                </a>{" "}
                directly —{" "}
                <button type="button" onClick={copyMessage} className="text-brand hover:underline">
                  {copied ? "Message copied" : "copy your message"}
                </button>
                .
              </p>
            </div>
          ) : null}
        </form>
      </div>
    </section>
  );
}
