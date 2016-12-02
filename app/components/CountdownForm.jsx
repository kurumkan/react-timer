var React = require('react');

module.exports=React.createClass({

	handleSubmit: function(e){
		e.preventDefault();	
		var value = this.props.strSeconds;
		if(value.match(/^[0-9]*$/)&&value){
			this.props.handleSubmit(parseInt(value, 10));				
		}
	},

	render: function(){
		return (
			<div> 
				<form onSubmit={this.handleSubmit} className="countdown-form">
					<input 
						onChange={this.props.handleChange} value={this.props.strSeconds} 
						type="text" placeholder="Enter time in seconds" 
					/>
					<button className="button expanded">Start</button>
				</form>
			</div>
		);
	}
});