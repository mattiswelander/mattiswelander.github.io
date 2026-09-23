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
      next.details = "Tell us a little more about the shoot.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;

    const subject = `Session enquiry — ${values.name.trim()}`;
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
      <div className="shell py-16 md:py-24">
        <div className="glass grid gap-10 rounded-2xl border border-line p-8 md:grid-cols-2 md:p-12">
          <div>
            <h2 className="font-serif text-3xl tracking-tight text-ink">Book a session</h2>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-subtle">
              Tell us a little about your project and we&rsquo;ll reply within two working days with
              availability and a proposal.
            </p>
            <div className="mt-8 space-y-3 text-[14px] text-ink">
              <p className="flex items-center gap-3">
                <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
                <a href={`mailto:${studio.email}`} className="hover:text-brand">
                  {studio.email}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
                {studio.phone}
              </p>
              <p className="flex items-center gap-3">
                <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
                {studio.location}
              </p>
            </div>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-[12px] font-medium text-subtle"
              >
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
              <label
                htmlFor="email"
                className="mb-1.5 block text-[12px] font-medium text-subtle"
              >
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
              <label
                htmlFor="details"
                className="mb-1.5 block text-[12px] font-medium text-subtle"
              >
                Project details
              </label>
              <textarea
                id="details"
                name="details"
                rows={3}
                value={values.details}
                onChange={(event) => update("details", event.target.value)}
                placeholder="Tell us about the shoot you have in mind…"
                aria-invalid={Boolean(errors.details)}
                className="field resize-none"
              />
              {errors.details ? (
                <p className="mt-1.5 text-[12px] text-destructive">{errors.details}</p>
              ) : null}
            </div>

            <button type="submit" className="btn-solid w-full">
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
                  <button
                    type="button"
                    onClick={copyMessage}
                    className="text-brand hover:underline"
                  >
                    {copied ? "Message copied" : "copy your message"}
                  </button>
                  .
                </p>
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
