import React, { Component } from 'react';
import Login from './Login';
import Profile from './Profile';

class App extends Component {
  state = {
    isAuthenticated: false
  }

  handleLogOut () {
    this.setState({isAuthenticated: false})
  }
  
  render() {
    return (
      <div className="App">
        {this.state.isAuthenticated ? <Profile handleLogOut={e => this.handleLogOut()} /> : <Login /> }
      </div>
    );
  }
}

export default App;
