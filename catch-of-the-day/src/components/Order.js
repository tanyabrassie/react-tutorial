import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component {

	//rather than putting all the code to render the individual order items in the JSX below,
	//we'll create a renderOrder function that's then called below that will construct each order item.
	renderOrder (key) {
		const fish = this.props.fishes[key];
		const count = this.props.order[key];
	}

	render () {

		//get an array of all of the keys 
		const orderIds = Object.keys(this.props.order);
		//along with orderId's we want the total 
		//using the reduce method which loops over an array and adds up things and returns a new array
		const total = orderIds.reduce((prevTotal, key) => {
			
			//FIRST FIND CORRESPONDING FISH
			const fish = this.props.fishes[key];
			//THEN GET HOW MANY FISHES WERE PURCHASED OF THAT SPECIFIC FISH
			const count = this.props.order[key];
			
			//CHECK IF FISH IS AVAILABLE
			const isAvailable = fish && fish.status === 'available';
			
			//IF THE FISH IS AVAILABLE, GET THE PREVIOUS TOTAL, AND MULTIPLE THE NUMBER OF FISH BY THE PRICE
			//AND ADD THIS TO THE PREVIOUS TOTAL

			if(isAvailable) {
				return prevTotal + (count * fish.price || 0); 
			}

			//IF THE FISH IS NOT AVAILABLE, SIMPLY RETURN THE PREVIOUS TOTAL
			return prevTotal;
		}, 0);
		
		return (
			<div className="order-wrap">
				<h2>Your Order</h2>
				<ul className="order"> 
					{orderIds.map(this.renderOrder)}
					<li className="total">
						<strong>Total:</strong>
						{formatPrice(total)}
					</li>	
				</ul>
			</div>
		)
	}
}

export default Order;