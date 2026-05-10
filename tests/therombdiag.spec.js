/*
* File: therombdiag.spec.js
* Author: Szász Benedek
* Copyright: 2026, Szász Benedek
* Group: Szoft I N
* Date: 2026-05-09
* Github: https://github.com/BenedekSzasz/
* Licenc: MIT
*/

import { test, expect} from '@playwright/test'

const url = 'https://szit.hu/m/terhombdiag/'

test('A title Rombusz', async ({ page }) => {
    await page.goto(url)
    await expect(page).toHaveTitle(/Rombusz/)
})

test('A h1 eleme: Rombusz területe', async ({ page }) => {
    await page.goto(url)
    const text = page.locator('h1')
    await expect(text).toContainText('Rombusz területe')
})

test('A p elem tartalma: Rombusz területe az átlókból számolva.', async ({ page }) => {
    await page.goto(url)
    const text = page.locator('p')
    await expect(text).toContainText('Rombusz területe az átlókból számolva.')
})