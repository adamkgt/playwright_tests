# Playwright Tests for My QA App

Automated tests for [My QA App](https://adamkgt.github.io/QAApp/) using **Playwright**.

---

## Setup

1. Clone the repo:

```bash
git clone https://github.com/adamkgt/playwright_tests.git
cd playwright_tests
```

2. Install dependencies:

```bash
npm install
npx playwright install
```

3. Create `.env` in project root:

```
USERNAME=your_username
PASSWORD=your_password
```

> Make sure `.env` is in `.gitignore`.

---

## Running Tests

* Run all tests:

```bash
npx playwright test
```

* Run in headed mode:

```bash
npx playwright test --headed
```

* Run in a specific browser:

```bash
npx playwright test --browser=firefox
```

---

## Project Structure

```
playwright_tests/
├─ pages/          # Page Object Models
├─ tests/          # Test files
├─ .env            # environment variables (ignored by git)
├─ package.json
└─ playwright.config.js
```

---

## Notes

* Tests are written using Playwright v1.x
* Supports environment variables and CI/CD via GitHub Actions
