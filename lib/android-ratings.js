const gplay = require('google-play-scraper');
const jsonNormalize = require('json-normalize');

gplay.app({ appId: 'com.wire', country: 'us' })
    .then(it => { jsonNormalize.stringify(it.histogram, (err, results) => { console.log(results) }) })
    .catch(console.log);
