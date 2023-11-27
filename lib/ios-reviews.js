import app from 'app-store-scraper';
import json from 'json-normalize';

const getReviews = app.reviews({
  appId: 'com.wearezeta.zclient.ios',
  sort: app.sort.RECENT,
  page: 10,
  country: 'us'
}).then(it => {
  json.stringify(it, (err, results) => { console.log(results) })
}).catch((error) => {
  console.log(error)
  throw error;
});

export default { getReviews };