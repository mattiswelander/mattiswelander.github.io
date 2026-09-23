import aboutStudio from "@/assets/about-studio.jpg";
import workConcrete from "@/assets/work-concrete.jpg";
import workLinen from "@/assets/work-linen.jpg";
import workStillLife from "@/assets/work-still-life.jpg";

export const studio = {
  name: "Halcyon Studio",
  email: "studio@halcyon.studio",
  phone: "+1 (555) 014-2280",
  location: "Copenhagen — studio visits by appointment",
  responseTime: "Two working days",
};

export const navItems = [
  { label: "Selected Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const works = [
  {
    image: workStillLife,
    title: "Still Life, No. 4",
    category: "Product",
    alt: "Two matte ceramic vessels on a pale stone surface in soft daylight",
  },
  {
    image: workLinen,
    title: "Linen, Winter",
    category: "Editorial",
    alt: "Model in loose natural linen lit by soft window light",
  },
  {
    image: workConcrete,
    title: "Concrete Study",
    category: "Architecture",
    alt: "A shaft of daylight falling across a calm concrete interior",
  },
];

export const services = [
  {
    title: "Portrait & Headshot",
    description: "Studio or on-location, single or team.",
    price: "from $450",
  },
  {
    title: "Editorial & Campaign",
    description: "Concept, direction, and full production.",
    price: "from $1,800",
  },
  {
    title: "Product & Still Life",
    description: "Clean, considered imagery for catalogues.",
    price: "from $650",
  },
];

export const aboutImage = {
  src: aboutStudio,
  alt: "Photographer at work in a bright studio, reviewing negatives at a light table",
};
