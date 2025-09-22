// module.exports = {
//   testEnvironment: "jsdom",
//   setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
//   // ... other options ...
// };

module.exports = {
  testEnvironment: "jest-fixed-jsdom",
  setupFilesAfterEnv: ["<rootDir>/test/setup.ts"],
  moduleNameMapping: {
    "^@/(.*)$": "<rootDir>/app/$1",
    // "\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
    //   "<rootDir>/__mocks__/fileMock.js",
    "\\.(svg)$": "<rootDir>/__mocks__/svgTransform.cjs",
  },
  transform: {
    "^.+\\.[tj]sx?$": "ts-jest",
    "\\.(svg)$": "<rootDir>/__mocks__/svgTransform.cjs",
  },
  testMatch: [
    "**/__tests__/**/*.?(ts|tsx|js|jsx)",
    "**/?(*.)+(spec|test).?(ts|tsx|js|jsx)",
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  verbose: true, // Add this line
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
};
