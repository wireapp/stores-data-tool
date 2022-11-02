var gplay = require('google-play-scraper');
var jsonNormalize = require('json-normalize');

gplay.reviews({
    appId: 'com.wire',
    sort: gplay.sort.NEWEST,
    num: 100
  }).then(a => {
    jsonNormalize.stringify(a, (err, results) => { console.log(results) })
  }).catch(console.log);