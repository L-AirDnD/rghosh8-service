import React from 'react';
import stars from './Assets/stars.jpeg';

import { Card, GenCaption, SpecCaption, Price, Rating, LeadImage, StarImage } from '../styles/ThingsItem.jsx';


class ThingsItem extends React.Component {
	constructor(props) {
    super(props);
  }

	render() {
		return (
		<Card>
      <div>
        <LeadImage 
          src = {this.props.list.photoID} 
        />
      </div>
      <GenCaption>
        <span>{this.props.list.genCaption.split(' ').slice(0,2).join(' ')} . </span>
        <span>{this.props.list.genCaption.split(' ').slice(2,4).join(' ')}</span>
      </GenCaption>
      <SpecCaption>{this.props.list.specCaption.split(' ').slice(0,4).join(' ')}</SpecCaption>
      <Price> ${this.props.list.price} </Price>
      <Rating>
        <StarImage
          src = {stars} 
        />
        <span>{this.props.list.numReviews} reviews</span> 
      </Rating>
    </Card>
		);
	}
}


// const Item = (props) => (
//   <Card>
//     <div>
//       <LeadImage 
//         src = {props.list.photoID} 
//       />
//     </div>
//     <GenCaption>
//       <span>{props.list.genCaption.split(' ').slice(0,2).join(' ')} . </span>
//       <span>{props.list.genCaption.split(' ').slice(2,4).join(' ')}</span>
//     </GenCaption>
//     <SpecCaption>{props.list.specCaption.split(' ').slice(0,4).join(' ')}</SpecCaption>
//     <Price> ${props.list.price} </Price>
//     <Rating>
//       <StarImage
//         src = {stars} 
//       />
//       <span>{props.list.numReviews} reviews</span> 
//     </Rating>
//   </Card>
// )

export default ThingsItem;
