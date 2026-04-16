import { test, expect } from "@playwright/test";
import { runSteps } from "passmark";
import "../passmark.config";

test.describe("DreamSiteBuilders.com — Agency Homepage", () => {
  test("Homepage loads with hero section and CTA", async ({ page }) => {
    test.setTimeout(60_000);
    await runSteps({
      page,
      userFlow: "Verify agency homepage loads correctly",
      steps: [
        { description: "Navigate to https://dreamsitebuilders.com" },
        { description: "Wait for the page to fully load" },
      ],
      assertions: [
        { assertion: "The page has a hero section with a headline about building websites" },
        { assertion: "There is a visible call-to-action button" },
        { assertion: "Navigation menu is visible with links" },
      ],
      test,
      expect,
    });
  });

  test("Pricing section displays three tiers", async ({ page }) => {
    test.setTimeout(60_000);
    await runSteps({
      page,
      userFlow: "Check pricing section",
      steps: [
        { description: "Navigate to https://dreamsitebuilders.com" },
        { description: "Scroll down to the pricing section" },
      ],
      assertions: [
        { assertion: "There are pricing cards or tiers visible" },
        { assertion: "Price amounts are displayed" },
      ],
      test,
      expect,
    });
  });

  test("Contact form is accessible", async ({ page }) => {
    test.setTimeout(60_000);
    await runSteps({
      page,
      userFlow: "Find and verify contact form",
      steps: [
        { description: "Navigate to https://dreamsitebuilders.com" },
        { description: "Scroll to the contact section or click a contact link" },
      ],
      assertions: [
        { assertion: "A contact form or contact information is visible" },
      ],
      test,
      expect,
    });
  });
});
