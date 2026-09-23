import { studio } from "@/lib/site";

const links = [
  { label: "Instagram", href: "#" },
  { label: "Behance", href: "#" },
  { label: "Privacy", href: "#" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="shell flex flex-col items-center justify-between gap-4 py-8 text-[12px] text-subtle md:flex-row">
        <span>
          &copy; {new Date().getFullYear()} {studio.name}. All rights reserved.
        </span>
        <div className="flex items-center gap-6">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="transition-colors hover:text-ink">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
