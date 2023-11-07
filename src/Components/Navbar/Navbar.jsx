import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "../Home/Home";
import Kyc from "../Kyc/Kyc";
import CreateProject from "../Projects/CreateProject/CreateProject";
import Auth from "../Auth/Auth";
import { useAuth } from "../../Contexts/AuthContext";
import { googleLogout } from "@react-oauth/google";
import logo1 from "/logo_colored.png";
import OngoingProject from "../Projects/OngoingProject/OngoingProject";
import "../Navbar/Navbar.css";
import Contact from "../Contact_us/Contact";
import ErrorPage from "../Error_page/ErrorPage";
import EditProfile from "../User/EditProfile";

export default function Navbar() {
  const navigate = useNavigate();
  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();

  console.log(isLoggedIn);

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
                    <li onClick={() => navigate("/create-project")}>
                      <p>Create Project</p>
                    </li>
                  )}
                  <li onClick={() => navigate("/ongoing-project")}>
                    <p>Ongoing Projects</p>
                  </li>
                  <li onClick={() => navigate("/complete-project")}>
                    <p>Completed Projects</p>
                  </li>
                </ul>
              </li>
              <li onClick={() => navigate("/contact-us")}>
                <h4>Contact us</h4>
              </li>
              <div className="responsiveBtn">
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
                      onClick={() => navigate("/profile")}
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
              </div>
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
        <Route path="ongoing-project" element={<OngoingProject />} />

        {/* <Route path="ongoing-project/:id" element={<DetailedProjectPage />} />
        <Route path="complete-project" element={<CompletedProject />} />
        <Route
          path="complete-project/:id"
          element={<DetailedCompletedProjectPage />}
        /> */}
        <Route path="contact-us" element={<Contact />} />
        {isLoggedIn && (
          <>
            <Route path="kyc" element={<Kyc />} />
            <Route path="create-project" element={<CreateProject />} />
            <Route path="profile" element={<EditProfile data={authUser} />} />
          </>
        )}

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
