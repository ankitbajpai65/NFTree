import React from "react";
import "./Auth.css";

export default function ForgetPassword() {
  return (
    <>
      <div className="form-container" style={{ height: "100vh" }}>
        <div className="form-box forgetPwdForm" style={{ margin: "35px 0px" }}>
          <h2 className="formHead">Forget Password</h2>
          <p>Enter your email to reset your password</p>
          <br />
          <br />
          <div className="form-input">
            <input type="text" name="name" placeholder="Enter your email" />
          </div>
          <br />
          <div className="form-button">
            <button onClick={() => {}}>Reset Password</button>
          </div>
        </div>
      </div>
    </>
  );
}
