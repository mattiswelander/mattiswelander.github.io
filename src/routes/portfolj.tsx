import { createFileRoute } from "@tanstack/react-router";

import { Project } from "@/components/site/project";
import { studio } from "@/lib/site";

export const Route = createFileRoute("/portfolj")({
  head: () => ({
    meta: [
      { title: `Portfölj — ${studio.name}` },
      {
        name: "description",
        content: "Bilder från uppdrag jag har fotat, bland annat Studentkårens finsittning.",
      },
      { property: "og:title", content: `Portfölj — ${studio.name}` },
      {
        property: "og:description",
        content: "Bilder från uppdrag jag har fotat, bland annat Studentkårens finsittning.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfoljPage,
});

function PortfoljPage() {
  return <Project />;
}
