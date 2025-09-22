// src/test/setup.js
import '@testing-library/jest-dom'
// src/mocks/node.ts
import { server } from '../app/mocks/node'

// Establish API mocking before all tests.
beforeAll(() => server.listen())

// Reset any request handlers that are declared as a part of our tests
// (i.e. for testing one-time error scenarios)
// so they don't affect other tests.
afterEach(() => server.resetHandlers())

// Clean up after the tests are finished.
afterAll(() => server.close())

// import '@testing-library/jest-dom/vitest';
// import { cleanup } from '@testing-library/react';
// import { afterEach } from 'vitest';

// // Clean up after each test
// afterEach(() => {
//   cleanup();
// });
