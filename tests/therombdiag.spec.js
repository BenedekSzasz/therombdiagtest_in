/*
* File: therombdiag.spec.js
* Author: Szász Benedek
* Copyright: 2026, Szász Benedek
* Group: Szoft I N
* Date: 2026-05-10
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

// Számolással kapcsolatos tesztesetek

test('input 10, 8 output: 40', async ({page}) => {
    await page.goto(url)
    await page.locator('#ediagonal').fill('10')
    await page.locator("#fdiagonal").fill('8')
    await page.locator('#calcButton').click()
    const area = page.locator('#area')
    await expect(area).toHaveValue('40')
})

test('input 6, 4 output: 12', async ({page}) => {
    await page.goto(url)
    await page.locator('#ediagonal').fill('6')
    await page.locator("#fdiagonal").fill('4')
    await page.locator('#calcButton').click()
    const area = page.locator('#area')
    await expect(area).toHaveValue('12')
})

test('input 12.5, 8 output: 50', async ({page}) => {
    await page.goto(url)
    await page.locator('#ediagonal').fill('10')
    await page.locator("#fdiagonal").fill('8')
    await page.locator('#calcButton').click()
    const area = page.locator('#area')
    await expect(area).toHaveValue('40')
})

test('input 7.4, 3.2 output: 11.840000000000002', async ({page}) => {
    await page.goto(url)
    await page.locator('#ediagonal').fill('7.4')
    await page.locator("#fdiagonal").fill('3.2')
    await page.locator('#calcButton').click()
    const area = page.locator('#area')
    await expect(area).toHaveValue('11.840000000000002')
})

test('input 0, 10 output: 0', async ({page}) => {
    await page.goto(url)
    await page.locator('#ediagonal').fill('0')
    await page.locator("#fdiagonal").fill('10')
    await page.locator('#calcButton').click()
    const area = page.locator('#area')
    await expect(area).toHaveValue('0')
})

test('input 15, 0 output: 0', async ({page}) => {
    await page.goto(url)
    await page.locator('#ediagonal').fill('15')
    await page.locator("#fdiagonal").fill('0')
    await page.locator('#calcButton').click()
    const area = page.locator('#area')
    await expect(area).toHaveValue('0')
})

test('input 0, 0 output: 0', async ({page}) => {
    await page.goto(url)
    await page.locator('#ediagonal').fill('0')
    await page.locator("#fdiagonal").fill('0')
    await page.locator('#calcButton').click()
    const area = page.locator('#area')
    await expect(area).toHaveValue('0')
})