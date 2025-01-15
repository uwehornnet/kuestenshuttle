// @ts-check
import { defineConfig } from 'astro/config';

import auth from "auth-astro";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  adapter: vercel(),
});