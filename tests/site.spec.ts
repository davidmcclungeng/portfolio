import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test.describe("structure", () => {
  test("has exactly one h1", async ({ page }) => {
    await expect(page.locator("h1")).toHaveCount(1);
  });

  test("every section sits inside a landmark", async ({ page }) => {
    // Contact once lived between </main> and <footer>, belonging to no landmark
    const orphans = await page.evaluate(() =>
      [...document.querySelectorAll("section")]
        .filter((s) => !s.closest("main, footer, header"))
        .map((s) => s.id || s.className),
    );
    expect(orphans).toEqual([]);
  });

  test("every nav link resolves to an element on the page", async ({ page }) => {
    const hrefs = await page
      .locator('header nav a[href^="#"]')
      .evaluateAll((els) => els.map((e) => e.getAttribute("href")!));
    expect(hrefs.length).toBeGreaterThan(0);
    for (const href of hrefs) {
      await expect(page.locator(href), `${href} should exist`).toHaveCount(1);
    }
  });
});

test.describe("content", () => {
  test("no stale hardcoded year in the footer", async ({ page }) => {
    // A build-time year freezes into a static export and silently goes stale
    const footer = (await page.locator("footer").textContent()) ?? "";
    const year = footer.match(/\b(19|20)\d{2}\b/);
    expect(
      year,
      `footer contains a year (${year?.[0]}) that a static export cannot keep current`,
    ).toBeNull();
  });

  test("every image has meaningful alt text and actually loads", async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    const images = page.locator("img");
    const count = await images.count();
    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute("alt");
      expect(alt?.trim().length ?? 0).toBeGreaterThan(10);
      await expect(img).toHaveJSProperty("complete", true);
      expect(await img.evaluate((el: HTMLImageElement) => el.naturalWidth)).toBeGreaterThan(0);
    }
  });

  test("images are served as webp, sized for the page", async ({ page }) => {
    const srcs = await page.locator("img").evaluateAll((els) =>
      els.map((e) => (e as HTMLImageElement).getAttribute("src") ?? ""),
    );
    for (const src of srcs) expect(src).toMatch(/\.webp$/);
  });
});

test.describe("progressive enhancement", () => {
  test("hero is visible without waiting for hydration", async ({ page }) => {
    // The hero must not be inside a .reveal, which starts at opacity 0
    const h1 = page.locator("h1");
    await expect(h1).toBeVisible();
    expect(await h1.evaluate((el) => el.closest(".reveal"))).toBeNull();
  });

  test("content is readable with JavaScript disabled", async ({ browser }) => {
    const context = await browser.newContext({ javaScriptEnabled: false });
    const page = await context.newPage();
    await page.goto("/");
    await expect(page.locator("h1")).toBeVisible();
    await expect(page.locator("#contact")).toBeVisible();
    await expect(page.locator("#tooling")).toBeVisible();
    await context.close();
  });
});

test.describe("accessibility", () => {
  test("interactive borders meet 3:1 non-text contrast", async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== "mobile", "menu button is mobile-only");
    const ratio = await page.evaluate(() => {
      const parse = (c: string) => c.match(/[\d.]+/g)!.map(Number);
      const lum = (rgb: number[]) => {
        const [r, g, b] = rgb.slice(0, 3).map((v) => {
          v /= 255;
          return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
        });
        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
      };
      const btn = document.querySelector('button[aria-controls="mobile-menu"]')!;
      const cs = getComputedStyle(btn);
      const bg = parse(getComputedStyle(document.body).backgroundColor);
      let border = parse(cs.borderTopColor);
      // Flatten any alpha against the page background
      if (border.length === 4) {
        const a = border[3];
        border = border.slice(0, 3).map((c, i) => c * a + bg[i] * (1 - a));
      }
      const [hi, lo] = [lum(border), lum(bg)].sort((x, y) => y - x);
      return (hi + 0.05) / (lo + 0.05);
    });
    expect(ratio).toBeGreaterThanOrEqual(3);
  });

  test("mobile menu opens, closes and reports its state", async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== "mobile", "menu is mobile-only");
    const button = page.locator('button[aria-controls="mobile-menu"]');
    const menu = page.locator("#mobile-menu");
    await expect(button).toHaveAttribute("aria-expanded", "false");
    await expect(menu).toBeHidden();
    await button.click();
    await expect(button).toHaveAttribute("aria-expanded", "true");
    await expect(menu).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(menu).toBeHidden();
  });
});

test.describe("static export integrity", () => {
  test("serves robots.txt and sitemap.xml", async ({ page }) => {
    for (const path of ["/robots.txt", "/sitemap.xml"]) {
      const res = await page.request.get(path);
      expect(res.status(), path).toBe(200);
    }
  });

  test("no create-next-app starter assets are published", async ({ page }) => {
    for (const f of ["/next.svg", "/vercel.svg", "/globe.svg", "/file.svg", "/window.svg"]) {
      expect((await page.request.get(f)).status(), f).toBe(404);
    }
  });
});
