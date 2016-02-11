var React = require('react');

var Parent = require('./first.jsx');

React.render(
	<Parent />, document.getElementById('mount-point')
);