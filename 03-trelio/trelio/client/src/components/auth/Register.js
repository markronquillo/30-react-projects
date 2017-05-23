import React, { Component } from 'react';

class Register extends Component {
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
                <input type="text" 
                  placeholder="Enter your email"
                  />
              </div>
              <div className="form-section">
                <input type="password"
                  placeholder="Enter your password" />
              </div>
              <div className="form-control">
                <button className="button primary"> REGISTER </button>
              </div>
              <div className="form-footer">
                <p> Already have an account? <a href="#"> Sign in </a> </p>
              </div>
            </div>
          </div>
        </div>
      )
    ) 
  } 
};

export default Register;