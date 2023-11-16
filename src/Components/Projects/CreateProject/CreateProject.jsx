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
        setIsKycComplete(response);
      } catch (error) {
        console.error("Error fetching KYC status:", error);
        setIsKycComplete(false);
      }
    }

    fetchKycStatus();
  }, []);

  if (isKycComplete === null) {
    return <div>Loading...</div>;
  } else if (isKycComplete == "approved") {
    return <CreateProjectPage />;
  } else {
    return <IncompleteKyc />;
  }
}

export default CreateProject;
