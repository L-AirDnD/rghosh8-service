import React from 'react';

const Item = (props) => (
  <li>
    <div>{props.list.photoID}</div>
    <div>{props.list.genCaption}</div>
    <div>{props.list.specCaption}</div>
    <div>{props.list.price}</div>
    <div>{props.list.rating}</div>
  </li>
)

export default Item;
