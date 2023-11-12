import app from 'app-store-scraper';
import stringify from 'json-normalize';

const getReviews = app.reviews({
  appId: 'com.wearezeta.zclient.ios',
  sort: app.sort.NEWEST,
  page: 10,
  country: 'us'
}).then(it => { stringify(it, (err, results) => { console.log(results) })
}).catch(console.log);

export default { getReviews };