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
        <div>
          <label for="username">Username</label>
          <input type="text" name="username" value={this.state.username} onChange={e => this.setState({username: e.target.value})} />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" name="password" value={this.state.password} onChange={e => this.setState({password: e.target.value})}/>
        </div>
        <div>  
          <input type="checkbox" name="keepLoggedIn" checked={this.state.keepLoggedIn} onChange={e => this.setState({keepLoggedIn: !this.state.keepLoggedIn})}/>
          <label for="keepLoggedIn">Keep Logged in</label>
        </div>
        <div>
          <input type="submit" value="Log In" />
        </div>  
      </form>
    )
  }
}