import { useState } from "react";
import EditProfile from "./EditProfile/EditProfile";
import Kyc from "./Kyc/Kyc";
import "./ProfilePage.css";

const ProfilePage = () => {
  const [currentPage, setCurrentPage] = useState("EditProfile");
  const PageMap = {
    EditProfile: <EditProfile />,
    Kyc: <Kyc />,
  };

  const handleActive = (e) => {
    console.log(e.target.elements);
  };

  return (
    <>
      <div className="profile-container">
        <div className="profileMenu">
          <ul>
            <li
              onClick={() => setCurrentPage("EditProfile")}
              className="active"
            >
              Edit Basic Details
            </li>
            <li
              onClick={() => {
                setCurrentPage("Kyc");
              }}
            >
              KYC
            </li>
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
