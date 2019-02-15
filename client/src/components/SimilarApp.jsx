import React from 'react';
import ReactDOM from 'react-dom';

import getSimilarListing from '../lib/getSimilarListing.js';
import List from './SimilarList.jsx';
import H1 from '../styles/SimilarApp.jsx';


class SimilarApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      similarListingTable: [],
      similarListingID: 0,
    };
  }

  componentDidMount() {
    getSimilarListing()
      .then((listingData) => {
        this.setState({
          similarListingTable: listingData.data,
          similarListingID: listingData.data.length,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <H1>Similar listings</H1>
        <List table={this.state.similarListingTable} />
      </div>
    );
  }
}

export default SimilarApp;
