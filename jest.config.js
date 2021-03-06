module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  transform: {
    "^.+\\.vue$": "vue-jest",
  },
  testMatch: ["**/src/**/*.spec.[jt]s?(x)", "**/tests/App.spec.ts"],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,vue,ts}",
    "!src/main.js",
    "!src/components/Editor/*",
    "!src/components/ImagePreview/*",
  ],
  modulePathIgnorePatterns: [
    "src/main.ts",
    "src/store/index.ts",
    "src/store/getters.ts",
  ],
};
