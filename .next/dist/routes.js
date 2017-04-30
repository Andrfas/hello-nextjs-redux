'use strict';

var nextRoutes = require('next-routes');
var routes = module.exports = nextRoutes();

routes.add('index', '/');
routes.add('todos', '/todos');
routes.add('todo', '/todos/:id');
routes.add('about', '/about');