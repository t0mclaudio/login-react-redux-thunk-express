import React, {Component} from 'react';

export default class Login extends Component {
  handleLogIn(e) {
    e.preventDefault()
    this.props.handleLogIn()
  }

  toggleKeepLoggedIn(e) {
    this.handleLogIn(e)
  }
  
  render() {
    return (
      <form onSubmit={e => this.handleLogIn(e)}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" value={this.props.data.username} onChange={e => this.setState({username: e.target.value})} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={this.props.data.password} onChange={e => this.setState({password: e.target.value})}/>
        </div>
        <div>  
          <input type="checkbox" name="keepLoggedIn" id="keepLoggedIn" checked={this.props.data.keepLoggedIn} onChange={e => this.toggleKeepLoggedIn(e)}/>
          <label htmlFor="keepLoggedIn">Keep Logged in</label>
        </div>
        <div>
          <input type="submit" value="Log In" />
        </div>  
      </form>
    )
  }
}