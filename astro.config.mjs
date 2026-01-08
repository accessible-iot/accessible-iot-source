// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://accessible-iot.org',
  base: '/',
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: 'dracula'
    }
  }
});
