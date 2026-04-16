import { test, expect } from "@playwright/test";
import { runSteps } from "passmark";
import "../passmark.config";

test.describe("Ichiban Restaurant — Menu & Ordering", () => {
  test("Homepage loads with restaurant branding and menu", async ({ page }) => {
    test.setTimeout(60_000);
    await runSteps({
      page,
      userFlow: "Verify restaurant site loads with menu",
      steps: [
        { description: "Navigate to https://ichiban-zeta.vercel.app" },
        { description: "Wait for the page to fully load" },
      ],
      assertions: [
        { assertion: "Restaurant name or branding is visible" },
        { assertion: "Menu items or food categories are displayed" },
      ],
      test,
      expect,
    });
  });

  test("Menu categories are navigable", async ({ page }) => {
    test.setTimeout(60_000);
    await runSteps({
      page,
      userFlow: "Browse menu categories",
      steps: [
        { description: "Navigate to https://ichiban-zeta.vercel.app" },
        { description: "Click on a menu category if available" },
      ],
      assertions: [
        { assertion: "Menu items are displayed with names and prices" },
      ],
      test,
      expect,
    });
  });
});
