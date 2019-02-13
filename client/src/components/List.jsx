import React from 'react';
import Item from './Item.jsx';
import styled from 'styled-components';

const Collection = styled.ul`
	list-style-type: none;
	padding: 5px;
`;

const List = (props) => (
	<Collection>
		{props.table.map((row) => <Item key ={row.toString()} list = {row} />)}      
  </Collection>
)

export default List;
