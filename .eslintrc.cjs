module.exports = {
  extends: [
    'universe',

    'universe/native',

    'universe/web',

    'universe/shared/typescript-analysis',
  ],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      plugins: [
        '@typescript-eslint',
        'unused-imports',
        'simple-import-sort',
        'react-hooks',
        'hooks',
      ],
      extends: [
        'airbnb-typescript',
        'plugin:prettier/recommended',
        'plugin:react-hooks/recommended',
      ],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        'prettier/prettier': [
          'error',
          {
            singleQuote: true,
            endOfLine: 'auto',
          },
        ],
        'react/destructuring-assignment': 'off', // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
        'react/require-default-props': 'off', // Allow non-defined react props as undefined
        'react/jsx-props-no-spreading': 'off', // _app.tsx uses spread operator and also, react-hook-form
        '@typescript-eslint/comma-dangle': 'off', // Avoid conflict rule between Eslint and Prettier
        '@typescript-eslint/consistent-type-imports': 'error', // Ensure `import type` is used when it's necessary
        'import/prefer-default-export': 'off', // Named export is easier to refactor automatically
        'simple-import-sort/imports': 'error', // Import configuration for `eslint-plugin-simple-import-sort`
        'simple-import-sort/exports': 'error', // Export configuration for `eslint-plugin-simple-import-sort`
        '@typescript-eslint/no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        'no-param-reassign': 'off',
        'unused-imports/no-unused-vars': ['error'],
        'react/function-component-definition': [
          'error',
          {
            namedComponents: 'arrow-function',
            unnamedComponents: 'arrow-function',
          },
        ],
        'import/no-extraneous-dependencies': 'off',
        'react/prop-types': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'off',
        'hooks/sort': [
          1,
          {
            groups: [
              'useThemeService',
              'useReducer',
              'useContext',
              'useState',
              'useRef',
              'useDispatch',
              'useCallback',
              'useEffect',
            ],
          },
        ],
      },
    },
  ],

  plugins: ['react-hooks'],

  rules: {
    'import/order': 'off',
  },

  env: {
    node: true,
  },
};
