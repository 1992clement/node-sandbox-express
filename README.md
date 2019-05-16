# Testing Socket.io

Little todolist project to fiddle with nodeJS and Express.

## Installation :
```
  git clone https://github.com/1992clement/node-sandbox-express.git
  cd node-sandbox2
  npm install
  docker-compose up -d
```

## Problem encountered :
Encountered a problem : can't access the route '/done/0' or '/done/1' in chrome only. Somehow, opening the console panel fixes the problem... Couldn't find the origin of the problem nor a workaround for now.
Link to Stackoverflow issue [here](https://stackoverflow.com/questions/56084327/url-with-dynamic-parameters-matching-problem-in-express-nodejs)

*problem fixed*
Looks like the problem was related to using a href to delete data on the server. Once I changed my `<a>` into `<form method="post">`, problem was solved. Maybe Chrome prefetched the data related to the links, causing the deletion/alteration of said data. But it's weird that I didn't get any console log...

Morale of the story : don't use GET to modify / delete data on the server.
