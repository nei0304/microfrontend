import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "shellApp",
      filename: "remoteEntry.js",
      remotes: {
        checkout: "http://localhost:5001/assets/remoteEntry.js",
        designSystem: "http://localhost:5002/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "react-router-dom", "zustand"],
    }),
  ],
  build: {
    target: "esnext",
    cssCodeSplit: false,
  },
  server: {
    port: 5000,
  },
});
