	var React = require('react');
var Button = require('muicss/lib/react/button');

	/** @jsx React.DOM */

	Child = React.createClass({
			
			changeColorRed: function(e) {
			
				if (typeof this.props.onClickRed === 'function') {
					this.props.onClickRed("Red");
				}
			},
			
			changeColorBlue: function(e) {
				
				if (typeof this.props.onClickBlue === 'function') {
					this.props.onClickBlue("Blue");
				}
			},
			render: function() {
				return (
				
					<div>
						<Button color="danger"  onClick= { this.changeColorRed}>Red</Button>
						<Button color="primary"  onClick= { this.changeColorBlue}>Blue</Button>
					</div>
						
				
				);
			}
		});

	module.exports = Child;