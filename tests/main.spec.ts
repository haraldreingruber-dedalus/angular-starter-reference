import { test, expect, Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('Angular Starter', () => {
  test('should have terminal example', async ({ page }) => {
    await expect(page.locator('.terminal')).toHaveText([
      "ng generate component xyz"
    ]);
  });

  test('should have terminal example that matches the screenshot', async ({ page }) => {
    await expect(await page.locator('.terminal').screenshot()).toMatchSnapshot('terminal.png');
  });

});
