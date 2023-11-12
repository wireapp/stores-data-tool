const { reviews, sort } = require('app-store-scraper');
const { stringify } = require('json-normalize');

const getReviews = reviews({
  appId: 'com.wearezeta.zclient.ios',
  sort: sort.NEWEST,
  page: 10,
  country: 'us'
}).then(it => { stringify(it, (err, results) => { console.log(results) })
}).catch(console.log);

module.exports = { getReviews };