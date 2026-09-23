import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/site/hero";
import { studio } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${studio.name} — Fotografi i ${studio.location}` },
      {
        name: "description",
        content:
          "Bilder för företag, föreningar och privatpersoner – till hemsidor, sociala medier och mer. Enskild firma i Östersund.",
      },
      { property: "og:title", content: `${studio.name} — Fotografi i ${studio.location}` },
      {
        property: "og:description",
        content:
          "Bilder för företag, föreningar och privatpersoner – till hemsidor, sociala medier och mer.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: studio.name },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `${studio.name} — Fotografi i ${studio.location}` },
      {
        name: "twitter:description",
        content:
          "Bilder för företag, föreningar och privatpersoner – till hemsidor, sociala medier och mer.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return <Hero />;
}
