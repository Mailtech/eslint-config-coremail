
# ESLint config files for Coremail (c)
[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/eslint-plugin-coremail.svg
[npm-url]: https://npmjs.org/package/eslint-plugin-coremail

## Important Note

Since eslint 6 changes it's config resolving mechanism, config module can not share outside project root.

<ins>**This project has been changed to a plugin module and renamed (only package name).**</ins>

For more information, check this issue: https://github.com/eslint/eslint/issues/12654

## Usage

To use this config, add this to your `package.json`

```json
{
  "devDependencies"  : {
    "eslint"                 : "7.4.0",
    "eslint-plugin-coremail" : "0.4.1"
  }
}
```

or install manually

```bash
npm install eslint eslint-plugin-coremail
```


Then, add this to your `.eslintrc.yaml` file: 

- Using standard rules

    ```yaml
    extends: plugin:coremail/standard
    ```

- Applying compliant rules (old IE compatible)

    ```yaml
    extends: plugin:coremail/compliant
    ```


## Learn more

For the full listing of rules that eslint supports, and more, visit 
For more information the full listing of rules, editor plugins, FAQs, and more, visit the
[ESLint official site](http://eslint.org/docs/rules/).

## License

MIT. Copyright (c) [Coremail](http://coremail.cn).
