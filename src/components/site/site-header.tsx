import { useState } from "react";

import { navItems, studio } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

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
              className="text-[13px] font-medium text-subtle transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="btn-outline hidden sm:inline-flex">
            Book a session
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
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
      </div>

      {open ? (
        <nav className="border-t border-line md:hidden">
          <div className="shell flex flex-col py-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3 text-[13px] font-medium text-subtle transition-colors last:border-b-0 hover:text-ink"
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-solid my-3 sm:hidden">
              Book a session
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
