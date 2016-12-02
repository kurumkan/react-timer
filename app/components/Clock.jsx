var React = require('react');

module.exports=React.createClass({
	getDefaultProps: function() {
		return {
			totalSeconds: 0
		};
	},

	propTypes: {
		totalSeconds: React.PropTypes.number
	},

	formatSeconds: function(totalSeconds){
		var minutes = Math.floor(totalSeconds/60);
		var seconds = totalSeconds % 60;
		return ("00"+minutes).slice(-2)+":"+("00"+seconds).slice(-2);
	},

	render: function(){		
		var {totalSeconds} = this.props;
		return (
			<div className="clock">
				<span className="clock-text">
					{this.formatSeconds(totalSeconds)}
				</span>
			</div>
		);
	}
});