import { Link } from "@tanstack/react-router";
import { useState } from "react";

import { navItems, studio } from "@/lib/site";

/* Focus-pull: the label blurs and slides out while a duplicate comes into focus. */
const pull =
  "transition-[transform,filter,opacity] duration-[520ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none motion-reduce:blur-[0px]";

/* Hairline that draws itself in from the left on hover. */
const redraw =
  "group-hover:animate-[rule-redraw_560ms_cubic-bezier(0.16,1,0.3,1)_both] motion-reduce:group-hover:animate-none";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="glass sticky top-0 z-50 border-b border-line">
      <div className="shell flex h-16 items-center justify-between">
        <Link
          to="/"
          className="group relative pb-1 font-display text-lg tracking-tight text-ink"
        >
          <span className="relative block overflow-hidden leading-[1.5]">
            <span
              className={`block blur-[0px] group-hover:-translate-y-full group-hover:blur-[4px] ${pull}`}
            >
              {studio.brand}
            </span>
            <span
              aria-hidden="true"
              className={`absolute inset-0 block translate-y-full opacity-0 blur-[4px] group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-[0px] ${pull}`}
            >
              {studio.brand}
            </span>
          </span>
          <span
            aria-hidden="true"
            className={`absolute bottom-0 left-0 h-px w-full origin-left bg-subtle/40 motion-reduce:transition-none ${redraw}`}
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group relative pb-1 text-[13px] font-medium text-subtle transition-colors duration-300 hover:text-ink"
              activeProps={{
                className: "group relative pb-1 text-[13px] font-medium text-ink",
              }}
            >
              {({ isActive }) => (
                <>
                  <span className="relative block overflow-hidden leading-[1.5]">
                    <span
                      className={`block blur-[0px] group-hover:-translate-y-full group-hover:blur-[3px] ${pull}`}
                    >
                      {item.label}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`absolute inset-0 block translate-y-full opacity-0 blur-[3px] group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-[0px] ${pull}`}
                    >
                      {item.label}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className={`absolute bottom-0 left-0 h-px w-full origin-left ${
                      isActive
                        ? "bg-brand"
                        : `scale-x-0 bg-subtle/40 motion-reduce:transition-none ${redraw}`
                    }`}
                  />
                </>
              )}
            </Link>
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
            {navItems.map((item, index) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                style={{ animationDelay: `${index * 60}ms` }}
                className="menu-rise border-b border-line py-3 text-[13px] font-medium text-subtle transition-colors last:border-b-0 hover:text-ink"
                activeProps={{
                  className:
                    "menu-rise border-b border-line py-3 text-[13px] font-medium text-ink last:border-b-0",
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
