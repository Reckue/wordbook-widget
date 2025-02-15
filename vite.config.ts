import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true, // Генерирует `index.d.ts`
      outDir: "dist", // Указываем `dist/` как место сохранения
      tsconfigPath: './tsconfig.app.json'
    }),
  ],
  build: {
    lib: {
      entry: "src/index.tsx",
      name: "WordbookWidget",
      formats: ["es", "cjs"],
      fileName: (format) => `wordbook-widget.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
