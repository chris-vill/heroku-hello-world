const Express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const app = Express();
const paths = {
  client: path.join(__dirname, '../../client/dist')
};

app.set(
  'views',
  paths.client
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