import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOutput.js';

class App extends Component {
  state = {
    user: [
      {username: 'Armen'},
      {username: 'John'}
    ]
  }

  changeNameHandler = (event) => {
    this.setState({
      user: [
        {username: event.target.value},
        {username: event.target.value}
      ]
    })
  }

  render() {
    return (
      <div className="App">
      <UserOutput username={this.state.user[0].username}/>
      <UserOutput username={this.state.user[1].username}/>
      <UserInput changed={this.changeNameHandler} currentName={this.state.user[0].username}/>
      </div>
    );
  }
}

export default App;
