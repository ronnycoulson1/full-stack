import { defineConfig } from "eslint-define-config";

export default defineConfig([
  {
    ignores: ["node_modules/", "dist/", ".next/"],

    rules: {
      "@typescript-eslint/parser": "off", // Disable TypeScript ESLint parser issue
    },
  },
]);
