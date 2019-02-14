import React from 'react';
import styled from 'styled-components';
import stars from './Assets/stars.jpeg';

const Card = styled.li`
  list-style-type: none;
  padding: 5px;
  border: 1px solid red;
  margin: 5px;
  width: 30%;
  float: left;
`;

const GenCaption = styled.h1`
  font-size: 12px !important;
  font-weight: 800 !important;
  line-height: 1.3333333333333333em !important;
  width: 75%;
  color: #714e33;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
`;

const SpecCaption = styled.h1`
  font-size: 16px !important;
  font-weight: 800 !important;
  line-height: 1.375em !important;
  word-wrap: break-word !important;
  width: 75%;
  color: #484848 !important;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
`;

const Price = styled.h1`
  font-size: 14px !important;
  font-weight: 400 !important;
  line-height: 1.2857142857142858em !important;
  width: 30%;
  color: #484848 !important;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
`;

const Rating = styled.h1`
  font-size: 12px !important;
  font-weight: 400 !important;
  line-height: 1.33333em !important;
  width: 50%;
  color: #484848 !important;
  overflow-wrap: break-word !important;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
`;

const LeadImage = styled.img `
  width: 100%;
  border-radius: 3px;
`;

const StarImage = styled.img `
  max-width:  20%;
  max-height: 20%;
  font-size: 9px !important;
  margin-right: 1px !important;
  display: inline-block !important;
`;

const Item = (props) => (
  <Card>
    <div>
      <LeadImage 
        src = {props.list.photoID} 
      />
    </div>
    <GenCaption>
      <span>{props.list.genCaption.split(' ').slice(0,2).join(' ')} . </span>
      <span>{props.list.genCaption.split(' ').slice(2,4).join(' ')}</span>
    </GenCaption>
    <SpecCaption>{props.list.specCaption.split(' ').slice(0,4).join(' ')}</SpecCaption>
    <Price> ${props.list.price} </Price>
    <Rating>
      <StarImage
        src = {stars} 
      />
      <span>{props.list.numReviews} reviews</span> 
    </Rating>
  </Card>
)

export default Item;
