import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ItzFizz-InfoTech-Interview1/', // Add this line!
})