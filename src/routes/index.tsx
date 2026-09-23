import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/site/about";
import { Contact } from "@/components/site/contact";
import { Hero } from "@/components/site/hero";
import { Project } from "@/components/site/project";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { studio } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${studio.name} — Fotografi i ${studio.location}` },
      {
        name: "description",
        content:
          "Enskild firma i Östersund. Reportage från evenemang, porträtt och bilder åt små verksamheter. Ett uppdrag i taget.",
      },
      { property: "og:title", content: `${studio.name} — Fotografi i ${studio.location}` },
      {
        property: "og:description",
        content:
          "Reportage, porträtt och bilder åt små verksamheter, tagna av en person som jobbar själv.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: studio.name },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `${studio.name} — Fotografi i ${studio.location}` },
      {
        name: "twitter:description",
        content: "Reportage, porträtt och bilder åt små verksamheter. Ett uppdrag i taget.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-ink antialiased">
      <SiteHeader />
      <main>
        <Hero />
        <Project />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
