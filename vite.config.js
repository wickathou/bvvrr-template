import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import babelJest from 'babel-jest'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // root: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  test: {
    environment: 'jsdom',
    transform: {
      '^.+\\.jsx?$': babelJest.createTransformer({
        presets: ['@babel/preset-react'],
      }),
    },
    coverage: {
      reporter:['text','html']
    }
  }
})

