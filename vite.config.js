/* eslint-disable */
import { defineConfig } from 'vite';

const input = {
  main: 'src/index.html',
  cart: 'src/cart/index.html',
  checkout: 'src/checkout/index.html',
  'cedar-ridge-rimrock-2': 'src/product_pages/cedar-ridge-rimrock-2.html',
  'marmot-ajax-3': 'src/product_pages/marmot-ajax-3.html',
  'northface-alpine-3': 'src/product_pages/northface-alpine-3.html',
  'northface-talus-4': 'src/product_pages/northface-talus-4.html',
};

export default defineConfig({
  root: 'src/',

  build: {
    outDir: '../dist',
    rollupOptions: {
      input,
    },
  },
});
