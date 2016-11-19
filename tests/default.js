const chai = require('chai')
const expect = chai.expect
const http = require('http')
const standard = require('mocha-standard')
const SubtitleTorrent = require('../index')

before((done) => {
    done()
})

describe('Static Analysing', function () {
  it('Javascript Standard', standard.files(['../*']))
})

describe( function () {
  it('should return subtitles', function (done){
    // Duck and Cover 1951 Public Domain
    new SubtitleTorrent('magnet:?xt=urn:btih:c53aeca2fb6b9fadafd5fd3b56e1bd89c31c3363', 'pb').then((results) => {
      expect(results).to.a('array')
      done()
    })
    done()
  })
})
