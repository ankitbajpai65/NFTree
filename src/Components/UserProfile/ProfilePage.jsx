import { useState } from "react";
import EditProfile from "./EditProfile/EditProfile";
import Kyc from "./Kyc/Kyc";
import "./ProfilePage.css";

const ProfilePage = () => {
  const [currentPage, setCurrentPage] = useState("Profile");
  const PageMap = {
    Profile: "",
    EditProfile: <EditProfile />,
    Kyc: <Kyc />,
  };

  return (
    <>
      <div className="profile-container">
        <div className="profileMenu">
          <ul>
            <li onClick={() => setCurrentPage("Profile")}>User Profile</li>
            <li onClick={() => setCurrentPage("EditProfile")}>
              Edit Basic Details
            </li>
            <li onClick={() => setCurrentPage("Kyc")}>KYC</li>
            <li onClick={() => setCurrentPage("")}>My Projects</li>
            <li onClick={() => setCurrentPage("")}>Donation History</li>
          </ul>
        </div>
        <div className="profileContent">{PageMap[currentPage]}</div>
      </div>
    </>
  );
};

export default ProfilePage;
