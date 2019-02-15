import styled from 'styled-components';

export const Card = styled.li`
  list-style-type: none;
  padding: 5px;
  border: 1px solid red;
  margin: 5px;
  width: 30%;
  float: left;
`;

export const GenCaption = styled.h1`
  font-size: 12px !important;
  font-weight: 800 !important;
  line-height: 1.3333333333333333em !important;
  width: 75%;
  color: #714e33;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
`;

export const SpecCaption = styled.h1`
  font-size: 16px !important;
  font-weight: 800 !important;
  line-height: 1.375em !important;
  word-wrap: break-word !important;
  width: 75%;
  color: #484848 !important;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
`;

export const Price = styled.h1`
  font-size: 14px !important;
  font-weight: 400 !important;
  line-height: 1.2857142857142858em !important;
  width: 30%;
  color: #484848 !important;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
`;

export const Rating = styled.h1`
  font-size: 12px !important;
  font-weight: 400 !important;
  line-height: 1.33333em !important;
  width: 50%;
  color: #484848 !important;
  overflow-wrap: break-word !important;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
`;

export const LeadImage = styled.img `
  width: 100%;
  border-radius: 3px;
`;

export const StarImage = styled.img `
  max-width:  20%;
  max-height: 20%;
  font-size: 9px !important;
  margin-right: 1px !important;
  display: inline-block !important;
`;
