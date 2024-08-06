const path = require("path");

const buildEslintCommand = (filenames) =>
  `prettier --ignore-unknown --write ${filenames.map((f) => path.relative(process.cwd(), f)).join(" ")}`;

module.exports = {
  "*.{js,jsx,ts,tsx}": [buildEslintCommand],
  "*.{ts,tsx,md,mdx,js,jsx,json,mjs}": "prettier --ignore-unknown --write",
};
