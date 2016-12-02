var React = require('react');

module.exports=React.createClass({	
	propTypes: {
		countdownStatus: React.PropTypes.string.isRequired
	},
	render: function(){
		var {countdownStatus} = this.props;
		var renderStartStopButton = function(){
			if(countdownStatus =='started'){
				return <button className="button secondary">Pause</button>
			}else if(countdownStatus =='paused'){
				return <button className="button primary">Start</button>
			}
		}; 

		return (
			<div> 
				{renderStartStopButton()}
				<button className="button alert hollow">
					Clear
				</button>
			</div>
		);
	}
});