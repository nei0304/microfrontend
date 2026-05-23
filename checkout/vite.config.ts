import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "checkoutApp",
      filename: "remoteEntry.js",
      remotes: {
        designSystem: "http://localhost:5002/assets/remoteEntry.js",
      },
      exposes: {
        "./CheckoutPage": "./src/CheckoutPage.tsx",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  build: { target: "esnext", minify: false, cssCodeSplit: false },
  server: { port: 5001, cors: true },
  preview: { port: 5001, cors: true },
});
