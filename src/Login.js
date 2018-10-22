import React, {Component} from 'react';

export default class Login extends Component {
  state = {
    username: "tom",
    password: null,
    keepLoggedIn: false
  }
  render() {
    return (
      <form>
        <input type="text" value={this.state.username} />
        <input type="password" value={this.state.password} />
        <input type="checkbox" checked={this.state.keepLoggedIn} />
        <button type="submit">Login</button>
        
      </form>
    )
  }
}