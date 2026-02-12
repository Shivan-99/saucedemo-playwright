# Playwright SauceDemo Automation Framework (JavaScript)

This is a production-ready Playwright automation framework built using JavaScript to test the SauceDemo web application.

Application Under Test:
https://www.saucedemo.com/

---

## Features

- Page Object Model (POM)
- Smoke, Sanity, Regression test separation
- Data-driven testing
- Environment configuration using .env
- Cross-browser testing (Chromium, Firefox, WebKit)
- Parallel execution
- Retry mechanism
- HTML reports
- Screenshots & Videos on failure
- GitHub Actions CI integration

---

## Project Structure
playwright-saucedemo/
├── tests/
├── pages/
├── test-data/
├── utils/
├── .env
├── playwright.config.js
├── package.json
└── .gitignore

---

## Installation

1. Install dependencies:

npm install

2. Install Playwright browsers:

npx playwright install

3. Create .env file in root:

BASE_URL=https://www.saucedemo.com  
STANDARD_USER=standard_user  
LOCKED_OUT_USER=locked_out_user  
PASSWORD=secret_sauce  

---

## Run Tests

Run all tests:

npx playwright test

Run smoke tests:

npx playwright test tests/smoke

Run in headed mode:

npx playwright test --headed

Open report:

npx playwright show-report

---

## CI/CD

GitHub Actions automatically runs tests on:
- Push
- Pull Request

---


