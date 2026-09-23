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
      { title: `${studio.name} — Photography in ${studio.location}` },
      {
        name: "description",
        content:
          "A one-person photography studio for portraits, small editorial jobs and product photos. Quiet, considered work — one client at a time.",
      },
      { property: "og:title", content: `${studio.name} — Photography in ${studio.location}` },
      {
        property: "og:description",
        content:
          "Portraits, small editorial jobs and product photos from a one-person studio. One client at a time.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: studio.name },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `${studio.name} — Photography in ${studio.location}` },
      {
        name: "twitter:description",
        content: "Portraits, small editorial jobs and product photos. One client at a time.",
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
