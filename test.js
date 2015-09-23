var assets = require('./')
var assetsObj = require('./assets')
var test = require('tape')

test('API basics', function (t) {
  var expected = 'Standard Page'
  t.equal(assets('page_standard').name, expected, 'retrieve assets info via type code')
  t.equal(assets('Standard Page').name, expected, 'retrieve assets info via capital case name')
  t.equal(assets('standard page').name, expected, 'retrieve assets info via lower case name')
  t.equal(assetsObj['page_standard'].name, expected, 'retrieve assets info via type code from assets object')
  t.end()
})
