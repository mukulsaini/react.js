var React = require('react');
var Container = require('muicss/lib/react/container');
var Appbar = require('muicss/lib/react/appbar');

Child = require('./second.jsx');
	/** @jsx React.DOM */
	Parent = React.createClass({
		
			getInitialState: function() {
				return {
					value: 'Black'
				}
			},
			changeColorRed: function(value) {
				var n = document.getElementById("set").style.color = "red";
				
				
				this.setState({
					value: value
				});
			},
			changeColorBlue: function(value) {
				var n = document.getElementById("set").style.color = "blue";
				this.setState({
					value: value
				});
			},
			render: function(){
				return(
					<div>
					<Appbar align="center"></Appbar>;

					<Container>
						<h2 id="set" className="mui--text-display1">{this.state.value}</h2>
						<Child   onClickRed={this.changeColorRed} onClickBlue={this.changeColorBlue}/>
						
						
					</Container>
					</div>
					
				
				);
			}
		});

	module.exports = Parent;