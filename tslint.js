module.exports = {
  extends: ['tslint-config-airbnb', 'tslint-config-prettier'],
  rulesDirectory: ['tslint-consistent-codestyle', 'tslint-microsoft-contrib'],
  rules: {
    // Turn off/tweak airbnb rules
    'import-name': false,
    'function-name': false,
    'variable-name': false,
    'object-shorthand-properties-first': false,
    'naming-convention': [
      true,
      // Start from simple camelCase and add exceptions as we go
      {
        type: 'default',
        format: 'camelCase',
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid'
      },
      // Allow either camel case or capital case for module variables
      {
        type: 'variable',
        modifiers: ['global', 'const'],
        format: ['camelCase', 'UPPER_CASE']
      },
      // If the variable is in a destructure and is not used, it may start with
      // an underscore to satisfy the no unused tslint rule
      {
        type: 'variable',
        modifiers: ['rename', 'unused'],
        leadingUnderscore: 'allow'
      },
      // If the exported variable is a function, use camel case
      {
        type: 'functionVariable',
        modifiers: ['export', 'const'],
        format: 'camelCase'
      },
      // Same goes for normal functions
      {
        type: 'function',
        modifiers: ['export', 'const'],
        format: 'camelCase'
      },
      // Unused parameters can have a leading underscore to play nice with
      // Typescript's noUnusedParameters when present.
      {
        type: 'parameter',
        modifiers: 'unused',
        leadingUnderscore: 'allow'
      },
      // Private methods/fields have to start with an underscore
      {
        type: 'member',
        modifiers: 'private',
        leadingUnderscore: 'require'
      },
      // Static property members may use capital case
      {
        type: 'property',
        modifiers: 'static',
        format: ['camelCase', 'UPPER_CASE']
      },
      // Private static property members may have an underscore (if they
      // are camel case)
      {
        type: 'property',
        modifiers: 'static',
        leadingUnderscore: 'allow'
      },
      // Classes, interfaces, type aliases, etc. have to be capitalized
      {
        type: 'type',
        format: 'PascalCase'
      },
      // Enum members have to be capitalized
      {
        type: 'enumMember',
        format: 'PascalCase'
      }
    ],

    // Additional rules
    'adjacent-overload-signatures': true,
    'ban-types': {
      options: [
        ['Object', 'Avoid using the `Object` type. Did you mean `object`?'],
        [
          'Function',
          'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.'
        ],
        ['Boolean', 'Avoid using the `Boolean` type. Did you mean `boolean`?'],
        ['Number', 'Avoid using the `Number` type. Did you mean `number`?'],
        ['String', 'Avoid using the `String` type. Did you mean `string`?'],
        ['Symbol', 'Avoid using the `Symbol` type. Did you mean `symbol`?']
      ]
    },
    'member-access': [true, 'no-public'],
    'member-ordering': [true, 'statics-first'],
    'no-import-side-effect': true,
    'no-internal-module': true,
    'no-unnecessary-type-assertion': true,
    'only-arrow-functions': [true, 'allow-declarations'],
    'promise-function-async': true,
    'unified-signatures': true,
    'ban-comma-operator': true,
    'label-position': true,
    'no-arg': true,
    'no-conditional-assignment': true,
    'no-debugger': true,
    'no-duplicate-super': true,
    'no-duplicate-switch-case': true,
    'no-empty': [true, 'allow-empty-catch', 'allow-empty-functions'],
    'no-eval': true,
    'no-floating-promises': true,
    'no-for-in-array': true,
    'no-implicit-dependencies': [true, 'dev'],
    'no-inferred-empty-object-type': true,
    'no-invalid-template-strings': true,
    'no-invalid-this': true,
    'no-misused-new': true,
    'no-restricted-globals': true,
    'no-sparse-arrays': true,
    'no-string-literal': true,
    'no-string-throw': true,
    'no-switch-case-fall-through': true,
    'no-this-assignment': true,
    'no-unnecessary-class': true,
    'no-unused-expression': [true, 'allow-fast-null-checks'],
    'unnecessary-constructor': true,
    'use-isnan': true,
    'no-mergeable-namespace': true,
    'arrow-return-shorthand': true,
    'file-name-casing': [true, 'camel-case'],
    'interface-name': [true, 'never-prefix'],
    'interface-over-type-literal': true,
    'no-angle-bracket-type-assertion': true,
    'no-boolean-literal-compare': true,
    'no-parameter-properties': true,
    'no-unnecessary-initializer': true,
    'ordered-imports': {
      options: {
        'grouped-imports': true,
        groups: [
          {
            name: 'Framework',
            match: `^(${[
              // Node.js modules
              ...require('module').builtinModules,
              // React
              'react',
              'react-dom',
              // Electron
              'electron'
            ]
              .join('|')
              .replace(/\./g, '\\.')})$`,
            order: 10
          },
          {
            name: 'External',
            match: '^[^\\.]',
            order: 20
          },
          {
            name: 'Internal Parent',
            match: '^\\.\\.',
            order: 30
          }
        ]
      }
    },
    'prefer-method-signature': true,
    'prefer-template': [true, 'allow-single-concat'],

    // tslint-consistent-codestyle
    'no-unnecessary-else': true,
    'no-unused': [true, 'ignore-parameters'],
    'no-var-before-return': [true, 'allow-destructuring'],

    // tslint-microsoft-contrib
    'no-for-in': true,
    'no-typeof-undefined': true,
    'no-unnecessary-override': true,
    'no-with-statement': true,
    'promise-must-complete': true
  }
};
