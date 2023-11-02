import { useState } from "react";
import { Link } from "react-router-dom";
import googlelogin from "./img/google-login.png";
import "./Auth.css";

import { GoogleLogin } from "@react-oauth/google";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <h1 className="formHead">Sign in to your account</h1>
          <div className="login-input">
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleInputChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="login-checkbox">
            <div className="checkBoxDiv">
              <input type="checkbox" name="remember-me" id="" />
              <span>Remember me</span>
            </div>
            <a href="">Forgot password?</a>
          </div>
          <div className="login-button">
            <button className="submit-button" onClick={handleSubmit}>
              Sign In
            </button>
            <button className="google-login" onClick={""}>
              <div>
                <div>
                  <img src={googlelogin} alt="Google Login" />
                  Sign in with Google
                </div>
              </div>
            </button>
          </div>
          <button className="GoogleLogin">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </button>
          <div className="switch-option">
            <p>
              Don't have an account?<a href="">Sign up</a>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
