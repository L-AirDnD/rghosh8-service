import React from 'react';
import ReactDOM from 'react-dom';

import getThingsToDo from '../lib/getThingsToDo.js';
import List from './ThingsList.jsx';
import H1 from '../styles/ThingsApp.jsx';



class ThingsApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thingsToDoTable: [],
      thingsToDoID:0,
    };
  }

  componentDidMount() {
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
        <div><H1>Things to do near this home</H1></div>
        <div>
          <List table={this.state.thingsToDoTable} />
        </div>
      </div>
    );
  }
}

export default ThingsApp;
