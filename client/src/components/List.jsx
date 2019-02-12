import React from 'react';
import Item from './Item.jsx';

const List = (props) => (
	<ul className="list">
		{props.table.map((row) => <Item key ={row.toString()} list = {row} />)}      
  </ul>
)

export default List;
