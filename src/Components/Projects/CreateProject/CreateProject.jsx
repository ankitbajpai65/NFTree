import React, { useEffect, useState } from "react";
import { kycStatus } from "../../../api/projectApi";
import IncompleteKyc from "./IncompleteKyc";
import CreateProjectPage from "./CreateProjectPage";

function CreateProject() {
  const [isKycComplete, setIsKycComplete] = useState(null);

  useEffect(() => {
    async function fetchKycStatus() {
      try {
        const response = await kycStatus();
        setIsKycComplete(response); // Assuming response is a boolean indicating KYC status
      } catch (error) {
        console.error("Error fetching KYC status:", error);
        setIsKycComplete(false); // Set KYC status to false in case of an error
      }
    }

    fetchKycStatus();
  }, []);

  // Render based on the KYC status
  if (isKycComplete === null) {
    // Loading state while fetching data
    return <div>Loading...</div>;
  } else if (isKycComplete == "approved") {
    // Render CreateProjectPage if KYC status is complete
    return <CreateProjectPage />;
  } else {
    // Render IncompleteKyc if KYC status is incomplete or API call failed
    return <IncompleteKyc />;
  }
}

export default CreateProject;
