const store = require('app-store-scraper');
const jsonNormalize = require('json-normalize');

store.reviews({
  appId: 'com.wearezeta.zclient.ios',
  sort: store.sort.NEWEST,
  page: 10,
  country: 'us'
}).then(it => { jsonNormalize.stringify(it, (err, results) => { console.log(results) })
}).catch(console.log);
