var store = require('app-store-scraper');


store.reviews({
  appId: 'com.wearezeta.zclient.ios',
  sort: store.sort.NEWEST,
  page: 10,
  country: 'us'
})
.then(console.log)
.catch(console.log);
