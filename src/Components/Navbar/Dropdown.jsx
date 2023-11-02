import React from "react";
import { List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";

const Dropdown = ({ handleMouseLeave, setMobileOpen }) => {
  return (
    <>
      <List
        sx={{
          // border: '2px solid red',
          color: "black",
          padding: 0,
          backgroundColor: "white",
          position: "absolute",
          top: { xs: "2rem", sm: "3rem" },
          left: { xs: "-65px", sm: "unset" },
          width: { xs: "12rem", sm: "auto" },
          zIndex: "100",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          borderRadius: "4px",
        }}
      >
        <ListItem disablePadding>
          <div style={{ margin: "auto" }}>
            <Link
              to="/create_project"
              onClick={() => {
                handleMouseLeave();
                setMobileOpen(false);
              }}
              className="dropdownLinks"
            >
              Create Project
            </Link>

            <Link
              to="/ongoing_projects"
              onClick={() => {
                handleMouseLeave();
                setMobileOpen(false);
              }}
              className="dropdownLinks"
            >
              Ongoing Projects
            </Link>

            <Link
              to="/completed_projects"
              onClick={() => {
                handleMouseLeave();
                setMobileOpen(false);
              }}
              className="dropdownLinks"
            >
              Completed Projects
            </Link>
          </div>
        </ListItem>
      </List>
    </>
  );
};

export default Dropdown;
