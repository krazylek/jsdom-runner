# jsdom-runner

run browser tests or scripts within an emulated DOM


## Usage

This library is intended to run any script from NodeJs inside an emulated DOM provided by [jsdom](https://github.com/tmpvar/jsdom).
Script is read from standard input and results are displayed to standard output or standard error by connecting the `jsdom` console to NodeJs console.

For example [Tape](https://github.com/substack/tape) results are directed to stdout.
Any test library or script writing to the console should work.


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
browserify test.js | jsdom-runner
```

## API

```js
var runner = require('jsdom-runner')
```

### runner(pageOptions, jsdomOptions)

Returns a writable stream. Pipe your js code into it.

* `pageOptions`: options for `create-html` module, documentation is [here](https://github.com/sethvincent/create-html#createhtmloptions)
* `jsdomOptions`: options for jsdom instance, documentation is [here](https://github.com/tmpvar/jsdom#customizing-jsdom)


## Install

```
npm install -g jsdom-runner
```

But --save-dev option should suffice!


## Similar projects
- https://github.com/substack/testling (tests with the browser installed on your system)
- https://github.com/shama/testron (tests with Electron)
- https://github.com/rstacruz/jsdom-global (different approach, injects the DOM into the test)
