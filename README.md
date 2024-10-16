
# eslint-config-email [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url]

[npm-image]: https://img.shields.io/npm/v/eslint-config-coremail.svg
[npm-url]: https://npmjs.org/package/eslint-config-coremail
[downloads-image]: https://img.shields.io/npm/dm/eslint-config-coremail.svg
[downloads-url]: https://npmjs.org/package/eslint-config-coremail

#### The eslint config for [Coremail (c)](https://www.coremail.cn)

This module exports [a flat ESLint configuration](https://eslint.org/blog/2022/08/new-config-system-part-2/) which is
supported since `eslint 8.21.0`, basing [eslint-config-standard].

Notes that [eslint-config-standard] is likely [deprecated and stop maintaining](https://github.com/standard/eslint-config-standard/issues/351).
It's encouraged to switch to [neo-standard] for [standard] users.

This project is only focus on eslint config, and not providing framework tooling like [neo-standard].

[eslint-config-standard]: https://github.com/standard/eslint-config-standard
[neo-standard]: https://github.com/neostandard/neostandard
[standard]: https://standardjs.com

## Quick start

1. `npm install --save-dev eslint eslint-config-coremail`

2. For projects using esm, add `eslint.config.js` as:
    ```js
    import {configs} from 'eslint-config-coremail';

    export default [
        // default enables browser & node env, you can change to `configs.node` for server side project
        configs.standard, {
            // your overrides here
        }, {
            // for legacy codes compliant with old IE
            ...configs.legacy,
            files : ['path/to/legacy/codes/**'],
        },
    ]
    ```

3. For projects using commonjs, add `eslint.config.js` as:
    ```js
    module.exports = import('eslint-config-coremail').then(({configs}) => [
        // default enables browser & node env, you can change to `configs.node` for server side project
        configs.standard, {
            // your overrides here
        }, {
            // for legacy codes compliant with old IE
            ...configs.legacy,
            files : ['path/to/legacy/codes/**'],
        },
    ]);
    ```

## Migrating from eslint-config-coremail 0.x / eslint-config-standard 17.x

1. Read [this article](https://eslint.org/blog/2024/04/eslint-v9.0.0-released/) for ESLint 9 migration
2. Migrate [deprecated ESLint style rules](https://eslint.org/blog/2023/10/deprecating-formatting-rules/)
   with [eslint-stylistic](https://eslint.style/) rules following [this guide](https://eslint.style/guide/migration)

## Learn more

For more information on the full listing of rules that eslint supports, and more, visit
- [ESLint official site](http://eslint.org/docs/rules/)
- [ESLint Stylistic](https://eslint.style/packages/default#rules)

## License

MIT. Copyright (c) [Coremail](http://coremail.cn).
