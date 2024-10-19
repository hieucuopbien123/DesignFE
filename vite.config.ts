import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Phải có base "./" thì thư mục assets khi build ra mới chuẩn
  base: "./"
})
