/**
 * @type {import('vite').UserConfig}
 */
export default {
  // Set base to root for Vercel deployment
  base: './',

  build: {
    outDir: './dist',
    sourcemap: true,
  },

  publicDir: './public',
}
