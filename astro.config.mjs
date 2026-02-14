import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  integrations: [react()],
  assets: {
    // Enable Astro's built-in image optimization
    // You can configure domains, cache, etc. here if needed
  },
});
