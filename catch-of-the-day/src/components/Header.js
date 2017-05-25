import React from 'react';

//old way to create a function: 
// function Header () {
// }



//if the component is going to be static, no need to make it a react component, rather
//declare a function and have your code returned in that function.

//pass in props
const Header = (props) => {

	return (
		<header className = "top">
			<h1>
				Catch 
				<span className="ofThe">
					<span className="of">Of</span>
					<span className="the">the </span> 
				</span>
				Day
			</h1>
		
			<h3 className="tagline"><span>{props.tagline}</span></h3>
		</header>	
	)

}	
	
export default Header;