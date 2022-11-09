const store = require('app-store-scraper');
const jsonNormalize = require('json-normalize');

store.ratings({
  id: '930944768',
  country: 'es'
}).then(it => { jsonNormalize.stringify(it, (err, results) => { console.log(results) })
}).catch(console.log);
