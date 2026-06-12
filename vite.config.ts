import { defineConfig } from 'vite'
import { resolve } from 'path'

/**** "npm run build" bundles into dist/, "npm run build:applet" deploys ****/
/**** into the local Topics/Applets folder (private use only)           ****/

export default defineConfig(({ mode }) => ({
  build: {
    lib: {
      entry:    resolve(__dirname, 'src/BrowserCard.ts'),
      name:     'BrowserCard',
      fileName: 'BrowserCard',
      formats:  ['es'],
    },
    rollupOptions: {
      external: [],              // no external dependencies - bundle everything
    },
    outDir:      mode === 'applet' ? '../../../../Applets/BrowserCard' : 'dist',
    emptyOutDir: mode !== 'applet',
  },
}))
