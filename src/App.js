import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import Profile from './Profile';

class App extends Component {
  state = {
    isAuthenticated: false
  }

  handleChange(e) {
    this.props.dispatch({
      type: "CHANGE", 
      name: e.target.name, 
      value: e.target.value
    })
  }

  handleLogOut () {
    this.setState({isAuthenticated: false})
  }

  handleLogIn() {
    console.log("I've been clicked")
  }


  render() {
    return (
      <div className="App">
        {this.state.isAuthenticated ? 
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
