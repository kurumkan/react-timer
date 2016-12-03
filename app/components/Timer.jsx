var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

module.exports=React.createClass({
	getInitialState: function() {
		return {			
			count: 0,
			countdownStatus: 'stopped'
		}
	},
	componentWillUnmount: function() {		
		clearInterval(this.timer);
		this.timer=null;			
	},
	startTimer: function(){
		this.timer = setInterval(()=>{
			var newCount = this.state.count+1;
			this.setState({
				count: newCount
			});			
		}, 1000);		
	},
	handleStatusChange: function(newStatus){
		if(newStatus!==this.state.countdownStatus){
			this.setState({
				countdownStatus: newStatus
			});
			switch(newStatus){
				case 'started': 
					this.startTimer();
					break;
				case 'stopped': 
					this.setState({
						count: 0
					});
					clearInterval(this.timer);
					this.timer=null;		
					break;
				case 'paused': 
					clearInterval(this.timer);
					this.timer=null;		
					break;		
			}
		}		
	},

	render: function(){		
		return (
			<div>
				<h1 className="page-title">Timer</h1>
				<Clock totalSeconds={this.state.count} />
				<Controls countdownStatus={this.state.countdownStatus} onStatusChange={this.handleStatusChange} />
			</div>
		);
	}
});