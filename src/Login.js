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
          <label> Username
            <input type="text" name="username" value={this.state.username}/>
          </label>
        </div>
        <div>
          <label> Password
            <input type="password" name="password" value={this.state.password}/>
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="keepLoggedIn" checked={this.state.keepLoggedIn}/>
            Keep logged in
          </label>
        </div>
        <div>
          <input type="submit" value="Log In" />
        </div>  
      </form>
    )
  }
}