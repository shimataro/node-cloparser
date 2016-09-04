node-cloparser
======

Command Line Options Parser for Node.js

## Usage

test.js:
```javascript
var cloparser = require("node-cloparser");
var options = {
	a: false,
	b: true
};
var extras = cloparser(options);
console.log(options);
console.log(extras);
```

output:
```
$ node test.js
{ a: false, b: true }
[]

$ node test.js -a
{ a: true, b: true }
[]

$ node test.js -option
{ a: false, b: true, o: true, p: true, t: true, i: true, n: true }
[]

$ node test.js -opt -ion
{ a: false, b: true, o: true, p: true, t: true, i: true, n: true }
[]

$ node test.js -opt ion
{ a: false, b: true, o: true, p: true, t: true }
[ 'ion' ]

$ node test.js opt ion
{ a: false, b: true }
[ 'opt', 'ion' ]

$ node test.js -opt=ion
{ a: false, b: true, o: true, p: true, t: 'ion' }
[]
```

## Project page

http://github.com/shimataro/node-cloparser

## Release note

* 2016-09-04 *version 0.0.1*
	* First release.
