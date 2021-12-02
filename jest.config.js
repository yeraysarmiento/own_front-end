module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  transform: {
    "^.+\\.vue$": "vue-jest",
  },
  testMatch: ["**/src/**/*.spec.[jt]s?(x)"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,vue,ts}", "!src/main.js"],
  modulePathIgnorePatterns: ["src/main.ts", "src/store/index.ts"],
};
