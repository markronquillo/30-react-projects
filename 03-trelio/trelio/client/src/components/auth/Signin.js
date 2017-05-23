import React, { Component } from 'react';

class Signin extends Component {
  render() {
    return (
      (
        <div className="auth-wrapper">
          <div className="auth-form-wrapper">
            <h1 className="logo"> Trelio </h1>
            <div className="auth-form">
              <div className="form-section">
                <input type="text" 
                  placeholder="Enter your username"
                  />
              </div>
              <div className="form-section">
                <input type="password"
                  placeholder="Enter your password" />
              </div>
              <div className="form-control">
                <button className="button primary"> SIGN IN </button>
              </div>
              <div className="form-footer">
                <p> Don't have an account? <a href="$"> Register </a> </p>
              </div>
            </div>
          </div>
        </div>
      )
    ) 
  } 
};

export default Signin;