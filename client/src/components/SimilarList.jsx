import React from 'react';
import Item from './SimilarItem.jsx';
import Collection from '../styles/SimilarList.jsx';

class SimilarList extends React.Component {
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

export default SimilarList;
