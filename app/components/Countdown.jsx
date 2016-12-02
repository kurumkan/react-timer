var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

module.exports=React.createClass({
	getInitialState: function(){
		return {
			strSeconds: "",
			count: 0,
			countdownStatus: 'stopped'
		}
	},

	componentDidUpdate: function(prevProps, prevState){
		var {countdownStatus} = this.state;
		if(countdownStatus !==prevState.countdownStatus){
			switch(countdownStatus){
				case 'started':
					this.startTimer();
					break;
				case 'stopped':
					this.setState({
						count: 0
					});
					break;	
			}
		}	
	},

	startTimer: function(){
		this.timer = setInterval(()=>{
			var newCount = this.state.count-1;
			this.setState({
				count: newCount >=0 ? newCount : 0
			});
		}, 1000);
	},

	handleChange: function(e){
		this.setState({
			strSeconds: e.target.value
		});				
	},

	handleSubmit: function(seconds){				
		this.setState({
			count: seconds,
			strSeconds: "",
			countdownStatus: "started"
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