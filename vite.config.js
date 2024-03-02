import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

const federationConfig = federation({
  name: 'remote_header',
  filename: 'remoteEntry.js',
  exposes: {
    './Header': "./src/Header",
    './Button': "./src/Button",
    './store': './src/store'
  },
  shared: ['react', 'react-dom', 'jotai']
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), federationConfig],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  }
})
