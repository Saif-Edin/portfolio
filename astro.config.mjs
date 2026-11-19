import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://saifedin.it',
  output: 'static',
  integrations: [sitemap()],
})
