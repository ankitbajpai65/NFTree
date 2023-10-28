import { useState } from "react";
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

  const handleGoogleLogin = () => {
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        console.log(credentialResponse);
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />;
  };

  return (
    <>
      <div className="login-container">
        <div className="head-part">
          <h1>Sign in to your account</h1>
          <p>Clarity gives you the blocks and components you need</p>
          <p>to create a truly professional website.</p>
        </div>
        <div className="login-box">
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
            <div>
              <input type="checkbox" name="remember-me" id="" />
              <span>Remember me</span>
            </div>
            <a href="">Forgot password?</a>
          </div>
          <div className="login-button">
            <button className="submit-button" onClick={handleSubmit}>
              Sign In
            </button>
            <button className="google-login" onClick={handleGoogleLogin}>
              <div>
                <div>
                  <img src={googlelogin} alt="Google Login" />
                  Sign in with Google
                </div>
              </div>
            </button>
          </div>
          <div className="switch-option">
            <p>
              Don't have an account?<a href="">Sign up</a>{" "}
            </p>
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
