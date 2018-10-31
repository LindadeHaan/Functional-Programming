require('dotenv').config()

const api = require('./oba-api.js')
const chalk = require('chalk');
const express = require('express')
const app = express()
const port = 3000

const obaApi = new api({
  url: 'https://zoeken.oba.nl/api/v1/',
  key: process.env.PUBLIC
})

// Search for method, params and than optional where you wanna find something
// returns first 20 items
// obaApi.get(endpoint, params, filterKey)
// possible endpoints: search (needs 'q' parameter) | details (needs a 'frabl' parameter) | availability (needs a 'frabl' parameter) | holdings/root | index/x (where x = facet type (like 'book' ))
// possible parameters: q, librarian, refine, sort etc. check oba api documentation for all
// possible filterKey: any higher order key in response object, like title returns only title objects instead of full data object
obaApi.get('search', {
  q: 'dreamworks',
  librarian: false,
  refine: true,
  facet: 'language(dut)'
}, 'title').then(response => {

  // response ends up here
  console.log(response)

  // Make server with the response on the port
  app.get('/', (req, res) => res.json(response))
  app.listen(port, () => console.log(chalk.green(`Listening on port ${port}`)))
})





//////////////////////////////////////////////////////////////
// const OBA = require('oba-api');
//
// if(process.env.NODE_ENV !== 'production') {
//   require('dotenv').load()
// }
//
// // Setup authentication to api server
// const client = new OBA({
//   // ProQuest API Keys
//   public: '1e19898c87464e239192c8bfe422f280',
//   secret: '4289fec4e962a33118340c888699438d'
// });
//
// // General usage:
// // client.get({ENDPOINT}, {PARAMS});
// // ENDPOINT = search | details | refine | schema | availability | holdings
// // PARAMS = API url parameter options (see api docs for more info)
//
// // Client returns a promise which resolves the APIs output in JSON
//
// // Example search to the word 'rijk' sorted by title:
// client.get('search', {
//   q: 'dreamworks',
//   sort: 'year'
// })
//   .then(res => console.log(JSON.parse(res))) // JSON results
//   .catch(err => console.log(err)) // Something went wrong in the request to the API
