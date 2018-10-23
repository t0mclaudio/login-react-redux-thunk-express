import React, { Component } from 'react';
import Login from './Login';
import ProfilePage from './Profile';

class App extends Component {
  state = {
    isAuthenticated: false
  }
  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;
