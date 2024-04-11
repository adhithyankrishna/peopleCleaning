import React from "react";
import "../styles/Register.css";
import girl from "../asset/images/girl.png";
import google from "../asset/images/search.png";

const Register = () => {
  return (
    <div className="Register">
      <div className="form-group">
        <div className="image-div">
          <span></span>
          <img src={girl} alt="girl__image" />
        </div>
        <div className="form-container">
          <h1 className="reg-title">
            Welcome to People cleaning service and Facility Management
          </h1>
          <form className="form">
            <div className="feild">
              <label>Name</label>
              <input type="text" name="name" className="input" />
            </div>
            <div className="feild">
              <label>Email</label>
              <input type="text" name="email" className="input" />
            </div>
            <div className="feild">
              <label>Phone No:</label>
              <input type="number" name="phone" className="input" />
            </div>
            <div className="feild">
              <label>Address</label>
              <input
                type="textarea"
                name="address"
                className="input"
                id="address"
              />
            </div>
            <div className="feild">
              <label>Password</label>
              <input type="password" name="password" className="input" />
            </div>
            <div className="feild">
              <label>Re-type Password</label>
              <input type="password" name="password" className="input" />
            </div>

            <div className="feild">
              <button>Submit</button>
            </div>
            <div className="gsign">
              <div> Sign in with</div>
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

export default Register;
