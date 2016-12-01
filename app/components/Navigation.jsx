var React = require('react');
var {Link, IndexLink} = require("react-router");

module.exports = React.createClass({
	render: function(){
		return (
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
						<li className="menu-text">
							React Timer App
						</li>						
						<li>
							<IndexLink to="/" activeClassName="active" >Timer</IndexLink>			
						</li>
						<li>
							<Link to="/countdown" activeClassName="active" >Countdown</Link>			
						</li>
					</ul>
				</div>
				<div className="top-bar-right">
					<ul className="menu">
						<li className="menu-text">
							Created By <a href="https://github.com/kurumkan" target="_blank">Artur Arsalanov</a>
						</li>
					</ul>					
				</div>
			</div>
		);
	}	
})