import { useState } from "react";
import { Link } from "react-router-dom";
import googlelogin from "./img/google-login.png";
import "./Auth.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
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
          <h1 className="formHead">Create Free Account</h1>
          <div className="login-input">
            <input
              type="text"
              name="name"
              placeholder="Enter Full Name"
              value={formData.name}
              onChange={handleInputChange}
            />
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
              <input type="checkbox" name="terms-and-condition" id="" />
              <span>I agree with the Terms & Conditions of NFTree</span>
            </div>
          </div>
          <div className="login-button">
            <button className="submit-button" onClick={handleSubmit}>
              Sign up
            </button>
            <button className="googleLoginBtn" onClick={handleSubmit}>
                  <img src={googlelogin} alt="Google Login" />
                  Sign in with Google
            </button>
            <div>
              <span>Already have an account? </span>
              <Link to='/signin'>Signin</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
