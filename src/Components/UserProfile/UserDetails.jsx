import React from "react";
import { Input, Button } from "@mui/material";

const UserDetails = ({ editActive }) => {
  return (
    <div>
      <div className="form-box editForm">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            textAlign: "center",
          }}
        >
          <img
            className="profileImg"
            src="https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
            alt=""
            style={{
              borderRadius: "50%",
              width: "150px",
              height: "150px",
              margin: "auto",
            }}
          />
          {editActive && (
            <>
              <Input
                id="file-input"
                name="regProof"
                type="file"
                inputProps={{ accept: "image/*" }}
                disableUnderline
                style={{ display: "none" }}
              />
              <Button
                variant="outlined"
                component="label"
                htmlFor="file-input"
                className="uploadBtn"
                sx={{
                  width: "37%",
                  margin: "auto",
                  textTransform: "capitalize",
                  color: "#757575",
                  border: "1px solid var(--green-30)",
                  color: "var(--green-30)",
                }}
              >
                Change Profile Pic
              </Button>
            </>
          )}
        </div>
        <br></br>
        <div className="form-input" style={{ alignItems: "start" }}>
          <div className="form-col profileName">
            <div>
              <label htmlFor="">First name</label>
              <input
                type="text"
                name="name"
                placeholder="First Name"
                readOnly={editActive ? false : true}
              />
            </div>
            <div>
              <label htmlFor="">Last name</label>
              <input
                type="text"
                name="name"
                placeholder="Last Name"
                readOnly={editActive ? false : true}
              />
            </div>
          </div>
          <div style={{ width: "100%" }}>
            <label htmlFor="">Email</label>
            <input
              type="text"
              name="name"
              placeholder="Email"
              readOnly={editActive ? false : true}
            />
          </div>
          <div style={{ width: "100%" }}>
            <label htmlFor="">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Address"
              readOnly={editActive ? false : true}
            />
          </div>
          <div className="form-col">
            <input
              type="text"
              name="city"
              placeholder="City"
              readOnly={editActive ? false : true}
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              readOnly={editActive ? false : true}
            />
          </div>
        </div>
        {editActive && (
          <div className="form-button" style={{ margin: "0" }}>
            <button className="submit-button" onClick="">
              Save
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetails;
