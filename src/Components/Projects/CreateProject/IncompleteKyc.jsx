import React from "react";
import { useNavigate } from "react-router-dom";
import "./CreateProject.css";

export default function IncompleteKyc() {
  const navigate = useNavigate();
  return (
    <>
      <div className="form-container" style={{ height: "100vh" }}>
        <div className="form-box " style={{ margin: "35px 0px" }}>
          <h2 className="formHead">
            Oops! Your KYC Appears to be Incomplete or Unverified
          </h2>
          <p>Click below button to go to following page</p>
          <br />
          <div className="form-button">
            <button
              type="submit"
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </button>
            <button
              type="submit"
              onClick={() => {
                navigate("/profile", { state: "kyc" });
              }}
            >
              KYC
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
