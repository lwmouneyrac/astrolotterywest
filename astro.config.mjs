// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://astrolotterywest.netlify.app",
  integrations: [preact(), icon()]
});