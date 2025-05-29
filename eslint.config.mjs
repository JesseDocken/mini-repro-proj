import jsPlugin from "@eslint/js";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";
import importPlugin from "eslint-plugin-import-x";
import tsPlugin from "typescript-eslint";
import tsParser from "@typescript-eslint/parser";
import globals from "globals";
import _ from "lodash";

const jsGlobs = ["**/*.js", "**/*.mjs", "**/*.cjs"];

export default tsPlugin.config([
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  {
    ignores: ["dist/**", "node_modules/**", "eslint.config.mjs"],
  },
  {
    // All JavaScript source code
    files: jsGlobs.concat(["**/*.ts"]),
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: "commonjs",
      globals: {
        Promise: "writable",
        ...globals.node,
      },
    },
    plugins: {
      js: jsPlugin,
    },
    extends: [jsPlugin.configs.recommended],
    rules: {
      "array-callback-return": [
        "error",
        {
          checkForEach: true,
        },
      ],
      "no-await-in-loop": "warn",
      "no-cond-assign": ["error", "always"],
      "no-constructor-return": "error",
      "no-duplicate-imports": "error",
      "no-promise-executor-return": "error",
      "no-use-before-define": ["error", "nofunc"],
      "no-useless-assignment": "error",
      "require-atomic-updates": "warn",
      "consistent-return": "error",
      curly: "warn",
      "default-case-last": "warn",
      "default-param-last": "warn",
      "dot-notation": "warn",
      eqeqeq: "error",
      "logical-assignment-operators": "warn",
      "max-classes-per-file": "warn",
      "no-array-constructor": "warn",
      "no-caller": "warn",
      "no-eval": "error",
      "no-global-assign": "off",
      "no-implied-eval": "error",
      "no-invalid-this": "warn",
      "no-label-var": "error",
      "no-lonely-if": "warn",
      "no-loss-of-precision": "warn",
      "no-new": "warn",
      "no-new-func": "error",
      "no-new-wrappers": "warn",
      "no-object-constructor": "error",
      "no-return-assign": "error",
      "no-shadow": "warn",
      "no-throw-literal": "error",
      "no-unused-labels": "warn",
      "no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
        },
      ],
      "no-useless-return": "warn",
      "no-var": "error",
      "no-void": "warn",
      "object-shorthand": "warn",
      "operator-assignment": "warn",
      "prefer-arrow-callback": "error",
      "prefer-const": "warn",
      "prefer-destructuring": "warn",
      "prefer-exponentiation-operator": "warn",
      "prefer-numeric-literals": "error",
      "prefer-object-has-own": "warn",
      "prefer-object-spread": "warn",
      "prefer-regex-literals": "warn",
      "prefer-rest-params": "error",
      "prefer-spread": "error",
      radix: "warn",
      "require-yield": "warn",
      strict: "error",
      "import-x/no-deprecated": "warn",
      "import-x/no-empty-named-blocks": "error",
      "import-x/no-mutable-exports": "error",
      "import-x/no-unused-modules": ["warn", { unusedExports: true }],
      "import-x/no-import-module-exports": "error",
      "import-x/no-relative-packages": "error",
      "import-x/no-useless-path-segments": [
        "error",
        { noUselessIndex: true, commonjs: true },
      ],
      "import-x/newline-after-import": [
        "error",
        { considerComments: true, exactCount: true },
      ],
      "import-x/order": [
        "warn",
        {
          groups: [
            "external",
            ["internal", "sibling", "parent"],
            "type",
            "object",
          ],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
          named: {
            enabled: true,
            export: false,
            types: "types-last",
          },
        },
      ],
    },
  },
  {
    // All TypeScript code
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: true,
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.node,
      },
    },
    settings: {
      "import-x/resolver-next": [
        createTypeScriptImportResolver({
          alwaysTryTypes: true,
          project: import.meta.dirname,
        }),
      ],
    },
    plugins: {
      "@typescript-eslint": tsPlugin.plugin,
    },
    extends: [
      tsPlugin.configs.recommendedTypeChecked,
      tsPlugin.configs.stylisticTypeChecked,
    ],
    rules: {
      "default-param-last": "off",
      "dot-notation": "off",
      "no-shadow": "off",
      "prefer-destructuring": "off",
      "@typescript-eslint/ban-ts-comment": "warn",
      "@typescript-eslint/class-literal-property-style": "off",
      "@typescript-eslint/consistent-generic-constructors": [
        "error",
        "type-annotation",
      ],
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/default-param-last": "error",
      "@typescript-eslint/no-deprecated": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-import-type-side-effects": "error",
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-shadow": "error",
      "@typescript-eslint/no-unsafe-argument": "warn",
      "@typescript-eslint/no-unsafe-assignment": "warn",
      "@typescript-eslint/no-unsafe-call": "warn",
      "@typescript-eslint/no-unsafe-member-access": "warn",
      "@typescript-eslint/no-unsafe-return": "warn",
      "@typescript-eslint/prefer-destructuring": "warn",
      "@typescript-eslint/promise-function-async": "warn",
      "@typescript-eslint/switch-exhaustiveness-check": "warn",
      "import-x/no-commonjs": ["error", { allowRequire: true }],
      "import-x/no-empty-named-blocks": "error",
      "import-x/no-mutable-exports": "error",
      "import-x/no-unused-modules": ["warn", { unusedExports: true }],
      "import-x/no-relative-packages": "error",
      "import-x/no-useless-path-segments": ["error", { noUselessIndex: true }],
      "import-x/first": "error",
      "import-x/newline-after-import": [
        "error",
        { considerComments: true, exactCount: true },
      ],
      "import-x/order": [
        "warn",
        {
          groups: [
            "external",
            ["internal", "sibling", "parent"],
            "type",
            "object",
          ],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
          named: {
            enabled: true,
            export: false,
            types: "types-last",
          },
        },
      ],
    },
  },
  {
    // Application code
    files: jsGlobs.map((path) => `app/${path}`).concat(["app/**/*.ts"]),
    languageOptions: {
      globals: {
        __base: "readable",
        __baseUrl: "readable",
        MainWSAPI: "readable",
        MainJSONAPI: "readable",
        MainJSONRPC: "readable",
        Op: "readable",
      },
    },
  },
]);
