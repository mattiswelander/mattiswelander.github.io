import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/site/about";
import { studio } from "@/lib/site";

export const Route = createFileRoute("/om-mig")({
  head: () => ({
    meta: [
      { title: `Om mig — ${studio.name}` },
      {
        name: "description",
        content: `Kort om mig: ${studio.name}, bor utanför ${studio.location} och fotar vid sidan av skolan.`,
      },
      { property: "og:title", content: `Om mig — ${studio.name}` },
      {
        property: "og:description",
        content: `Kort om mig: ${studio.name}, bor utanför ${studio.location} och fotar vid sidan av skolan.`,
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OmMigPage,
});

function OmMigPage() {
  return <About />;
}
