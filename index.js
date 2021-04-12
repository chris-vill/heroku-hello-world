const Express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const app = Express();

app.set(
  'views',
  path.join(__dirname, '/client/dist')
);
app.engine(
  'html',
  require('ejs').renderFile
);
app.set(
  'view engine',
  'html'
);

// Endpoints
app.get(
  '/',
  (req, res) => res.render('index.html')
);

// Port
app.listen(
  PORT,
  () => console.log(`Listening on http://localhost:${ PORT }`)
);