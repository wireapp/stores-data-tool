const { ratings } = require('app-store-scraper');
const { stringify } = require('json-normalize');

const getRatings = ratings({
  id: '930944768',
  country: 'us'
}).then(it => { stringify(it, (err, results) => { console.log(results) })
}).catch(console.log);

module.exports = { getRatings };