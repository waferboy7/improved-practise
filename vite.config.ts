import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@assets': '/src/assets',
      '@components': '/src/components',
      '@types': '/src/types',
      '@constants': '/src/constants',
      '@utils': '/src/utils',
      '@pages': '/src/pages',
      '@hooks': '/src/hooks',
      '@store': '/src/store',
    },
  },
})
