import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import robotsTxt from 'astro-robots-txt';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.anasouardini.online",
  integrations: [sitemap(), robotsTxt(), tailwind()]
});