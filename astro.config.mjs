import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import embeds from "astro-embed/integration";

export default defineConfig({
  site: "https://realm-2025.vercel.app",
  integrations: [embeds(), mdx(), sitemap(), tailwind()],
});
