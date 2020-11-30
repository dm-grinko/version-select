# Version Select

[![npm](https://img.shields.io/npm/v/version-select)](https://www.npmjs.com/package/version-select)
![CircleCI](https://img.shields.io/circleci/build/github/dm-grinko/version-select)
![npm](https://img.shields.io/npm/dw/version-select) ![npm bundle size](https://img.shields.io/bundlephobia/min/version-select)
![NPM](https://img.shields.io/npm/l/version-select)

This package allows you to update the version of the package.json file depending on the selected option.

## Usage

- Install package: `npm i -D version-select`
- Add npm script:

``` json
{
    "name": "test",
    "version": "1.0.0",
    "scripts": {
        "version-select": "version-select"
    },
    "devDependencies": {
        "version-select": "^1.0.6"
    }
}
```

- Run npm script:

![version-select](version-select.gif)
