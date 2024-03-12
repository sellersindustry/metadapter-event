module.exports = {
	env: {
		es2022: true,
		browser: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended"
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["@typescript-eslint"],
	rules: {
		"quotes": [
			"warn", "double"
		],
		"yoda": "error",
		"semi": [
			"error", "always"
		],
		"comma-spacing": [
			"error", {
				"before": false,
				"after": true
			}
		],
		"require-await": "error",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-namespace": "off",
		"@typescript-eslint/ban-ts-comment": "off",
		"prefer-const": "off"
	}
}