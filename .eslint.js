/* eslint-disable no-undef */
module.exports = {
  root: true,
  plugins: [
    'jsdoc',
    'unicorn',
  ],
  rules: {
    'unicorn/expiring-todo-comments': 'error',
  },
  overrides: [
    {
      parser: '@typescript-eslint/parser',
      files: [
        '*.ts'
      ],
      parserOptions: {
        project: [
          'tsconfig.json',
        ],
        tsconfigRootDir: __dirname, // https://github.com/typescript-eslint/typescript-eslint/issues/251
      },
      extends: [
        'plugin:@angular-eslint/ng-cli-compat',
        'plugin:@angular-eslint/ng-cli-compat--formatting-add-on',
        'plugin:@angular-eslint/template/process-inline-templates',
        'plugin:@typescript-eslint/recommended',
        'plugin:jsdoc/recommended',
        'plugin:rxjs/recommended',
      ],
      rules: {
        '@angular-eslint/component-selector': [
          'error',
          {
            type: 'element',
            prefix: [
              'mv',
            ],
            style: 'kebab-case',
          },
        ],
        '@angular-eslint/directive-selector': [
          'error',
          {
            type: 'attribute',
            prefix: [
              'mv',
            ],
            style: 'camelCase'
          }
        ],
        '@typescript-eslint/consistent-type-definitions': 'error',
        '@typescript-eslint/explicit-member-accessibility': 'error',
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            allowExpressions: true,
          }
        ],
        '@typescript-eslint/member-ordering': 'error',
        '@typescript-eslint/naming-convention': [
          'warn',
          {
            selector: 'default',
            format: ['camelCase'],
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid',
          },
          {
            selector: 'variable',
            format: ['camelCase', 'UPPER_CASE'],
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid',
          },
          {
            selector: 'typeLike',
            format: ['PascalCase'],
          },
          {
            selector: 'enumMember',
            format: ['PascalCase'],
          },
        ],
        '@typescript-eslint/ban-types': 'error',
        '@typescript-eslint/no-namespace': 'off',
        "@typescript-eslint/member-delimiter-style": 'error',
        "@typescript-eslint/no-confusing-non-null-assertion": 'error',
        '@typescript-eslint/no-implicit-any-catch': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-parameter-properties': [
          'error',
          {
            allows: [
              "private",
              "private readonly",
              "protected readonly",
            ],
          },
        ],
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/prefer-includes': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/require-array-sort-compare': 'error',
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/no-inferrable-types': [
          'error',
          {
            ignoreParameters: true,
            ignoreProperties: true,
          },
        ],
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        'no-magic-numbers': 'off',
        '@typescript-eslint/no-magic-numbers': [
          'off',
          {
            /**
             * 0 - for length checking e.g.
             * 1 - 1 the same as above.
             * -1 - for indexOf checking
             * 2 - for odd/even checking.
             * 10 - for radix.
             * 100 - for percents.
             */
            ignore: [0, 1, -1, 2, 10, 100],
            ignoreEnums: true,
            ignoreNumericLiteralTypes: true,
            ignoreReadonlyClassProperties: true,
            ignoreDefaultValues: true,
          }
        ],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': [
          'error',
          {
            hoist: 'never'
          }
        ],
        'brace-style': 'off',
        '@typescript-eslint/brace-style': [
          'error',
          '1tbs'
        ],
        'comma-dangle': 'off',
        '@typescript-eslint/comma-dangle': [
          'error',
          'always-multiline'
        ],
        'comma-spacing': 'off',
        '@typescript-eslint/comma-spacing': 'error',
        'default-param-last': 'off',
        '@typescript-eslint/default-param-last': 'error',
        'dot-notation': 'off',
        '@typescript-eslint/dot-notation': 'error',
        'indent': 'off',
        '@typescript-eslint/indent': ['error', 2],
        'keyword-spacing': 'off',
        '@typescript-eslint/keyword-spacing': 'error',
        'no-throw-literal': 'off',
        '@typescript-eslint/no-throw-literal': 'error',
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': 'error',
        'quotes': 'off',
        '@typescript-eslint/quotes': ['error', 'single'],
        'no-return-await': 'off',
        '@typescript-eslint/return-await': 'error',
        'semi': 'off',
        '@typescript-eslint/semi': 'error',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        'capitalized-comments': [
          'error',
          'always'
        ],
        'id-blacklist': 'error',
        'id-match': 'error',
        'import/no-deprecated': 'error',
        'import/order': 'error',
        'no-multiple-empty-lines': 'error',
        'no-underscore-dangle': 'error',
        'prefer-arrow/prefer-arrow-functions': [
          'error',
          {
            "allowStandaloneDeclarations": true,
          }
        ],
        'arrow-body-style': 'off',
        'no-restricted-imports': [
          'error',
          {
            patterns: [
              'rxjs-compat/*',
              '**/*/public-api',
            ],
          },
        ],
        // JSDoc override.
        'jsdoc/newline-after-description': 'off',
        'jsdoc/require-jsdoc': [
          'error',
          {
            contexts: [
              'MethodDefinition:not([accessibility="private"])',
              'ClassDeclaration',
              'ClassProperty:not([accessibility="private"])',
              'TSEnumDeclaration',
              'TSInterfaceDeclaration',
              'TSInterfaceDeclaration :matches(TSCallSignatureDeclaration, TSMethodSignature, TSPropertySignature)',
            ],
            checkConstructors: false,
            checkGetters: true,
            checkSetters: true,
            enableFixer: false,
          }
        ],
        'jsdoc/require-param': [
          'error',
          {
            enableFixer: false,
          }
        ],
        'jsdoc/require-example': 'off',
        'jsdoc/require-file-overview': 'off',
        'jsdoc/require-hyphen-before-param-description': 'off',
        'jsdoc/require-param-type': 'off',
        'jsdoc/require-returns': 'off',
        'jsdoc/require-property': 'off',
        'jsdoc/require-property-description': 'off',
        'jsdoc/require-returns-type': 'off',
        'jsdoc/check-access': 'off',
        'jsdoc/empty-tags': 'off',
        /**
         * The rule to show an error if result of fork-like
         * method is not used.
         */
        'no-restricted-syntax': [
          'error',
          {
            'selector': 'ExpressionStatement[expression.type="CallExpression"][expression.callee.type="MemberExpression"][expression.callee.property.name=/fork.*/]',
            'message': 'Unused fork-like method result.',
          },
        ],
        // RxJS rules
        'rxjs/finnish': 'error',
        'rxjs/no-compat': 'error',
        'rxjs/no-exposed-subjects': [
          'error',
          {
            allowProtected: true,
          },
        ],
        'rxjs/throw-error': 'off',
        'rxjs/no-implicit-any-catch': 'off',
      },
    },
    {
      files: [
        '*.html'
      ],
      extends: [
        'plugin:@angular-eslint/template/recommended'
      ],
      rules: {}
    },
  ],
};
