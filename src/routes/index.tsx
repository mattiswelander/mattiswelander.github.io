import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/site/about";
import { Contact } from "@/components/site/contact";
import { Hero } from "@/components/site/hero";
import { SelectedWork } from "@/components/site/selected-work";
import { Services } from "@/components/site/services";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { studio } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${studio.name} — Portrait & Editorial Photography` },
      {
        name: "description",
        content:
          "Quiet, considered portraiture, editorial and still-life photography for brands, editors and individuals. Book a session with Halcyon Studio.",
      },
      { property: "og:title", content: `${studio.name} — Portrait & Editorial Photography` },
      {
        property: "og:description",
        content:
          "A small photography practice built on patience and light. Portraiture, editorial and still life, delivered with intent.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: studio.name },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `${studio.name} — Portrait & Editorial Photography` },
      {
        name: "twitter:description",
        content:
          "Quiet, considered portraiture, editorial and still-life photography. Book a session.",
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
        <SelectedWork />
        <Services />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
