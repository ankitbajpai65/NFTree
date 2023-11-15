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

  const pageMap = {
    user_profile: <UserDetails />,
    edit_basic_details: <UserDetails editActive={editActive} setEditActive={setEditActive} />,
    kyc: <Kyc />,
  };

  return (
    <Grid
      container
      sx={{
        marginTop: "4rem",
      }}
    >
      <Sidebar props={setPage} editActive={editActive} setEditActive={setEditActive} />

      <div className="profileContent">{pageMap[curPage]}</div>
    </Grid>
  );
};

export default Profile;