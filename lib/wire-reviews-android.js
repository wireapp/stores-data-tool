const gplay = require('google-play-scraper');
const jsonNormalize = require('json-normalize');
const countries = ['us', 'de', 'uk', 'fr', 'mx', 'es'];

const fetchReviews = () => {
    let acc = []
    gplay.reviews({
        appId: 'com.wire',
        sort: gplay.sort.NEWEST,
        lang: 'us',
        num: 100,
    }).then(it => { jsonNormalize.stringify(it, (err, results) => { 
        acc += results
    })
    }).catch(console.log);
    return acc
};

exports.fetchReviews = fetchReviews;
