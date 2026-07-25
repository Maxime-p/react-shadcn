import { expect, test } from '@playwright/test'

test('renders the application and lets the user switch theme', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByRole('heading', { name: 'Hello, Shadcn!' })).toBeVisible()
  await page.getByRole('button', { name: 'Use dark theme' }).click()

  await expect(page.locator('html')).toHaveClass(/dark/)
  await expect(page.getByRole('button', { name: 'Use light theme' })).toBeVisible()
})
