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
        setIsKycComplete(response.data[0].status);
      } catch (error) {
        setIsKycComplete(false);
      }
    }

    fetchKycStatus();
  }, []);

  console.log(isKycComplete);
  if (isKycComplete === null) {
    return <div>Loading...</div>;
  } else if (isKycComplete == "Approved") {
    return <CreateProjectPage />;
  } else {
    return <IncompleteKyc />;
  }
}

export default CreateProject;
