import hallPhoto from "@/assets/finsittning-hall.jpg.asset.json";
import tablePhoto from "@/assets/finsittning-table.jpg.asset.json";

export const studio = {
  name: "Mattis Welander",
  email: "mattis.welander@gmail.com",
  location: "Östersund",
};

export const navItems = [
  { label: "Portfölj", to: "/portfolj" },
  { label: "Om mig", to: "/om-mig" },
  { label: "Kontakt", to: "/kontakt" },
] as const;

export const heroImage = {
  src: tablePhoto.url,
  alt: "Studenter samlade runt ett vitt dukat långbord under en finsittning, med fönster och mjuk kvällsbelysning bakom.",
};

export const project = {
  client: "Studentkåren i Östersund",
  title: "Finsittning",
  image: hallPhoto.url,
  alt: "Folktät samling i en sal under en finsittning, med gula flaggor som löper över rummet.",
};
