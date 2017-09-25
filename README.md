# pure-trim
JavaScript Package For Removing  Extra whitespace from a string.

![npm](https://img.shields.io/npm/v/pure-trim.svg) ![license](https://img.shields.io/npm/l/pure-trim.svg) ![github-issues](https://img.shields.io/github/issues/Prosen-Ghosh/pure-trim.svg) 


![nodei.co](https://nodei.co/npm/pure-trim.png?downloads=true&downloadRank=true&stars=true)

![travis-status](https://img.shields.io/travis/Prosen-Ghosh/pure-trim.svg)
![stars](https://img.shields.io/github/stars/Prosen-Ghosh/pure-trim.svg)
![forks](https://img.shields.io/github/forks/Prosen-Ghosh/pure-trim.svg)


## Features


## npm Install

`npm install --save pure-trim`

## Browser Script Tag

**For Production**
```js
<script src='https://cdn.rawgit.com/Prosen-Ghosh/pure-trim/3cc8f88c/pure-trim.js'></script>
```

**For Development**
```js
<script src='https://rawgit.com/Prosen-Ghosh/pure-trim/master/pure-trim.js'></script>
```

## Scripts

 - **npm run test** : `mocha`
 - **npm run readme** : `node ./node_modules/.bin/node-readme`

## Development Dependencies

Package | Version | Dev
--- |:---:|:---:
[chai](https://www.npmjs.com/package/chai) | ^4.1.2 | ✔
[mocha](https://www.npmjs.com/package/mocha) | ^3.5.3 | ✔
[node-readme](https://www.npmjs.com/package/node-readme) | ^0.1.9 | ✔

## Usage

```js
const pureTrim = require('pure-trim');

pureTrim(); // return an empty string
//=> ''


pureTrim('   abc   abc   abc   ');
//=> 'abc abc abc'


pureTrim(['      abc   abc     abc   ', 2, 3, 4, 5, '    x    xx  xxx    ']);
//=> [ 'abc abc abc', 2, 3, 4, 5, 'x xx xxx' ]


pureTrim({
        a : '      aaa      aaaa    aaaa      ',
        b : 10,
        c : 20,
        d: '            yyy   y   yyyy     y      '
    });
//=> { a: 'aaa aaaa aaaa', b: 10, c: 20, d: 'yyy y yyyy y' }
```

## Author

Prosen Ghosh <prosenghosh25@gmail.com>

## License

 - **MIT**
