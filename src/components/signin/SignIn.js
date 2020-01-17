import React, { Component } from 'react'
import { Redirect } from "react-router-dom";

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    // const token = localStorage.getItem("token")

    // let isSignIn = true
    // if (token == null) {
    //   isSignIn = false;
    // }

    
    this.state = {
      username: "",
      password: "",
      isSignIn: false
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleClick = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    // logic
    if (username === "zaid" && password === "zaid") {
      localStorage.setItem("token", "zaiddfdfdsf")
      this.setState({ isSignIn: true });
    }
   
  }



  render() {
    if (this.state.isSignIn) {
      return <Redirect to="/" />
    }

    return (
      <div>


        <br/><br/>
        <div className="ui container center aligned">

          <div className="ui image">
            <img src="adidas-logo.jpg" />
          </div>

          <div className="ui segment">
          <div className="ui form">
            <h1>Login Here Please</h1> <br/>
              <div className="field">
                <label>User Name</label>
                <input
                 type="text"
                 placeholder="Enter User Name"
                 name="username"
                 value={this.state.username}
                 onChange={this.handleChange}
                />
              </div> <br/>
              <div className="field">
                <label>Password</label>
                <input
                 type="password"
                 placeholder="Enter Password"
                 name="password"
                 value={this.state.password}
                 onChange={this.handleChange}
                />
              </div> <br/>
              <button onClick={this.handleClick} className="ui basic black button">Sign In</button>
          </div>
        </div>
        </div>


     
        





      </div>
    )
  }
}
