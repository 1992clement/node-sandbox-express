const app = require('express')();
const twig = require('twig');
const bodyparser = require('body-parser');

app.set('views', __dirname + "/views");
app.set('view engine', 'twig');
app.use(bodyparser.urlencoded());

app.get('/', function(req, res, next){
  res.setHeader('Content-Type', 'text/html');
  res.render('index.html.twig');
})
.post('/new', function(req, res, next){
  //insert en base de données
  res.redirect(301, '/');
});

app.listen(8080);
