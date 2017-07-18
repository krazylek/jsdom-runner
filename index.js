var createPage = require('create-html')
var concat = require('concat-stream')
var jsdom = require('jsdom')

module.exports = function(pageOptions, jsdomOptions) {
  pageOptions = pageOptions || {}
  pageOptions.body = pageOptions.body || ''
  jsdomOptions = jsdomOptions || {}
  jsdomOptions.runScripts = 'dangerously'

  return concat(function(buffer) {
    pageOptions.body = ['<script>', buffer.toString('utf8'), '</script>'].join('')
    var page = createPage(pageOptions)
    new jsdom.JSDOM(page, jsdomOptions)
  })
}
