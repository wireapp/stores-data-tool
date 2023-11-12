const { reviews, sort } = require('google-play-scraper');
const { stringify } = require('json-normalize');

const getReviews = reviews({
    appId: 'com.wire',
    sort: sort.NEWEST,
    num: 100,
    lang: 'us'
}).then(it => { stringify(it.data, (err, results) => { console.log(results) })
}).catch(console.log);

module.exports = { getReviews };