import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import inject from '@rollup/plugin-inject';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';

export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis'
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true
        }),
        NodeModulesPolyfillPlugin()
      ]
    }
  },
  build: {
    rollupOptions: {
      plugins: [
        react(),
        tailwindcss(),
        inject({
          Buffer: ['buffer', 'Buffer']
        })
      ]
    }
  },
  define: {
    global: 'globalThis'
  },
  resolve: {
    alias: {
      buffer: 'buffer',
      process: 'process/browser'
    }
  }
});
