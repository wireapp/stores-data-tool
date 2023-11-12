const { app } = require('google-play-scraper');
const { stringify } = require('json-normalize');

const getRatings = app({ appId: 'com.wire', country: 'us' })
    .then(it => { stringify(it.histogram, (err, results) => { console.log(results) }) })
    .catch(console.log);

module.exports = { getRatings };