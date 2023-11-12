import gplay from 'google-play-scraper';
import json from 'json-normalize';

const getRatings = gplay.app({ appId: 'com.wire', country: 'us' })
    .then(it => { json.stringify(it.histogram, (err, results) => { console.log(results) }) })
    .catch(console.log);

export default { getRatings };