import React, { useState } from "react";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Home from "../Home/Home";
import CreateProject from "../Projects/CreateProject/CreateProject";
import Auth from "../Auth/Auth";
import { useAuth } from "../../Contexts/AuthContext";
import logo1 from "/logo_colored.png";
import ProjectDetails from "../Projects/ProjectPage/ProjectDetails";
import "../Navbar/Navbar.css";
import Contact from "../Contact_us/Contact";
import ErrorPage from "../Error_page/ErrorPage";
import Profile from "../UserProfile/Profile";
import GenerateReport from "../Projects/GenerateReport/GenerateReport";

import {
  AppBar,
  Grid,
  CssBaseline,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "../Navbar/Navbar.css";
import ForgetPassword from "../Auth/ForgetPassword";
import ProjectPage from "../Projects/ProjectPage/ProjectPage";
import ContributeProject from "../Projects/ProjectPage/ContributeProject/ContributeProject";
import Dashboard from "../Dashboard/Dashboard";
import Projectreport from "../ProjectReport/Projectreport";
import UserTransaction from "../UserProfile/UserTransactions/UserTransaction";
import CreateProjectOption from "../Projects/CreateProject/CreateProjectOption";
import CreateProjectPage from "../Projects/CreateProject/CreateProjectPage";

const drawerWidth = 240;
const navItems = ["Home", "Projects", "Dashboard", "Wallet"];

export default function Navbar() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scroll, setScroll] = useState(false);
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const [isMouseEnterProfile, setIsMouseEnterProfile] = useState(false);
  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();

  const scrolling = () => {
    window.scrollY >= 2 ? setScroll(true) : setScroll(false);
  };
  window.addEventListener("scroll", scrolling);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
    if (isMouseEnter) setIsMouseEnter(false);
  };

  const handleMouseEnter = () => setIsMouseEnter(true);

  const handleMouseLeave = () => {
    setIsMouseEnter(false);
    setMobileOpen(false);
  };

  const handleMouseEnterProfile = () => setIsMouseEnterProfile(true);

  const handleMouseLeaveProfile = () => {
    setIsMouseEnterProfile(false);
    setMobileOpen(false);
  };

  const handleSidebarClick = (event) => {
    const clickedElement = event.target;
    if (!clickedElement.classList.contains("projectLink")) {
      setIsMouseEnter(false);
    }
  };

  const drawer = (
    <Box
      sx={{
        textAlign: "center",
        zIndex: "20",
      }}
      id="sidebar"
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        <img
          src={logo1}
          alt=""
          onClick={() => navigate("/")}
          style={{
            height: "3.5rem",
            marginTop: ".5rem",
          }}
        />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, id) => (
          <ListItem key={id} disablePadding>
            <div
              style={{
                padding: "10px",
                margin: "auto",
              }}
            >
              {item === "Projects" ? (
                <>
                  <div
                    style={{ position: "relative" }}
                    className="solutionDivSidebar"
                  >
                    <p
                      className="navbarLinks projectLink"
                      onClick={handleMouseEnter}
                      style={{ color: "black" }}
                      // onClick={()=>navigate('/')}
                    >
                      {item}
                    </p>
                    {isMouseEnter && (
                      <Dropdown
                        handleMouseLeave={handleMouseLeave}
                        setMobileOpen={setMobileOpen}
                        dropdown={"Projects"}
                      />
                    )}
                  </div>
                </>
              ) : (
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="navbarLinks otherLinks"
                  onClick={handleDrawerToggle}
                  style={{ color: "black" }}
                >
                  {item}
                </Link>
              )}
            </div>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          component="nav"
          sx={{
            // border: '2px solid red',
            zIndex: 10,
            boxShadow: "none",
            background: "var(--green-10)",
            position: "fixed",
            top: 0,
          }}
        >
          <Toolbar>
            <MenuIcon
              onClick={handleDrawerToggle}
              className="navbar"
              sx={{
                display: { sm: "none" },
                filter: "invert(1)",
              }}
            />
            <Grid
              container
              sx={{
                // border: '2px solid red',
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Grid
                item
                sm={4}
                md={5}
                component="div"
                sx={{
                  // border: '2px solid blue',
                  display: { xs: "none", sm: "block" },
                  textAlign: "start",
                  pl: { sm: 0, md: 5 },
                }}
                className="navbarTitle"
              >
                <img
                  src={logo1}
                  onClick={() => navigate("/")}
                  alt=""
                  style={{
                    height: "3rem",
                    margin: "auto",
                    marginTop: ".5rem",
                    cursor: "pointer",
                  }}
                  id="navbarLogo"
                />
              </Grid>
              <Grid
                item
                className="navLinksContainer"
                sm={8}
                md={7}
                sx={{
                  // border: '2px solid red',
                  display: { xs: "none", sm: "flex" },
                  width: { sm: "70%", md: "50%" },
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  {navItems.map((item, id) => (
                    <div
                      key={id}
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {item === "Projects" ? (
                        <>
                          <div
                            onMouseOver={handleMouseEnter}
                            onMouseOut={handleMouseLeave}
                            style={{
                              height: "2rem",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <a className="projectLink">{item}</a>
                            {isMouseEnter && (
                              <Dropdown
                                handleMouseLeave={handleMouseLeave}
                                setMobileOpen={setMobileOpen}
                                dropdown={"Projects"}
                              />
                            )}
                          </div>
                        </>
                      ) : (
                        <Link
                          to={`/${item.toLowerCase()}`}
                          className="navbarLinks"
                        >
                          {item}
                        </Link>
                      )}
                    </div>
                  ))}
                </Box>
              </Grid>
            </Grid>
            <div
              style={{
                display: "flex",
                gap: "2rem",
                alignItems: "center",
              }}
            >
              <Link to="/contact" className="contactLink">
                Contact
              </Link>
              {!isLoggedIn ? (
                <Button
                  variant="contained"
                  className="filledBtn"
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
              ) : (
                <>
                  <div
                    style={{ position: "relative" }}
                    onMouseOver={handleMouseEnterProfile}
                    onMouseOut={handleMouseLeaveProfile}
                  >
                    <AccountCircleIcon
                      sx={{
                        color: "black",
                        fontSize: "2.5rem",
                        cursor: "pointer",
                      }}
                      onClick={() => navigate("/profile")}
                    />
                    {isMouseEnterProfile && (
                      <Dropdown
                        handleMouseLeave={handleMouseLeaveProfile}
                        setMobileOpen={setMobileOpen}
                        dropdown={"Profile"}
                      />
                    )}
                  </div>
                </>
              )}
            </div>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            onClick={handleSidebarClick}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>

      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Auth />} />
        <Route path="/projectDetails" element={<ProjectPage />} />
        {/* <Route path="profile" element={<ProfilePage data={authUser} />} /> */}
        <Route
          path="/projectDetails/:projectName"
          element={<ProjectDetails />}
        />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {isLoggedIn && (
          <>
            {" "}
            <Route
              path="/projectDetails/:projectName/contribute"
              element={<ContributeProject />}
            />
            <Route path="profile" element={<Profile data={authUser} />} />
            <Route path="/createProject" element={<CreateProject />} />
            <Route path="/projectreport" element={<Projectreport />} />
            {/* only product owner */}
            <Route
              path="/createProject/funding-project"
              element={<CreateProjectPage />}
            />
            <Route
              path="/createProject/monitoring-project"
              element={<CreateProjectPage />}
            />
            <Route
              path="/projectDetails/:projectName/createReport"
              element={<GenerateReport />}
            />
            <Route
              path="/projectDetails/:projectName/edit"
              element={<CreateProject />}
            />
            <Route
              path="/projectDetails/:projectName/doner-details"
              element={<UserTransaction props="owner" />}
            />
          </>
        )}

        {/* <Route path="/CreateProjectOption" element={<CreateProjectOption />} /> */}

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
