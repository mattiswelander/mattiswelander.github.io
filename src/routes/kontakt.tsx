import { createFileRoute } from "@tanstack/react-router";

import { Contact } from "@/components/site/contact";
import { studio } from "@/lib/site";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: `Kontakt — ${studio.name}` },
      {
        name: "description",
        content: `Hör av dig till ${studio.name} i ${studio.location} via formuläret eller ${studio.email}.`,
      },
      { property: "og:title", content: `Kontakt — ${studio.name}` },
      {
        property: "og:description",
        content: `Hör av dig till ${studio.name} i ${studio.location} via formuläret eller ${studio.email}.`,
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: KontaktPage,
});

function KontaktPage() {
  return <Contact />;
}
