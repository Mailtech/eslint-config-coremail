
# Common shared ESLint config files for projects of Coremail (c) Mailtech Ltd.
[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/eslint-config-coremail.svg
[npm-url]: https://npmjs.org/package/eslint-config-coremail

## Usage

To use this config, add this to your `package.json`

```json
{
  "devDependencies"  : {
    "eslint"                 : "^2.0.0",
    "eslint-config-coremail" : ""
  }
}
```

or install manually

```bash
npm install eslint eslint-config-coremail
```


Then, add this to your `.eslintrc.json` file: 

- Using standard rules

    ```json
    {
      "extends" : "coremail"
    }
    ```

- Applying compliant rules (old IE compatible)

    ```json
    {
      "extends" : "./node_modules/eslint-config-coremail/config/compliant"
    }
    ```


## Learn more

For the full listing of rules that eslint supports, and more, visit 
For more information the full listing of rules, editor plugins, FAQs, and more, visit the
[ESLint official site](http://eslint.org/docs/rules/).

## License

MIT. Copyright (c) [Coremail](http://coremail.cn).