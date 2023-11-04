import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "../Home/Home";
import Kyc from "../Kyc/Kyc";
import CreateProject from "../Projects/CreateProject";
import Auth from "../Auth/Auth";
import { useAuth } from "../../Contexts/AuthContext";
import { googleLogout } from "@react-oauth/google";
import logo1 from "/logo_colored.png";
import "../Navbar/Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();

  function googleLogoutBtn() {
    googleLogout();
    setAuthUser("");
    setIsLoggedIn(false);
    navigate("/");
  }

  return (
    <>
      <div style={{ height: "0px" }}>
        <nav>
          <div id="navbarLogo">
            <img src={logo1} onClick={() => navigate("/")} alt="" />
          </div>
          <div>
            <ul className="navItems">
              <li>
                <h4 className="active" onClick={() => navigate("/")}>
                  Home
                </h4>
              </li>
              <li className="submenus">
                <h4>Projects</h4>
                <ul>
                  {isLoggedIn && (
                    <li onClick={() => navigate("/create_project")}>
                      <p>Create Project</p>
                    </li>
                  )}
                  <li>
                    <p>Ongoing Projects</p>
                  </li>
                  <li>
                    <p>Completed Projects</p>
                  </li>
                </ul>
              </li>
              <li>
                <h4>Contact us</h4>
              </li>
              <li style={{ padding: "0" }} className="submenus">
                {!isLoggedIn ? (
                  <button
                    className="loginBtn"
                    style={{ backgroundColor: "red" }}
                    onClick={() => navigate("/auth")}
                  >
                    login
                  </button>
                ) : (
                  <button
                    className="loginBtn"
                    style={{ backgroundColor: "red" }}
                  >
                    {authUser["name"].split(" ")[0]}
                  </button>
                )}
                {isLoggedIn && (
                  <ul style={{ right: "0px", marginTop: "2px" }}>
                    <li>
                      <p>Dashboard</p>
                    </li>
                    <li>
                      <p>Edit Profile</p>
                    </li>
                    <li onClick={() => navigate("/kyc")}>
                      <p>Complete KYC</p>
                    </li>
                    <li
                      onClick={() => {
                        googleLogoutBtn();
                      }}
                    >
                      <p>Logout</p>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
          <div className="menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>

      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="auth" element={<Auth />} />
        <Route path="kyc" element={<Kyc />} />
        <Route path="create_project" element={<CreateProject />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </>
  );
}
