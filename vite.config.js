import { sveltekit } from '@sveltejs/kit/vite';
import UnoCSS from 'unocss/vite';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    UnoCSS({
      mode: 'svelte-scoped',
    }),
    sveltekit()
  ],
  define: {
    'import.meta.env.VERCEL_ANALYTICS_ID': JSON.stringify(process.env.VERCEL_ANALYTICS_ID)
  }
};

export default config;
