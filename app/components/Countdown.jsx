var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

module.exports=React.createClass({
	getInitialState: function(){
		return {
			strSeconds: "",
			count: 0
		}
	},

	handleChange: function(e){
		this.setState({
			strSeconds: e.target.value
		});				
	},

	handleSubmit: function(seconds){				
		this.setState({
			count: seconds,
			strSeconds: ""
		});				
	},

	render: function(){
		return (
			<div> 
				<Clock totalSeconds={this.state.count} />
				<CountdownForm 
					strSeconds={this.state.strSeconds} 
					handleChange={this.handleChange} 
					handleSubmit={this.handleSubmit}
				/>
			</div>
		);
	}
});