const data = require("./db.js");

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 9000;

// https://salmanapis.herokuapp.com/

server.use(middlewares);
server.use(router);

server.listen(port);
