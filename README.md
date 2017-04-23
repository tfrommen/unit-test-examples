# Unit Test Examples

Example code for the workshop "[An Introduction to Unit Testing (for WordPress)](https://slides.tfrommen.de/unit-testing-workshop/)" at WordCamp Vienna, 2017.

## Getting Started

Clone this repository or download the ZIP file.

There is both PHP and JavaScript example code waiting for you at `src/php/` and `src/js/`, respectively.

## Writing Tests

The repository is set up for you to write PHP tests with [PHPUnit](https://github.com/sebastianbergmann/phpunit), and JavaScript tests with [tape](https://github.com/substack/tape).
If you would rather use something else instead, feel free to adapt `composer.json` and `package.json`, respectively.

### PHP Tests

In order to run the PHP tests, you have to install the required PHP packages first.

Install with [Composer](https://getcomposer.org/):

```shell
$ composer install
```

By default, this will install PHPUnit as well as [Mockery](https://github.com/mockery/mockery), [Patchwork](https://github.com/antecedent/patchwork/) and [Brain Monkey](https://github.com/Brain-WP/BrainMonkey).

Then, execute PHPUnit, which will use the configuration provided in `phpunit.xml.dist`.

```shell
$ vendor/bin/phpunit
```

### JavaScript Tests

In order to run the JavaScript tests, you have to install the required JavaScript packages first.

Install with [Yarn](https://www.npmjs.com/package/yarn):

```shell
$ yarn
```

By default, this will install tape as well as [Sinon.JS](https://github.com/sinonjs/sinon).

Then, run the `test` script, defined in `package.json`.

```shell
$ yarn run test
```

In case you want to use [npm](https://www.npmjs.com/package/npm) instead, do it like so:

```shell
$ npm i && npm run test
```

## License

Copyright (c) 2017 Thorsten Frommen

This code is licensed under the [MIT License](LICENSE).
