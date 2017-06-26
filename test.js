/* This program is free software. It comes without any warranty, to
     * the extent permitted by applicable law. You can redistribute it
     * and/or modify it under the terms of the Do What The Fuck You Want
     * To Public License, Version 2, as published by Sam Hocevar. See
     * http://www.wtfpl.net/ for more details. */
var rightPad = require("./");
var test = require("tape");

test('edge cases', function (assert) {
  assert.plan(12);
  assert.strictEqual(rightPad('foobar', 6), 'foobar');
  assert.strictEqual(rightPad('foobar', 5), 'foobar');
  assert.strictEqual(rightPad('foobar', -1), 'foobar');
  assert.strictEqual(rightPad('foobar', 6, '1'), 'foobar');
  assert.strictEqual(rightPad('foobar', 5, '1'), 'foobar');
  assert.strictEqual(rightPad('foobar', -1, '1'), 'foobar');
  assert.strictEqual(rightPad('foobar', 8, ''), 'foobar  ');
  assert.strictEqual(rightPad('foobar', 8, false), 'foobar  ', 'false default to space');
  assert.strictEqual(rightPad('foobar', 8, 0), 'foobar00', '0 is treated as 0');
  assert.strictEqual(rightPad(0, 3, 1), '011', 'integer for str is converted to string');
  assert.strictEqual(rightPad(true, 7), 'true   ', 'boolean for str is converted to string');
  assert.strictEqual(rightPad('', 2), '  ', 'empty str for str');
});

test('spaces for ch', function (assert) {
  assert.plan(12);
  // default to space if not specified
  assert.strictEqual(rightPad('foo', 2), 'foo');
  assert.strictEqual(rightPad('foo', 3), 'foo');
  assert.strictEqual(rightPad('foo', 4), 'foo ');
  assert.strictEqual(rightPad('foo', 5), 'foo  ');
  assert.strictEqual(rightPad('foo', 12), 'foo         ');
  assert.strictEqual(rightPad('foo', 13), 'foo          ');
  // explicit space param
  assert.strictEqual(rightPad('foo', 2, ' '), 'foo');
  assert.strictEqual(rightPad('foo', 3, ' '), 'foo');
  assert.strictEqual(rightPad('foo', 4, ' '), 'foo ');
  assert.strictEqual(rightPad('foo', 5, ' '), 'foo  ');
  assert.strictEqual(rightPad('foo', 12, ' '), 'foo         ');
  assert.strictEqual(rightPad('foo', 13, ' '), 'foo          ');
});

test('non spaces for ch', function (assert) {
  assert.plan(7);
  assert.strictEqual(rightPad(1, 2, 0), '10');
  assert.strictEqual(rightPad(1, 2, '-'), '1-');
  assert.strictEqual(rightPad('foo', 4, '*'), 'foo*', '0b1 len');
  assert.strictEqual(rightPad('foo', 5, '*'), 'foo**', '0b10 len');
  assert.strictEqual(rightPad('foo', 6, '*'), 'foo***', '0b11 len');
  assert.strictEqual(rightPad('foo', 7, '*'), 'foo****', '0b001 len');
  assert.strictEqual(rightPad('foo', 103, '*'), 'foo****************************************************************************************************', '100 pad');
});
