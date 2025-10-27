# Playwright Test Suite

[![Playwright Tests](https://github.com/Berdza17/cypress-realworld-app/actions/workflows/playwright.yml/badge.svg)](https://github.com/Berdza17/cypress-realworld-app/actions/workflows/playwright.yml)
[![Playwright Matrix Tests](https://github.com/Berdza17/cypress-realworld-app/actions/workflows/playwright-matrix.yml/badge.svg)](https://github.com/Berdza17/cypress-realworld-app/actions/workflows/playwright-matrix.yml)

## Quick Start
```bash
npm test                    # Run all tests
npm test -- tests/api/      # Run API tests only
npm test -- tests/ui/       # Run UI tests only
```

## Test Structure
- **API Tests**: Fast authentication and endpoint testing
- **UI Tests**: Full user journey testing with proper auth state

## Authentication
- **API Tests**: Use `loginByApi()` for fast API-only authentication
- **UI Tests**: Use fixtures (`loggedInAsUser`) for reliable frontend auth state

## Configuration
- Base URL: `http://localhost:3000`
- API URL: `http://localhost:3001`
- Test users available in `fixtures/auth.ts`

## GitHub Actions
This repository includes comprehensive CI/CD workflows:

- **Main Workflow**: Runs on push/PR with all browsers
- **Matrix Workflow**: Tests across Chromium, Firefox, and WebKit
- **Scheduled Workflow**: Daily testing at 2 AM UTC
- **UI/API Split**: Separate workflows for UI and API tests

## Features
- ✅ Page Object Model implementation
- ✅ Data Factory with Faker.js
- ✅ Flexible authentication fixtures
- ✅ Cross-browser testing
- ✅ Screenshot and video capture on failure
- ✅ Comprehensive test reporting
- ✅ CI/CD integration