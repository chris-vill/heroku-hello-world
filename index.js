const Express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

Express()
  .use(Express.static(path.join(__dirname, 'client/dist')))
  .get('/', (req, res) => res.render(path.join(__dirname, 'index.html')))
  .listen(PORT, () => console.log(`Listening on http://localhost:${ PORT }`))
