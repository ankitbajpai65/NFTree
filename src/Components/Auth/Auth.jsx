import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import { login, register, googleLogin } from "../../api/userApi";

import googlelogo from "./img/google-login.png";
import "./Auth.css";

const Auth = () => {
  const navigate = useNavigate();
  const [isRegistered, setIsRegistered] = useState(true);
  const [isError, setIsError] = useState("");
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

  useEffect(() => {
    authFunctions();
  }, [isError]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    checkValidation();
    authFunctions();
  };

  const authFunctions = async () => {
    handleErrorMessage();
    let apiRespond;
    if (isError == null) {
      apiRespond = await (isRegistered ? login(formData) : register(formData));

      try {
        isRegistered
          ? handleErrorMessage(apiRespond.response.data.detail)
          : handleErrorMessage(apiRespond.response.data.username[0]);
      } catch (error) {
        if (!isRegistered) {
          setIsRegistered(true);
          setFormData({
            name: "",
            email: "",
            password: "",
            cnfPassword: "",
          });
          setTimeout(() => {
            document.getElementsByClassName("formHead")[0].innerText =
              "Login to Continue";
          }, 1);
        } else {
          setIsLoggedIn(true);
          navigate("/");
        }
      }
    }
  };

  const handleGoogleLogin = googleLogin();

  /////////////////////////////////////////////
  //////////// Validation /////////////////////
  ////////////////////////////////////////////

  const validEmail = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

  const checkValidation = () => {
    var customErrorMessage;
    if (
      !isRegistered &&
      (20 < formData.name.length || formData.name.length < 5)
    ) {
      customErrorMessage = "Name is required and should be 5-20 Characters";
    } else if (!validEmail.test(formData.email)) {
      customErrorMessage = "Please Enter Valid Email";
    } else if (formData.password.length < 8) {
      customErrorMessage = "password should be minimun 8 character long";
    } else if (!isRegistered && formData.password != formData.cnfPassword) {
      customErrorMessage = "Unmatched Password and Confirm Password";
    } else if (
      !isRegistered &&
      !document.getElementById("tccheckbox").checked
    ) {
      customErrorMessage = "Please Accept Terms and Conditions first";
    } else {
      customErrorMessage = null;
    }

    setIsError(customErrorMessage);
  };

  ///////handle Validation
  const handleErrorMessage = (newError = isError) => {
    document.getElementsByClassName("errorText")[0].innerText = newError;
    setTimeout(() => {
      document.getElementsByClassName("errorText")[0].innerText = "";
    }, 4000);
  };

  /////////////////////////////////////////////
  //////////// Validation End /////////////////
  ////////////////////////////////////////////

  return (
    <>
      <div className="form-container" style={{ minHeight: "700px" }}>
        <form className="form-box" onSubmit={handleSubmit}>
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
                onInput={(e) =>
                  (e.target.value = e.target.value.replace(/[^A-Za-z ]/g, ""))
                }
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
          <span className="errorText">{}</span>
          <div className="form-checkbox">
            <div className="checkBoxDiv">
              <input type="checkbox" id="tccheckbox" />

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
          <div className="form-button" style={{ marginBottom: "30px" }}>
            <button type="submit" className="submit-button">
              {isRegistered ? "Sign in" : "Sign up"}
            </button>
            {isRegistered && (
              <button className="googleLoginBtn" onClick={handleGoogleLogin}>
                <div>
                  <div>
                    <img src={googlelogo} alt="Google Login" />
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
        </form>
      </div>
    </>
  );
};

export default Auth;
