import React from 'react'; 
//import price formatting helper function
import { formatPrice } from '../helpers';


class Fish extends React.Component {

	render () {

		//some data noodling so we don't have to keep typoing .props.details
		const details = this.props.details;
		const isAvailable = details.status === 'available';

		const buttonText = isAvailable ? 'Add to order' : 'Sold Out!';
		const index = this.props.index;
		
		return (
			<li className="menu-fish">
				<img src={details.image} alt={details.name} />
				<h3 className="fish-name">{details.name}
					<span className="price">{formatPrice(details.price)}</span>
				 </h3>
				 <p>{details.desc}</p>
				 <button onClick={() => this.props.addToOrder(index)} disabled={!isAvailable}>{buttonText}</button>
			</li>
		)		
	}
}

export default Fish;