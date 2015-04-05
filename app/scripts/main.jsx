var Router = ReactRouter;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var routes = (
  <Route path="/" handler={TestApp}>

    <Route path="hello" handler={TestAppContentHello} />
    <Route path="world" handler={TestAppContentWorld} />
    <DefaultRoute handler={TestAppContentDefault} />

  </Route>
);

Router.run(routes, function (Handler, state) {
  var params = state.params;
  React.render(<Handler params={params}/>, document.body, ready);
});
