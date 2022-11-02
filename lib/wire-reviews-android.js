var gplay = require('google-play-scraper');

gplay.reviews({
    appId: 'com.wire',
    sort: gplay.sort.NEWEST,
    num: 100
  }).then(console.log, console.log);
