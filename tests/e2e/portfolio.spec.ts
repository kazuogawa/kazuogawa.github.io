import { expect, test } from '@playwright/test';
import { profile } from '../../src/data/profile';

const pages = [
  { path: '/', menuLink: 'Skills', expectedHash: '#skills' },
  { path: '/services/', menuLink: 'Process', expectedHash: '#process' },
] as const;

for (const pageUnderTest of pages) {
  test.describe(pageUnderTest.path, () => {
    test('レスポンシブ表示、配色、主要CTA、Contact導線が正しい', async ({ page }, testInfo) => {
      await page.goto(pageUnderTest.path);

      const colorScheme = testInfo.project.use.colorScheme;
      expect(colorScheme).toBeDefined();
      await expect
        .poll(() =>
          page.evaluate(
            (scheme) => matchMedia(`(prefers-color-scheme: ${scheme})`).matches,
            colorScheme,
          ),
        )
        .toBe(true);
      await expect(page.locator('body')).toHaveCSS(
        'background-color',
        colorScheme === 'dark' ? 'rgb(15, 23, 42)' : 'rgb(250, 250, 250)',
      );

      const overflow = await page.evaluate(() => {
        const viewportWidth = document.documentElement.clientWidth;
        const documentWidth = document.documentElement.scrollWidth;
        const overflowingElements = Array.from(document.body.querySelectorAll<HTMLElement>('*'))
          .filter((element) => {
            const rect = element.getBoundingClientRect();
            return rect.width > 0 && (rect.left < -1 || rect.right > viewportWidth + 1);
          })
          .map((element) => element.tagName.toLowerCase());

        return { documentWidth, viewportWidth, overflowingElements };
      });

      expect(overflow.documentWidth).toBeLessThanOrEqual(overflow.viewportWidth);
      expect(overflow.overflowingElements).toEqual([]);

      const contactLinks = page.locator(`a[href="${profile.contact.primaryAction.url}"]`);
      expect(await contactLinks.count()).toBeGreaterThan(0);
      for (const link of await contactLinks.all()) {
        await expect(link).toBeVisible();
        await expect(link).toHaveAttribute('target', '_blank');
        await expect(link).toHaveAttribute('rel', /noopener/);
      }
    });

    test('モバイルメニューを各操作で閉じられる', async ({ page }, testInfo) => {
      const viewport = testInfo.project.use.viewport;
      test.skip(!viewport || viewport.width >= 768, 'モバイルviewportのみ対象');
      if (!viewport) return;

      await page.goto(pageUnderTest.path);
      const menuButton = page.locator('button[aria-controls="mobile-navigation"]');

      await menuButton.click();
      await expect(menuButton).toHaveAttribute('aria-expanded', 'true');
      await page
        .locator('#mobile-navigation')
        .getByRole('link', { name: pageUnderTest.menuLink })
        .click();
      await expect(page).toHaveURL(new RegExp(`${pageUnderTest.expectedHash}$`));
      await expect(menuButton).toHaveAttribute('aria-expanded', 'false');

      await menuButton.click();
      await page.mouse.click(viewport.width - 10, viewport.height - 10);
      await expect(menuButton).toHaveAttribute('aria-expanded', 'false');

      await menuButton.click();
      await page.keyboard.press('Escape');
      await expect(menuButton).toHaveAttribute('aria-expanded', 'false');

      await menuButton.click();
      await expect(menuButton).toHaveAttribute('aria-expanded', 'true');
      await menuButton.click();
      await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    });
  });
}
