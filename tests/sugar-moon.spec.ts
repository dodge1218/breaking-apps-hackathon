import { test, expect } from "@playwright/test";
import { runSteps } from "passmark";
import "../passmark.config";

test.describe("Sugar Moon Bakery — Storefront", () => {
  test("Homepage loads with bakery products", async ({ page }) => {
    test.setTimeout(60_000);
    await runSteps({
      page,
      userFlow: "Verify bakery site loads",
      steps: [
        { description: "Navigate to https://sugar-moon-murex.vercel.app" },
        { description: "Wait for the page to fully load" },
      ],
      assertions: [
        { assertion: "Bakery name or branding is visible" },
        { assertion: "Bakery products or menu items are displayed" },
      ],
      test,
      expect,
    });
  });
});
