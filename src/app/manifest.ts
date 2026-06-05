import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Zuppa Soup Creamy Pondok Mutiara",
    short_name: "Zuppa Soup",
    description:
      "Zuppa Soup Creamy Pondok Mutiara - Kelezatan rumahan dengan bahan premium di Cimahi. Menu zuppa soup, burger, pasta, dan catering.",
    start_url: "/",
    display: "standalone",
    background_color: "#fef9e7",
    theme_color: "#9e3d00",
    orientation: "portrait",
    categories: ["food", "restaurant"],
    icons: [
      {
        src: "/icon.jpeg",
        sizes: "512x512",
        type: "image/jpeg",
        purpose: "any",
      },
    ],
  };
}
