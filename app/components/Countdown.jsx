var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

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
				case 'paused':									
					clearInterval(this.timer);
					this.timer=null;					
					break;		
			}
		}	
	},

	componentWillUnmount: function() {		
		clearInterval(this.timer);
		this.timer=null;			
	},

	startTimer: function(){
		this.timer = setInterval(()=>{
			var newCount = this.state.count-1;
			this.setState({
				count: newCount >=0 ? newCount : 0
			});
			if(newCount===0)
				this.setState({countdownStatus: "stopped"})
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
	
	handleStatusChange: function(newStatus){		
		this.setState({
			countdownStatus: newStatus
		});		
	},

	render: function(){
		var {count, countdownStatus} = this.state;
		var renderControlsAndForm = () => {			
			if(countdownStatus !=='stopped'){					
				return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />
			}else{
				return (
					<CountdownForm 
						strSeconds={this.state.strSeconds} 
						handleChange={this.handleChange} 
						handleSubmit={this.handleSubmit}
					/>				
				)
			}

		};

		return (
			<div> 
				<Clock totalSeconds={this.state.count} />
				{renderControlsAndForm()}
			</div>
		);
	}
});