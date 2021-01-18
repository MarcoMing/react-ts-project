
module.exports = {
  "setupFiles": [
    "<rootDir>/scripts/setupTests.ts",
  ],
  "moduleFileExtensions": [
    "js",
    "jsx",
    "ts",
    "tsx"
  ],
  "transform": {
    "\\.(js|jsx)$": "babel-jest",
    "\\.(ts|tsx)$": "ts-jest",
  },
  "moduleNameMapper": {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css|scss)$':
      '<rootDir>/__mocks__/fileMock.js',
  }
}
