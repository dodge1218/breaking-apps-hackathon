import { test, expect } from "@playwright/test";
import { runSteps } from "passmark";
import "../passmark.config";

test.describe("Lin Body Work Spa — Booking System", () => {
  test("Homepage loads with services and booking CTA", async ({ page }) => {
    test.setTimeout(60_000);
    await runSteps({
      page,
      userFlow: "Verify spa homepage and booking flow entry",
      steps: [
        { description: "Navigate to https://linbodyspa.com" },
        { description: "Wait for the page to fully load" },
      ],
      assertions: [
        { assertion: "The page shows spa/massage services" },
        { assertion: "There is a Book Now or booking button visible" },
        { assertion: "Business name or logo is visible" },
      ],
      test,
      expect,
    });
  });

  test("Services section lists available treatments", async ({ page }) => {
    test.setTimeout(60_000);
    await runSteps({
      page,
      userFlow: "Browse available spa services",
      steps: [
        { description: "Navigate to https://linbodyspa.com" },
        { description: "Scroll to the services section" },
      ],
      assertions: [
        { assertion: "Multiple service types are listed with descriptions or prices" },
      ],
      test,
      expect,
    });
  });
});
