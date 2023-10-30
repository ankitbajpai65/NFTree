import { useState } from "react";
import { Link } from "react-router-dom";
import googlelogin from "./img/google-login.png";
import "./Auth.css";

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
            <button className="googleLoginBtn" onClick={handleSubmit}>
              <img src={googlelogin} alt="Google Login" />
              <span>Sign in with Google</span>
            </button>
            <div>
              <span>Don't have an account? </span>
              <Link to='/signup'>Signup</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
