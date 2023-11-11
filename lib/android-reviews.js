import { reviews, sort as _sort } from 'google-play-scraper';
import { stringify } from 'json-normalize';

reviews({
    appId: 'com.wire',
    sort: _sort.NEWEST,
    num: 100,
    lang: 'us'
}).then(it => { stringify(it.data, (err, results) => { console.log(results) })
}).catch(console.log);
