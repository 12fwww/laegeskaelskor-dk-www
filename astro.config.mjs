// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The preview is served from https://12fwww.github.io/laegeskaelskor-dk-www/
// At launch (PUBLIC_PREVIEW=0, base '/', site to the domain) the same source works
// on the customer's own domain.
export default defineConfig({
  site: 'https://12fwww.github.io',
  base: '/laegeskaelskor-dk-www',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
