import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        training: resolve(__dirname, 'training.html'),
        curriculum: resolve(__dirname, 'curriculum.html'),
        chamber: resolve(__dirname, 'chamber-details.html'),
        consultation: resolve(__dirname, 'consultation.html'),
        initiation: resolve(__dirname, 'initiation.html'),
        threshold: resolve(__dirname, 'threshold.html'),
      },
    },
  },
});
