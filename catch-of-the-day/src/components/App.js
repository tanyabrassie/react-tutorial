import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Fish from './Fish';
import Order from './Order';
import sampleFishes from '../sample-fishes';

class App extends React.Component {

//use constructor method to create state
	constructor() {
		super();

		//bind add fish method to App component 
		this.loadSamples = this.loadSamples.bind(this);
		this.addFish = this.addFish.bind(this);
		this.addToOrder = this.addToOrder.bind(this);
		//assign the state for this app
		this.state = {
			fishes: {},
			order: {}
		};
	}

	addFish(fish) {
		
		//first, take a copy of the state
		//this.state.fishes is the existing fishes state. The ... takes every item from the object and puts it in new fishes state
		const fishes = {...this.state.fishes}; //... = the spread operator

		//add in new fish, new fish key will be using timestamp as the key
		//create the timestamp using date.now();

		const timestamp = Date.now();

		//take fishes that you created, add a new property which using the timestamp and then set the fish that we are passing in, equal to it  
		fishes[`fish-${timestamp}`] = fish;

		//set the new updated state! 
		//we don't want to update the entire state, just the fishes object so we'll set the old fishes to thew new fishes
		this.setState( {fishes: fishes});
	}


	loadSamples() {
		this.setState({
			fishes: sampleFishes
		});
	}

	addToOrder (index) {
		//first take copy of state
		const order = {...this.state.order}; //object spread ... 
		//update or add the new number of fish ordered
		//this checks if we have an existing order and adds one to it, or just makes it one if no orde for that fish exists
		order[index] = order[index] + 1 || 1;
		
		//update state
		this.setState({order: order});

	}

	render () {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market" />
					<ul className="list-of-fishes">
						{
							Object.keys(this.state.fishes)
							//then us op over the array created by Object.keys
							.map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />)
						}
					</ul>
				</div>
				<Order fishes={this.state.fishes} order={this.state.order} />
			{ /* pass the addFish method to the inventory component */}
				<Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
			</div>
		)
	}
}

export default App;
// function render () {

// }