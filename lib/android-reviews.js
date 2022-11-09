const gplay = require('google-play-scraper');
const jsonNormalize = require('json-normalize');

gplay.reviews({
    appId: 'com.wire',
    sort: gplay.sort.NEWEST,
    num: 100,
    lang: 'us'
}).then(it => { jsonNormalize.stringify(it.data, (err, results) => { console.log(results) })
}).catch(console.log);
