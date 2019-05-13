const app = require('express')();
const twig = require('twig');
const bodyparser = require('body-parser');

app.set('views', __dirname + "/views");
app.set('view engine', 'twig');
app.use(bodyparser.urlencoded({'extended' : true}));

var todolist = [];

app.get('/', function(req, res){
  res.setHeader('Content-Type', 'text/html');
  res.render('index.html.twig', {todolist: todolist});
});

app.post('/done', function(req, res){
  todolist[req.body.taskid].done = true;
  res.redirect(301, '/');
});

app.post('/delete', function(req, res){
  todolist.splice(req.body.taskid, 1);
  res.redirect(301, '/');
});

app.post('/new', function(req, res){
  //insert in DB later
  todolist.push({
    name: req.body.taskName,
    done: false
  });
  res.redirect(301, '/');
});

app.listen(8080);
