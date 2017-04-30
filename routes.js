const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add('index', '/');
routes.add('todos', '/todos');
routes.add('todo', '/todos/:id');
routes.add('about', '/about');