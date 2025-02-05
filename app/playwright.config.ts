import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  webServer: {
    // Commande pour démarrer votre serveur (assurez-vous que c'est la bonne commande)
    command: "npm run dev",
    // Le port sur lequel le serveur sera accessible
    port: 3000,
    // Délai maximum pour démarrer le serveur
    timeout: 120 * 1000,
    // Si un serveur existe déjà (par exemple en développement), ne pas le redémarrer
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: "http://localhost:3000",
    headless: true,
    screenshot: "only-on-failure",
    trace: "on-first-retry",
  },
});
