import { Link } from "@tanstack/react-router";
import { useState } from "react";

import { navItems, studio } from "@/lib/site";
import { labelShift } from "@/lib/motion";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="glass sticky top-0 z-50 border-b border-line">
      <div className="shell flex h-16 items-center justify-between">
        <Link
          to="/"
          className="group relative pb-1 font-display text-lg tracking-tight text-ink"
        >
          <span>{studio.brand}</span>
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-px w-full bg-subtle/40"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group relative pb-1 text-[13px] font-medium text-subtle transition-colors duration-200 hover:text-ink"
              activeProps={{
                className:
                  "group relative pb-1 text-[13px] font-medium text-ink",
              }}
            >
              {({ isActive }) => (
                <>
                  <span className={labelShift}>{item.label}</span>
                  {isActive ? (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 h-px w-full bg-brand"
                    />
                  ) : null}
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
            className={`h-px w-5 bg-ink transition-[translate,rotate] duration-300 ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-5 bg-ink transition-[translate,rotate] duration-300 ${
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
