module.exports = {
  extends: ["next", "turbo", "prettier", "eslint:recommended", "plugin:import/recommended"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "import/no-unused-modules": "error",
    "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
  },
};