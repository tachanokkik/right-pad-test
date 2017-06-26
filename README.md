## Install

```bash
$ npm install right-pad-test
```

## Usage

```js
const rightPad = require('right-pad')

rightPad('foo', 5)
// => "foo  "

rightPad('foobar', 6)
// => "foobar"

rightPad(1, 2, '0')
// => "10"

rightPad(17, 5, 0)
// => "17000"
```
