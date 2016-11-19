#!/usr/bin/env node

const program = require('commander')

program
  .version('0.0.1')
  .option('-m, --magnet [string]', 'Magnet URI')
  .option('-l, --language [string]', 'language subtitle')
  .parse(process.argv)

if(!program.magnet) {
  console.log('Magnet is necessary')
  return
}

const SubtitleTorrent = require('../index')
let lang = program.language ? program.language : 'pb'

new SubtitleTorrent(program.magnet, lang, (response) => {
  response.pipe(process.stdout)
})
