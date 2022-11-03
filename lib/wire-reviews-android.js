var gplay = require('google-play-scraper');
var jsonNormalize = require('json-normalize');

gplay.reviews({
    appId: 'com.wire',
    sort: gplay.sort.NEWEST,
    num: 100
  }).then(it => { jsonNormalize.stringify(it, (err, results) => { console.log(results) })
  }).catch(console.log);