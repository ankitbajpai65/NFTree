import { useState } from "react";
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
        <div className="head-part">
          <h1>Create Free Account</h1>
          <p>Clarity gives you the blocks and components you need</p>
          <p>to create a truly professional website.</p>
        </div>
        <div className="login-box">
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
            <div>
              <input type="checkbox" name="terms-and-condition" id="" />
              <span>I agree with the Terms & Conditions of Clarity</span>
            </div>
          </div>
          <div className="login-button">
            <button className="submit-button" onClick={handleSubmit}>
              Sign In
            </button>
            <button className="google-login" onClick={handleSubmit}>
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
              Already have an account?<a href="">Sign In</a>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
