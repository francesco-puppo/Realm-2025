import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import rss from "@astrojs/rss";
import { targetBlank } from "./src/plugins/targetBlank";

export default defineConfig({
  site: "https://iamfran.netlify.app",
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    rehypePlugins: [[targetBlank, { domain: "yourdomain.com" }]],
  },
});
