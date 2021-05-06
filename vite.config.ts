import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    tsconfigPaths(),
  ],
  server: {
    proxy: {
      '/github': {
        target: 'https://raw.githubusercontent.com',
        changeOrigin: true,
        // secure: false,
        // ws: true,
        rewrite: (path) => path.replace(/^\/github/, '')
      },
      '/gitee': {
        target: 'https://gitee.com',
        changeOrigin: true,
        // secure: false,
        // ws: true,
        rewrite: (path) => path.replace(/^\/gitee/, '')
      },
    }
  }
})
