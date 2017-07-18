# jsdom-runner

run browser tests within an emulated DOM


## Usage

jsdom-runner take a stream as an input and write to standard outputs.
The input stream should be a js script to run in a browser env.

The output depends on your test library: browser `console` is redirected to Node `console`console.

For example [Tape](https://github.com/substack/tape) write to stderr.
So any test library or script writing to the console should work.

### Cli options

...

### Example

test.js:

```
var test = require('tape');
 
test('demo', function (t) {
	t.equal(1+1, 2)
	t.end()
})
```

Then build it and run the test:

```
browserify test/test.js | jsdom-runner
```

## API

...

## Install

```
npm install -g jsdom-runner
```

But --save-dev option should suffice!


## Similar projects
- https://github.com/substack/testling (tests with the browser installed on your system)
- https://github.com/shama/testron (tests with Electron)
- https://github.com/rstacruz/jsdom-global (different approach, injects the DOM into the test)
