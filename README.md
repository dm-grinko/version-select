# Version Select

[![npm](https://img.shields.io/npm/v/version-select)](https://www.npmjs.com/package/version-select)
[![travis](https://img.shields.io/travis/dm-grinko/version-select)](https://travis-ci.org/dm-grinko/version-select)
[![Maintainability](https://api.codeclimate.com/v1/badges/abbf1b25f926d75bb9df/maintainability)](https://codeclimate.com/github/dm-grinko/version-select/maintainability)
![Last commit](https://img.shields.io/github/last-commit/dm-grinko/version-select)

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
