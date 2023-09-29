import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify'
// vite.config.js / vite.config.ts 
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
		vue(),
		vuetify({ autoImport: true }),
		VitePWA({
			manifest: {
			  name: 'Medico',
			  short_name: 'Mi PWA',
			  start_url: '/',
			  display: 'standalone',
			  background_color: '#F6F6F6',
			  theme_color: '#5DB075',
			  icons: [
				{
				  src: './src/assets/logo.svg',
				  sizes: '192x192',
				  type: 'image/png',
				},
			  ],
			},
		  }),
		],
})
