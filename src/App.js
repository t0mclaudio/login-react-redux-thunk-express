import React, { Component } from 'react';
import Login from './Login';
import Profile from './Profile';

class App extends Component {
  state = {
    isAuthenticated: false
  }
  render() {
    return (
      <div className="App">
        {this.state.isAuthenticated ? <Profile /> : <Login /> }
      </div>
    );
  }
}

export default App;
