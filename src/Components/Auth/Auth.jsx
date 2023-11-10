import { useState } from "react";
import { useNavigate } from "react-router-dom";
import googlelogin from "./img/google-login.png";
import "./Auth.css";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import { useAuth } from "../../Contexts/AuthContext";

const Auth = () => {
  const navigate = useNavigate();
  const [isRegistered, setIsRegistered] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cnfPassword: "",
  });

  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const data = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        setIsLoggedIn(true);
        navigate("/");
        console.log(data.data);
        setAuthUser({ name: data.data.name, email: data.data.email });
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <>
      <div className="form-container" style={{ minHeight: "700px" }}>
        <div className="form-box">
          <h1 className="formHead">
            {isRegistered ? "Sign In To Your Account" : "Create Free Account"}
          </h1>
          <div className="form-input">
            {!isRegistered && (
              <input
                type="text"
                name="name"
                placeholder="Enter Full Name"
                value={formData.name}
                onChange={handleInputChange}
              />
            )}
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
            {!isRegistered && (
              <input
                type="password"
                name="cnfPassword"
                placeholder="Confirm Password"
                value={formData.cnfPassword}
                onChange={handleInputChange}
              />
            )}
          </div>
          <div className="form-checkbox">
            <div className="checkBoxDiv">
              <input
                type="checkbox"
                name={isRegistered ? "remember-me" : "terms-and-condition"}
                id=""
              />
              <span>
                {isRegistered ? (
                  "Remember me"
                ) : (
                  <p>
                    {"I agree with the "}
                    <a href="#">Terms & Conditions</a>
                    {" of NFTree"}
                  </p>
                )}
              </span>
            </div>
            {isRegistered && <a href="">Forgot password?</a>}
          </div>
          <div className="form-button">
            <button className="submit-button" onClick={handleSubmit}>
              {isRegistered ? "Sign in" : "Sign up"}
            </button>
            {isRegistered && (
              <button className="googleLoginBtn" onClick={() => login()}>
                <div>
                  <div>
                    <img src={googlelogin} alt="Google Login" />
                    Sign in with Google
                  </div>
                </div>
              </button>
            )}
          </div>
          <div className="switch-option">
            <span>
              {isRegistered
                ? "Don't have an account?"
                : "Already have an account?"}{" "}
            </span>
            <a
              onClick={() => setIsRegistered(!isRegistered)}
              style={{ cursor: "pointer" }}
            >
              {isRegistered ? "Signup" : "Signin"}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
