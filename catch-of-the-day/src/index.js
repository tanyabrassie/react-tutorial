// let's go!

//load everything from react file into react variable 
import React from 'react';

//import specific render method from react Dom, hence curly brackets
import { render } from 'react-dom';

//import specific methods from react-router module
import { BrowserRouter, Match, Miss } from 'react-router';



//import cSS File
import './css/style.css';

import App from './components/App.js';

//import the storePicker component from its location
import StorePicker from './components/StorePicker.js';
//use render method, give it which component and where to render it (the div with the main ID)

import NotFound from './components/NotFound.js';

const Root  = () => {
	return (
		<BrowserRouter>
			<div>
				{ /*when i am exactly on the homepage which component should i show? */}
				<Match exactly pattern="/" component={StorePicker} />
				<Match exactly pattern="/store/:storeId" component={App} />
				<Miss component={NotFound} />
			</div>

		</BrowserRouter>
	)
}



render(<Root/>, document.querySelector('#main'));


//creating routes!


