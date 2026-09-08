import { expect, test } from '@playwright/test';
import { profile } from '../../src/data/profile';

const pages = [
  { path: '/', heading: '小川 和久' },
  {
    path: '/ai-development/',
    heading: 'AI開発の導入から、チームで使い続けられる仕組みづくりまで。',
  },
  {
    path: '/product-development/',
    heading: '新規サービスの立ち上げも、既存プロダクトの改善も。',
  },
  {
    path: '/business-improvement/',
    heading: '業務の「こうしたい」を、使える仕組みに。',
  },
  { path: '/portfolio/', heading: 'Skills', title: '経歴・技術実績 | 小川 和久' },
] as const;

for (const pageUnderTest of pages) {
  test.describe(pageUnderTest.path, () => {
    test('レスポンシブ表示、配色、主要CTA、共通導線が正しい', async ({ page }, testInfo) => {
      await page.goto(pageUnderTest.path);

      if ('title' in pageUnderTest) {
        await expect(page).toHaveTitle(pageUnderTest.title);
      }

      await expect(
        page.getByRole('heading', { level: 1, name: pageUnderTest.heading }),
      ).toBeVisible();

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

      const navigation = page.getByRole('navigation');
      await expect(navigation.locator('a', { hasText: 'トップ' }).first()).toHaveAttribute(
        'href',
        '/',
      );
      for (const item of [
        { label: 'AI開発支援', href: '/ai-development/' },
        { label: 'プロダクト開発', href: '/product-development/' },
        { label: '業務改善', href: '/business-improvement/' },
      ]) {
        await expect(navigation.locator('a', { hasText: item.label }).first()).toHaveAttribute(
          'href',
          item.href,
        );
      }
      await expect(navigation.locator('a', { hasText: '経歴・技術実績' }).first()).toHaveAttribute(
        'href',
        '/portfolio/',
      );
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
        .getByRole('link', { name: '経歴・技術実績', exact: true })
        .click();
      await expect(page).toHaveURL(/\/portfolio\/$/);
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

test('トップから4つの目的別ページへ進める', async ({ page }) => {
  await page.goto('/');

  const destinations = [
    '/ai-development/',
    '/product-development/',
    '/business-improvement/',
    '/portfolio/',
  ];

  for (const destination of destinations) {
    await expect(page.locator(`main a[href="${destination}"]`)).toBeVisible();
  }
});
