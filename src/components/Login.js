import React from "react";
import "../styles/Login.css";
import google from "../asset/images/search.png";

const Login = () => {
  return (
    <div className="Register">
      <div className="form-group">
        <div className="form-container">
          <h1 className="reg-title">Welcome Back</h1>
          <form className="form">
            <div className="feild">
              <label>Name or Email</label>
              <input type="text" name="name" className="input" />
            </div>
            <div className="feild">
              <label>Password</label>
              <input type="password" name="password" className="input" />
            </div>
            <div className="feild">
              <button>Login</button>
            </div>
            <div className="gsign">
              <div> Login in with</div>
              <button className="googlebtn">
                <img src={google} alt="google" className="google" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
