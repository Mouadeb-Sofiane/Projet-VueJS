// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///D:/Dev/Nouveau%20dossier/Projet-VueJS/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/Dev/Nouveau%20dossier/Projet-VueJS/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueDevTools from "file:///D:/Dev/Nouveau%20dossier/Projet-VueJS/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
var __vite_injected_original_import_meta_url = "file:///D:/Dev/Nouveau%20dossier/Projet-VueJS/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/assets/scss/foundations/variables" as *;
          @use "@/assets/scss/foundations/functions" as *;
          @use "@/assets/scss/foundations/mixins" as *;
          @use "@/assets/scss/foundations/normalize" as *;
        `
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxEZXZcXFxcTm91dmVhdSBkb3NzaWVyXFxcXFByb2pldC1WdWVKU1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcRGV2XFxcXE5vdXZlYXUgZG9zc2llclxcXFxQcm9qZXQtVnVlSlNcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0Rldi9Ob3V2ZWF1JTIwZG9zc2llci9Qcm9qZXQtVnVlSlMvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICdub2RlOnVybCdcclxuXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5pbXBvcnQgdnVlRGV2VG9vbHMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWRldnRvb2xzJ1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW3Z1ZSgpLCB2dWVEZXZUb29scygpXSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjc3M6IHtcclxuICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcclxuICAgICAgc2Nzczoge1xyXG4gICAgICAgIGFkZGl0aW9uYWxEYXRhOiBgXHJcbiAgICAgICAgICBAdXNlIFwiQC9hc3NldHMvc2Nzcy9mb3VuZGF0aW9ucy92YXJpYWJsZXNcIiBhcyAqO1xyXG4gICAgICAgICAgQHVzZSBcIkAvYXNzZXRzL3Njc3MvZm91bmRhdGlvbnMvZnVuY3Rpb25zXCIgYXMgKjtcclxuICAgICAgICAgIEB1c2UgXCJAL2Fzc2V0cy9zY3NzL2ZvdW5kYXRpb25zL21peGluc1wiIGFzICo7XHJcbiAgICAgICAgICBAdXNlIFwiQC9hc3NldHMvc2Nzcy9mb3VuZGF0aW9ucy9ub3JtYWxpemVcIiBhcyAqO1xyXG4gICAgICAgIGAsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFxUyxTQUFTLGVBQWUsV0FBVztBQUV4VSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxpQkFBaUI7QUFKNkosSUFBTSwyQ0FBMkM7QUFPdE8sSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLElBQUksR0FBRyxZQUFZLENBQUM7QUFBQSxFQUM5QixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gscUJBQXFCO0FBQUEsTUFDbkIsTUFBTTtBQUFBLFFBQ0osZ0JBQWdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTWxCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
