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
			immediate: true ,
			
			manifest: {
				name: "MedicHelp",
				short_name: "PWAMH",
				icons: [
				  {
					src: "/images/icons/app-icon-48x48.png",
					type: "image/png",
					sizes: "48x48"
				  },
				  {
					src: "/images/icons/app-icon-57x57.png",
					type: "image/png",
					sizes: "57x57"
				  },
				  {
					src: "/images/icons/app-icon-60x60.png",
					type: "image/png",
					sizes: "60x60"
				  },
				  {
					src: "/images/icons/app-icon-72x72.png",
					type: "image/png",
					sizes: "72x72"
				  },
				  {
					src: "/images/icons/app-icon-120x120.png",
					type: "image/png",
					sizes: "120x120"
				  },
				  {
					src: "/images/icons/app-icon-144x144.png",
					type: "image/png",
					sizes: "144x144"
				  },
				  {
					src: "/images/icons/app-icon-152x152.png",
					type: "image/png",
					sizes: "152x152"
				  },
				  {
					src: "/images/icons/app-icon-180x180.png",
					type: "image/png",
					sizes: "180x180"
				  },
				  {
					src: "/images/icons/app-icon-192x192.png",
					type: "image/png",
					sizes: "192x192"
				  },
				  {
					src: "/images/icons/app-icon-256x256.png",
					type: "image/png",
					sizes: "256x256"
				  },
				  {
					src: "/images/icons/app-icon-384x384.png",
					type: "image/png",
					sizes: "384x384"
				  },
				  {
					src: "/images/icons/app-icon-512x512.png",
					type: "image/png",
					sizes: "512x512"
				  }
				],
			
			  },
		  }),
		],
})
