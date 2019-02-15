import React from 'react';
import Item from './ThingsItem.jsx';
import Collection from '../styles/ThingsList.jsx';

class ThingsList extends React.Component {
	constructor(props) {
    super(props);
  }
	render() {
		return (
			<Collection>
				{this.props.table.map((row) => 
					<Item key ={row.toString()} list = {row} />
				)}      
 			</Collection>
		);
	}
}

export default ThingsList;
