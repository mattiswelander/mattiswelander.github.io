import { studio } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="shell flex flex-col items-center justify-between gap-3 py-7 text-[12px] text-subtle md:flex-row">
        <span>
          &copy; {new Date().getFullYear()} {studio.name} &middot; {studio.location}
        </span>
        <a href={`mailto:${studio.email}`} className="transition-colors hover:text-ink">
          {studio.email}
        </a>
      </div>
    </footer>
  );
}
