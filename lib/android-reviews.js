import gplay from "google-play-scraper";
import stringify from 'json-normalize';

const getReviews = gplay.app({
    appId: 'com.wire',
    sort: gplay.sort.NEWEST,
    num: 100,
    lang: 'us'
}).then(it => { stringify(it.data, (err, results) => { console.log(results) })
}).catch(console.log);

export default { getReviews };