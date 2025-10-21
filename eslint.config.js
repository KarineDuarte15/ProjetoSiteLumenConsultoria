// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  // Configuração principal para arquivos TS/TSX
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"], // Aplica a TS/TSX
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-require-imports": "warn", // Mude para warn ou error no geral
      // Adicione outras regras gerais se necessário
    },
  },
  // Override para arquivos de configuração na raiz (JS/TS)
  {
     files: ["*.config.js", "*.config.ts"], // Aplica a arquivos .config.js/ts na raiz
     rules: {
        "@typescript-eslint/no-require-imports": "off", // Desabilita a regra de require
        "@typescript-eslint/no-var-requires": "off" // Pode ser necessário desabilitar esta também
     }
  }
);