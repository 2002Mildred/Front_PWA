// vite.config.js
import { defineConfig } from "file:///C:/vite/my-pwa/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/vite/my-pwa/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vuetify from "file:///C:/vite/my-pwa/node_modules/vite-plugin-vuetify/dist/index.js";
import { VitePWA } from "file:///C:/vite/my-pwa/node_modules/vite-plugin-pwa/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true }),
    VitePWA({
      immediate: true,
      manifest: {
        name: "MedicHelp",
        short_name: "PWAMH",
        start_url: "/",
  display: "standalone",
  background_color: "#ffffff",
  theme_color: "#4CAF50",
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
        ]
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFx2aXRlXFxcXG15LXB3YVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcdml0ZVxcXFxteS1wd2FcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L3ZpdGUvbXktcHdhL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdnVldGlmeWpzL3Z1ZXRpZnktbG9hZGVyL3RyZWUvbmV4dC9wYWNrYWdlcy92aXRlLXBsdWdpblxuaW1wb3J0IHZ1ZXRpZnkgZnJvbSAndml0ZS1wbHVnaW4tdnVldGlmeSdcbi8vIHZpdGUuY29uZmlnLmpzIC8gdml0ZS5jb25maWcudHMgXG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSAndml0ZS1wbHVnaW4tcHdhJ1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuXHRcdHZ1ZSgpLFxuXHRcdHZ1ZXRpZnkoeyBhdXRvSW1wb3J0OiB0cnVlIH0pLFxuXHRcdFZpdGVQV0Eoe1xuXHRcdFx0aW1tZWRpYXRlOiB0cnVlICxcblx0XHRcdFxuXHRcdFx0bWFuaWZlc3Q6IHtcblx0XHRcdFx0bmFtZTogXCJNZWRpY0hlbHBcIixcblx0XHRcdFx0c2hvcnRfbmFtZTogXCJQV0FNSFwiLFxuXHRcdFx0XHRpY29uczogW1xuXHRcdFx0XHQgIHtcblx0XHRcdFx0XHRzcmM6IFwiL2ltYWdlcy9pY29ucy9hcHAtaWNvbi00OHg0OC5wbmdcIixcblx0XHRcdFx0XHR0eXBlOiBcImltYWdlL3BuZ1wiLFxuXHRcdFx0XHRcdHNpemVzOiBcIjQ4eDQ4XCJcblx0XHRcdFx0ICB9LFxuXHRcdFx0XHQgIHtcblx0XHRcdFx0XHRzcmM6IFwiL2ltYWdlcy9pY29ucy9hcHAtaWNvbi01N3g1Ny5wbmdcIixcblx0XHRcdFx0XHR0eXBlOiBcImltYWdlL3BuZ1wiLFxuXHRcdFx0XHRcdHNpemVzOiBcIjU3eDU3XCJcblx0XHRcdFx0ICB9LFxuXHRcdFx0XHQgIHtcblx0XHRcdFx0XHRzcmM6IFwiL2ltYWdlcy9pY29ucy9hcHAtaWNvbi02MHg2MC5wbmdcIixcblx0XHRcdFx0XHR0eXBlOiBcImltYWdlL3BuZ1wiLFxuXHRcdFx0XHRcdHNpemVzOiBcIjYweDYwXCJcblx0XHRcdFx0ICB9LFxuXHRcdFx0XHQgIHtcblx0XHRcdFx0XHRzcmM6IFwiL2ltYWdlcy9pY29ucy9hcHAtaWNvbi03Mng3Mi5wbmdcIixcblx0XHRcdFx0XHR0eXBlOiBcImltYWdlL3BuZ1wiLFxuXHRcdFx0XHRcdHNpemVzOiBcIjcyeDcyXCJcblx0XHRcdFx0ICB9LFxuXHRcdFx0XHQgIHtcblx0XHRcdFx0XHRzcmM6IFwiL2ltYWdlcy9pY29ucy9hcHAtaWNvbi0xMjB4MTIwLnBuZ1wiLFxuXHRcdFx0XHRcdHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG5cdFx0XHRcdFx0c2l6ZXM6IFwiMTIweDEyMFwiXG5cdFx0XHRcdCAgfSxcblx0XHRcdFx0ICB7XG5cdFx0XHRcdFx0c3JjOiBcIi9pbWFnZXMvaWNvbnMvYXBwLWljb24tMTQ0eDE0NC5wbmdcIixcblx0XHRcdFx0XHR0eXBlOiBcImltYWdlL3BuZ1wiLFxuXHRcdFx0XHRcdHNpemVzOiBcIjE0NHgxNDRcIlxuXHRcdFx0XHQgIH0sXG5cdFx0XHRcdCAge1xuXHRcdFx0XHRcdHNyYzogXCIvaW1hZ2VzL2ljb25zL2FwcC1pY29uLTE1MngxNTIucG5nXCIsXG5cdFx0XHRcdFx0dHlwZTogXCJpbWFnZS9wbmdcIixcblx0XHRcdFx0XHRzaXplczogXCIxNTJ4MTUyXCJcblx0XHRcdFx0ICB9LFxuXHRcdFx0XHQgIHtcblx0XHRcdFx0XHRzcmM6IFwiL2ltYWdlcy9pY29ucy9hcHAtaWNvbi0xODB4MTgwLnBuZ1wiLFxuXHRcdFx0XHRcdHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG5cdFx0XHRcdFx0c2l6ZXM6IFwiMTgweDE4MFwiXG5cdFx0XHRcdCAgfSxcblx0XHRcdFx0ICB7XG5cdFx0XHRcdFx0c3JjOiBcIi9pbWFnZXMvaWNvbnMvYXBwLWljb24tMTkyeDE5Mi5wbmdcIixcblx0XHRcdFx0XHR0eXBlOiBcImltYWdlL3BuZ1wiLFxuXHRcdFx0XHRcdHNpemVzOiBcIjE5MngxOTJcIlxuXHRcdFx0XHQgIH0sXG5cdFx0XHRcdCAge1xuXHRcdFx0XHRcdHNyYzogXCIvaW1hZ2VzL2ljb25zL2FwcC1pY29uLTI1NngyNTYucG5nXCIsXG5cdFx0XHRcdFx0dHlwZTogXCJpbWFnZS9wbmdcIixcblx0XHRcdFx0XHRzaXplczogXCIyNTZ4MjU2XCJcblx0XHRcdFx0ICB9LFxuXHRcdFx0XHQgIHtcblx0XHRcdFx0XHRzcmM6IFwiL2ltYWdlcy9pY29ucy9hcHAtaWNvbi0zODR4Mzg0LnBuZ1wiLFxuXHRcdFx0XHRcdHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG5cdFx0XHRcdFx0c2l6ZXM6IFwiMzg0eDM4NFwiXG5cdFx0XHRcdCAgfSxcblx0XHRcdFx0ICB7XG5cdFx0XHRcdFx0c3JjOiBcIi9pbWFnZXMvaWNvbnMvYXBwLWljb24tNTEyeDUxMi5wbmdcIixcblx0XHRcdFx0XHR0eXBlOiBcImltYWdlL3BuZ1wiLFxuXHRcdFx0XHRcdHNpemVzOiBcIjUxMng1MTJcIlxuXHRcdFx0XHQgIH1cblx0XHRcdFx0XSxcblx0XHRcdFxuXHRcdFx0ICB9LFxuXHRcdCAgfSksXG5cdFx0XSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWtPLFNBQVMsb0JBQW9CO0FBQy9QLE9BQU8sU0FBUztBQUdoQixPQUFPLGFBQWE7QUFFcEIsU0FBUyxlQUFlO0FBR3hCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNULElBQUk7QUFBQSxJQUNKLFFBQVEsRUFBRSxZQUFZLEtBQUssQ0FBQztBQUFBLElBQzVCLFFBQVE7QUFBQSxNQUNQLFdBQVc7QUFBQSxNQUVYLFVBQVU7QUFBQSxRQUNULE1BQU07QUFBQSxRQUNOLFlBQVk7QUFBQSxRQUNaLE9BQU87QUFBQSxVQUNMO0FBQUEsWUFDRCxLQUFLO0FBQUEsWUFDTCxNQUFNO0FBQUEsWUFDTixPQUFPO0FBQUEsVUFDTjtBQUFBLFVBQ0E7QUFBQSxZQUNELEtBQUs7QUFBQSxZQUNMLE1BQU07QUFBQSxZQUNOLE9BQU87QUFBQSxVQUNOO0FBQUEsVUFDQTtBQUFBLFlBQ0QsS0FBSztBQUFBLFlBQ0wsTUFBTTtBQUFBLFlBQ04sT0FBTztBQUFBLFVBQ047QUFBQSxVQUNBO0FBQUEsWUFDRCxLQUFLO0FBQUEsWUFDTCxNQUFNO0FBQUEsWUFDTixPQUFPO0FBQUEsVUFDTjtBQUFBLFVBQ0E7QUFBQSxZQUNELEtBQUs7QUFBQSxZQUNMLE1BQU07QUFBQSxZQUNOLE9BQU87QUFBQSxVQUNOO0FBQUEsVUFDQTtBQUFBLFlBQ0QsS0FBSztBQUFBLFlBQ0wsTUFBTTtBQUFBLFlBQ04sT0FBTztBQUFBLFVBQ047QUFBQSxVQUNBO0FBQUEsWUFDRCxLQUFLO0FBQUEsWUFDTCxNQUFNO0FBQUEsWUFDTixPQUFPO0FBQUEsVUFDTjtBQUFBLFVBQ0E7QUFBQSxZQUNELEtBQUs7QUFBQSxZQUNMLE1BQU07QUFBQSxZQUNOLE9BQU87QUFBQSxVQUNOO0FBQUEsVUFDQTtBQUFBLFlBQ0QsS0FBSztBQUFBLFlBQ0wsTUFBTTtBQUFBLFlBQ04sT0FBTztBQUFBLFVBQ047QUFBQSxVQUNBO0FBQUEsWUFDRCxLQUFLO0FBQUEsWUFDTCxNQUFNO0FBQUEsWUFDTixPQUFPO0FBQUEsVUFDTjtBQUFBLFVBQ0E7QUFBQSxZQUNELEtBQUs7QUFBQSxZQUNMLE1BQU07QUFBQSxZQUNOLE9BQU87QUFBQSxVQUNOO0FBQUEsVUFDQTtBQUFBLFlBQ0QsS0FBSztBQUFBLFlBQ0wsTUFBTTtBQUFBLFlBQ04sT0FBTztBQUFBLFVBQ047QUFBQSxRQUNGO0FBQUEsTUFFQztBQUFBLElBQ0QsQ0FBQztBQUFBLEVBQ0g7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
