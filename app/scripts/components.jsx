var TestAppContentDefault = React.createClass({
  render: function() {
    return (
      <div className="row marketing">
        <div className="col-lg-6">
          <h4>HTML5 Boilerplate</h4>
          <p>HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.</p>
          <h4>Bootstrap</h4>
          <p>Sleek, intuitive, and powerful mobile first front-end framework for faster and easier web development.</p>
          <h4>Modernizr</h4>
          <p>Modernizr is an open-source JavaScript library that helps you build the next generation of HTML5 and CSS3-powered websites.</p>
        </div>
      </div>
    );
  }
});

var TestAppContentHello = React.createClass({
  render: function() {
    return (
      <div className="row marketing">
        <div className="col-lg-6">
          <h1>hello</h1>
        </div>
      </div>
    );
  }
});

var TestAppContentWorld = React.createClass({
  render: function() {
    return (
      <div className="row marketing">
        <div className="col-lg-6">
          <h1>world</h1>
        </div>
      </div>
    );
  }
});

var TestAppHeader = React.createClass({
  render: function() {
    var that = this;
    function getNav(path, name) {
      var className = path == that.props.active.path ? 'active' : '';
      console.log(className);
      return (
        <li  className={className}><a href={'#'+path}>{name}</a></li>
      );
    }
    return (
      <div className="header">
        <ul className="nav nav-pills pull-right">
          {getNav('/', 'Home')}
          {getNav('/hello', 'Hello')}
          {getNav('/world', 'World')}
        </ul>
        <h3 className="text-muted">www</h3>
      </div>
    );
  }
});

var TestAppFooter = React.createClass({
  render: function() {
    var $body = $(document.body);
    var scrollTop = $body.scrollTop.bind($body, 0);
    return (
      <div className="footer" onClick={scrollTop}>
        <p>♥ from the Yeoman team</p>
      </div>
    );
  }
});

var TestAppPicture = React.createClass({
  render: function() {
    return (
      <div className="jumbotron">
        <h1>'Allo, 'Allo!</h1>
        <p className="lead">Always a pleasure scaffolding your apps.</p>
        <p><a className="btn btn-lg btn-success" href="#/">Splendid!</a></p>
      </div>
    );
  }
});

var TestApp = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  render: function() {
    var activeContent = this.context.router.getCurrentRoutes()[1];

    return (
      <div className="container-fluid test-container">
        <TestAppHeader active={activeContent} />
        <TestAppPicture />
        <RouteHandler key={this.context.router.getRoutes} />
        <TestAppFooter />
      </div>
    );
  }
});
