## Quick Start

> **⚠️ Important**: This is an open source project, so `.env` files are included for demonstration purposes. In your own projects, always add `.env` to `.gitignore` to keep sensitive data secure.

### Installation
```bash
yarn install               # Install dependencies
yarn playwright install    # Install Playwright browsers
```

### Running Tests
**Important**: Run all commands from the playwright directory.

```bash
cd playwright             # Navigate to playwright directory
yarn test                 # Run all tests
yarn test:ui             # Run UI tests only
yarn test:api            # Run API tests only
yarn test:headed         # Run with browser visible
yarn test:debug          # Run in debug mode
```

## Test Structure
- **API Tests** (`tests/api/`): Fast authentication and endpoint testing
- **UI Tests** (`tests/ui/`): Full user journey testing with proper auth state
- **Page Objects** (`pages/`): LoginPage, SignupPage, HomePage, BasePage
- **Helpers** (`helpers/`): API utilities and data factory with Faker.js
- **Fixtures** (`fixtures/`): Custom authentication fixtures

## KIll backend process on port 3001
lsof -ti:3001 | xargs kill -9

## Authentication Patterns
- **API Tests**: Use `loginByApi()` for fast API-only authentication
- **UI Tests**: Use fixtures (`loggedInAsUser`) for reliable frontend auth state
- **Data Factory**: Generate test users with `DataFactory.createUser()`

## Configuration
- Base URL: `http://localhost:3000` (configurable via .env)
- API URL: `http://localhost:3001` (configurable via .env)
- Cross-browser: Chromium, Firefox, WebKit
- Parallel execution with configurable workers

## Environment Setup
```bash
cp example.env .env         # Copy template
# Edit .env with your URLs and credentials
```

> **Security Note**: The `.env` file is included in this repository for demonstration purposes only. In production projects, always add `.env` to `.gitignore` to prevent committing sensitive credentials.

### Environment Variables
- **Test Users**: `TEST_USER_*` variables for hardcoded test users
- **Default Password**: `DEFAULT_USER_PASSWORD` for generated users
- **URLs**: `BASE_URL` and `API_URL` for application endpoints

## Test Features
- ✅ Page Object Model implementation
- ✅ Data Factory with Faker.js for test data generation
- ✅ Flexible authentication fixtures
- ✅ Cross-browser testing (Chromium, Firefox, WebKit)
- ✅ Screenshots and videos on failure
- ✅ Parallel test execution
- ✅ TypeScript support with proper typing

## GitHub Actions
- **Main Workflow**: Runs on push/PR with all browsers
- **UI/API Split**: Separate jobs for UI and API tests
- **Artifact Upload**: Test results and screenshots stored

## Debugging
```bash
npx playwright test --debug                    # Debug mode
npx playwright show-report                     # View HTML report
npx playwright test tests/ui/auth.spec.ts --headed  # Run specific test
```

## Test Categories
- **Authentication**: Login, signup, form validation, session management
- **Protected Routes**: Access control for authenticated users
- **API Endpoints**: Direct API testing without browser overhead