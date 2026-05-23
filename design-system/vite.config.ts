import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "designSystem",
      filename: "remoteEntry.js",
      exposes: {
        "./Header": "./src/components/Header.tsx",
      },
      shared: ["react", "react-dom", "react-router-dom", "zustand"],
    }),
  ],

  build: { target: "esnext", minify: false, cssCodeSplit: false },
  server: { port: 5002, cors: true },
  preview: { port: 5002, cors: true },
});
