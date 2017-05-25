
import React from 'react';
import { getFunName } from '../helpers';

//start a component
class StorePicker extends React.Component { 

	//one way of making all methods available of this. You'd need to repeat it for each custom method.
	// constructor () {
	// 	super();
	// 	this.goToStore = this.goToStore.bind(this);
	// }

//creating method called go to store
	goToStore (event) {
		event.preventDefault();
		console.log("You changed URL");
		console.log(this.storeInput.value); 
		//first grab the text from the box
		//second transitio from / to /store/:storeid
		const storeId = this.storeInput.value;
		console.log(`Going to ${storeId}`);

		this.context.router.transitionTo(`/store/${storeId}`);
	}
//needs at least one method, the render method
	
	render () {
		//return JSX, can only return one parent element 
		return (
			<form className="store-selector" onSubmit={this.goToStore.bind(this)}>
		{ /* this is a comment in jsx */}
				<h2>Please Enter a Store</h2>

				<input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} />
					{ /* the ref property contains a function that stores a reference to the element on the component */}
				<button type="submit">Visit Store </button>
			</form>
		)
	}
}

StorePicker.contextTypes = {
	router: React.PropTypes.object
}

export default StorePicker;