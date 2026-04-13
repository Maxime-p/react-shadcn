import tailwindcss from '@tailwindcss/vite'
import react, {reactCompilerPreset} from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import babel from "@rolldown/plugin-babel"

export default defineConfig({
  plugins: [
    react(),
    babel({
      presets: [reactCompilerPreset()],
    }),
    tailwindcss(),
  ],
  resolve: {
    tsconfigPaths: true,
  },
})
