const Express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

Express()
  .set('views', __dirname + '/client/dist')
  .set('view engine', 'html')
  .engine('html', require('ejs').renderFile)
  .get('/', (req, res) => res.render('index.html'))
  .listen(PORT, () => console.log(`Listening on http://localhost:${ PORT }`))