import { useEffect, useState } from "react";

import { navItems, studio } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((element): element is Element => element !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="glass sticky top-0 z-50 border-b border-line">
      <div className="shell flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="size-2.5 rounded-full bg-brand" aria-hidden="true" />
          <span className="font-serif text-lg tracking-tight text-ink">{studio.name}</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href ? "true" : undefined}
              className={`relative text-[13px] font-medium transition-colors hover:text-ink ${
                active === item.href ? "text-ink" : "text-subtle"
              }`}
            >
              {item.label}
              <span
                aria-hidden="true"
                className={`absolute -bottom-1.5 left-0 h-px w-full origin-left bg-brand transition-transform duration-300 ${
                  active === item.href ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Stäng menyn" : "Öppna menyn"}
          className="flex size-9 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className={`h-px w-5 bg-ink transition-transform duration-300 ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-5 bg-ink transition-transform duration-300 ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open ? (
        <nav className="border-t border-line md:hidden">
          <div className="shell flex flex-col py-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`border-b border-line py-3 text-[13px] font-medium transition-colors last:border-b-0 hover:text-ink ${
                  active === item.href ? "text-ink" : "text-subtle"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
