import React, {Component} from 'react';

export default class Login extends Component {
  state = {
    username: "",
    password: "",
    keepLoggedIn: false
  }
  
  render() {
    return (
      <form>
        <input type="text" name="username" value={this.state.username}/>
        <input type="password" name="password" value={this.state.password}/>
        <input type="checkbox" name="keepLoggedIn" checked={this.state.keepLoggedIn}/>
        <input type="submit" value="Log In" />
      </form>
    )
  }
}