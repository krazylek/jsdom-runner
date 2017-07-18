var runner = require('../')
var test = require('tape')
var fromString = require('from2-string')
var through = require('through2')
var jsdom = require('jsdom')


test('browser console write to stdout and stderr through console object', function (t) {
  t.plan(4)
  var outStream = through();
  var errStream = through();
  var testConsole = new console.Console(outStream, errStream)
  var virtualConsole = new jsdom.VirtualConsole();
  virtualConsole.sendTo(testConsole);

  var testOutCount = 0
  var testErrCount = 0
  var testStdOut = ['log browser', 'info browser']
  var testStdErr = ['warn browser', 'error browser']
  var script = `
    console.log('${testStdOut[0]}')
    console.info('${testStdOut[1]}')
    console.warn('${testStdErr[0]}')
    console.error('${testStdErr[1]}')
  `

  outStream.on('data', function(data) {
    var msg = data.toString('utf8')
    t.equal(msg, testStdOut[testOutCount] + '\n')
    testOutCount++
  })
  errStream.on('data', function(data) {
    var msg = data.toString('utf8')
    t.equal(msg, testStdErr[testErrCount] + '\n')
    testErrCount++
  })

  var input = fromString(script)
  input.pipe(runner({}, { virtualConsole }))
})
