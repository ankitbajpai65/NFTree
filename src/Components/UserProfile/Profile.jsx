import React, { useState } from "react";
import UserDetails from "./UserDetails";
import Kyc from "./Kyc/Kyc";
import { Grid } from "@mui/material";
import Sidebar from "./Sidebar";
import "./Profile.css";

const Profile = () => {
  const [curPage, setCurPage] = useState("user_profile");
  const [editActive, setEditActive] = useState(false);

  const setPage = (page) => {
    setCurPage(page);
  };

  const handleEditClick = () => {
    console.log(`edit cliks`);
    setEditActive(true);
  };

  const pageMap = {
    user_profile: <UserDetails />,
    edit_basic_details: <UserDetails />,
    kyc: <Kyc />,
  };

  return (
    <div style={{ height: "100vh" }}>
      <Grid
        container
        sx={{
          marginTop: "4rem",
        }}
      >
        <Sidebar props={setPage} />

        <div className="profileContent">{pageMap[curPage]}</div>
      </Grid>
    </div>
  );
};

export default Profile;
