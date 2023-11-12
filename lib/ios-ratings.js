import app from 'app-store-scraper';
import json from 'json-normalize';

const getRatings = app.ratings({
  id: '930944768',
  country: 'us'
}).then(it => { json.stringify(it, (err, results) => { console.log(results) })
}).catch(console.log);

export default { getRatings };