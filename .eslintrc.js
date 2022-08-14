module.exports = {
  env: {
    node: true,
  },
  extends: ["react-app", "prettier", "plugin:prettier/recommended"],
  rules: {
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-console": 0,
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        trailingComma: "all",
        bracketSameLine: true,
      },
    ],
  },
};
