import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./sass/abstracts/variables.scss";`
      }
    }
  }
});