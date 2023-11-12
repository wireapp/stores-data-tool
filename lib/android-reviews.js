import gplay from "google-play-scraper";
import json from 'json-normalize';

const getReviews = gplay.reviews({
    appId: 'com.wire',
    sort: gplay.sort.NEWEST,
    num: 1000,
    lang: 'us',
    paginate: false
}).then(it => { json.stringify(it.data, (err, results) => { console.log(results) })
}).catch(console.log);

export default { getReviews };