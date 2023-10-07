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
					src: "/images/icons/app-icon-96x96.png",
					type: "image/png",
					sizes: "96x96"
				  },
				  {
					src: "/images/icons/app-icon-144x144.png",
					type: "image/png",
					sizes: "144x144"
				  }
				],
			
			  },
		  }),
		],
})
