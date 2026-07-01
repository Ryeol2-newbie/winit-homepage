import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/winit-homepage/", // 👈 이 주소 줄을 추가해서 깃허브 경로를 맞춰줍니다!
})