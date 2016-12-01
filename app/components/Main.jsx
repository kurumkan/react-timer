var React = require("react");
var Navigation = require('Navigation');
module.exports = (props)=>{
	return (
		<div>			
			<div>							
				<div>					
					<Navigation/>	
					<p>Hello world!!!</p>
					{props.children}
				</div>
			</div>
		</div>	
	);
}
