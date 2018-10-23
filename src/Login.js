import React, {Component} from 'react';

export default class Login extends Component {
  state = {
    username: "",
    password: "",
    keepLoggedIn: false
  }

  handleLogIn(e) {
    e.preventDefault()
    console.log("LogIn was submitted")
    console.log(this.state)
    return this.state
  }
  
  render() {
    return (
      <form onSubmit={e => this.handleLogIn(e)}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" value={this.state.username} onChange={e => this.setState({username: e.target.value})} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={this.state.password} onChange={e => this.setState({password: e.target.value})}/>
        </div>
        <div>  
          <input type="checkbox" name="keepLoggedIn" id="keepLoggedIn" checked={this.state.keepLoggedIn} onChange={e => this.setState({keepLoggedIn: !this.state.keepLoggedIn})}/>
          <label htmlFor="keepLoggedIn">Keep Logged in</label>
        </div>
        <div>
          <input type="submit" value="Log In" />
        </div>  
      </form>
    )
  }
}