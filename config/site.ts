interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  creator: { name: string; url: string };
  keywords: string[];
  links: { github: string };
}

export const siteConfig: SiteConfig = {
  name: "CineHub",
  description: "Your Ultimate Movie & TV Discovery Platform",
  url: "https://github.com/engraya/cinehub",
  ogImage: "",
  creator: {
    name: "Engraya",
    url: "https://github.com/engraya",
  },
  keywords: ["nextjs", "typescript", "tailwindcss", "movies", "tmdb", "tv-shows"],
  links: {
    github: "https://github.com/engraya/cinehub",
  },
};
