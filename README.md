npm install

$ npm install mocha
$ mkdir test
$ $EDITOR test/test.js # or open with your favorite editor

$ ./node_modules/mocha/bin/mocha

Set up a test script in package.json:

"scripts": {
    "test": "mocha"
  }
Then run tests with:

$ npm test
