var React = require("react");
var Navigation = require('Navigation');
module.exports = (props)=>{
	return (
		<div>			
			<div>							
				<div>					
					<Navigation/>	
					<p>Main Component</p>
					{props.children}
				</div>
			</div>
		</div>	
	);
}
