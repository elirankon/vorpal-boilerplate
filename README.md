# Vorpal Boilerplate
A boilerplate for creating awesome Vorpal apps.

## Contents
 * [Vorpal](https://github.com/dthree/vorpal)
 * [ESLint](https://eslint.org/)
 * [Airbnb ESLint Config](https://www.npmjs.com/package/eslint-config-airbnb)
 * [Mocha](https://www.mochajs.org)
 * [Chai](https://www.chaijs.com)
 * [Sinon](https://sinonjs.org)
 * [NYC](https://github.com/istanbuljs/nyc)
 * [Husky](https://github.com/typicode/husky)
 * `.travis.yml` file for Travis CI integration

## How to use
 * Fork this repo
 * Rename your local repo, change project info in `package.json`, etc.
 * Place your Vorpal Commands modules into the `commands` folder.
 * Each module should expose a function that takes a Vorpal instance.
 * Add the commands you want for that module!
 * Husky is setup to run tests and lint the code.
 * Run `npm run test-local` to test your code.
 * Run `npm start` to start your app.
 * If you want to setup [Coveralls](https://coveralls.io) just go ahead to your Travis CI project and add the `COVERALLS_REPO_TOKEN` to your env vars.

### Example
```javascript
module.exports = (cli) => {
    cli.command('hello', 'echos your hello').action((args, callback) => {
        // ...
    });

    cli.command('world', 'echos your world').action((args, callback) => {
        // ...
    });
}
```

The `index.js` will dynamically require all the command files inside the `commands` folder!
