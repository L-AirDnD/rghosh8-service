import React from 'react';
import ReactDOM from 'react-dom';

import getSimilarListing from '../lib/getSimilarListing.js';
import getThingsToDo from '../lib/getThingsToDo.js';

import Item from './Item.jsx';
import List from './List.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      similarListingTable: [],
      thingsToDoTable: [],
      similarListingID: 0,
      thingsToDoID:0,
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
    getThingsToDo()
      .then((toDoData) => {
        this.setState({
          thingsToDoTable: toDoData.data,
          thingsToDoID: toDoData.data.length,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Similar Listing</h1>
        <List table={this.state.similarListingTable} />
        <div>
          <h1>Things To Do</h1>
          <List table={this.state.thingsToDoTable} />
        </div>
      </div>
    );
  }
}

export default App;
