import React from "react";
import { List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";

const projectDropdown = [
  { to: "/createProject", name: "Create Project" },
  { to: "/ongoingProjects", name: "Ongoing Project" },
  { to: "/completedProjects", name: "Completed Project" },
];

const profileDropdown = [{ to: "/home", name: "Logout" }];

const Dropdown = ({ handleMouseLeave, setMobileOpen, dropdown }) => {
  const { setIsLoggedIn } = useAuth();
  console.log({ handleMouseLeave, setMobileOpen, dropdown });
  return (
    <>
      <List
        sx={{
          color: "black",
          padding: 0,
          backgroundColor: "white",
          position: "absolute",
          top: dropdown === "Projects" ? { xs: "2rem", sm: "3rem" } : "2.5rem",
          left:
            dropdown === "Projects" ? { xs: "-65px", sm: "unset" } : "-5rem",
          width: dropdown === "Projects" ? { xs: "12rem", sm: "auto" } : "8rem",
          zIndex: "100",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          borderRadius: "4px",
        }}
      >
        <ListItem disablePadding>
          <div style={{ margin: "auto" }}>
            {dropdown === "Projects"
              ? projectDropdown.map((elem, index) => {
                  return (
                    <Link
                      key={index}
                      to={elem.to}
                      onClick={() => {
                        handleMouseLeave();
                        setMobileOpen(false);
                      }}
                      className="dropdownLinks"
                    >
                      {elem.name}
                    </Link>
                  );
                })
              : profileDropdown.map((elem, index) => {
                  return (
                    <Link
                      key={index}
                      to={elem.to}
                      onClick={() => {
                        handleMouseLeave();
                        setMobileOpen(false);
                        setIsLoggedIn(false);
                      }}
                      className="dropdownLinks"
                    >
                      {elem.name}
                    </Link>
                  );
                })}
          </div>
        </ListItem>
      </List>
    </>
  );
};

export default Dropdown;
