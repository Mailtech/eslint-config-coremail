
# ESLint config files for Coremail (c)
[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/eslint-config-coremail.svg
[npm-url]: https://npmjs.org/package/eslint-config-coremail

## Usage

This package exports [a flat ESLint configuration](https://eslint.org/blog/2022/08/new-config-system-part-2/)
which is supported since `eslint 8.21.0`

```bash
npm install --save-dev eslint eslint-config-coremail
```

Example `eslint.config.js` in esm:
```js
import {configs} from 'eslint-config-coremail';

export default [
    // default using browser & node env
    configs.standard,
    // for old IE compatible
    {
        files : ['path/to/legacy/**'],
        ...configs.legacy,
    },
]
```

Example `eslint.config.js` in commonjs:
```js
module.export = import('eslint-config-coremail').then(({configs}) => [
    // default using browser & node env
    configs.standard,
    // for old IE compatible
    {
        files : ['path/to/legacy/**'],
        ...configs.legacy,
    },
]);
```

## Learn more

For the full listing of rules that eslint supports, and more, visit 
For more information on the full listing of rules, editor plugins, FAQs, and more, visit the
[ESLint official site](http://eslint.org/docs/rules/).

## License

MIT. Copyright (c) [Coremail](http://coremail.cn).
