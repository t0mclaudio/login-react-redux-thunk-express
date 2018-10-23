import React, { Component } from 'react';
import { connect } from 'react-redux';
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
        {this.state.isAuthenticated ? 
        <Profile handleLogOut={e => this.handleLogOut()} /> : 
        <Login /> }
      </div>
    );
  }
}

const MapPropsToState = state => ({
  username: state.username,
  password: state.password,
  keepLoggedIn: state.keepLoggedIn,
  isAuthenticated: state.isAuthenticated
})

export default connect(MapPropsToState)(App);
