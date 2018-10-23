import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import Profile from './Profile';

class App extends Component {
  handleChange(e) {
    this.props.dispatch({
      type: "CHANGE", 
      name: e.target.name, 
      value: e.target.value
    })
  }

  handleLogOut () {
    this.props.dispatch({
      type: "LOGOUT"
    })
  }

  handleLogIn() {
    this.props.dispatch({
      type: "LOGIN"
    })
  }


  render() {
    return (
      <div className="App">
        {this.props.isAuthenticated ? 
        <Profile handleLogOut={e => this.handleLogOut()} /> : 
        <Login 
          data={this.props} 
          handleLogIn={data => this.handleLogIn(data) } 
          handleChange={e => this.handleChange(e)} /> }
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
