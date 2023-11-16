import { useState } from "react";
import { Box, Stepper, Step, StepLabel, Grid, Button } from "@mui/material";
import AccountDetails from "./AccountDetails";
import OrganizationDetails from "./OrganizationDetails";
import RepresentativeDetails from "./RepresentativeDetails";
import Wallet from "./Wallet";

const steps = [
  " Account Details",
  "Organization Details",
  "Representative Details",
  "Wallet",
];

const Kyc = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [kycDetails, setKycDetails] = useState({});

  const handleBack = () => {
    activeStep > 0 && setActiveStep((prevStep) => prevStep - 1);
  };
  const handleNext = () => {
    activeStep < 3 && setActiveStep((prevStep) => prevStep + 1);
  };

  const formContent = (step) => {
    switch (step) {
      case 0:
        return <AccountDetails steps={steps} activeStep={activeStep} handleBack={handleBack} handleNext={handleNext} setKycDetails={setKycDetails} />
      case 1:
        return <OrganizationDetails steps={steps} activeStep={activeStep} handleBack={handleBack} handleNext={handleNext} kycDetails={kycDetails} setKycDetails={setKycDetails} />;
      case 2:
        return <RepresentativeDetails steps={steps} activeStep={activeStep} handleBack={handleBack} handleNext={handleNext} kycDetails={kycDetails} setKycDetails={setKycDetails} />;
      case 3:
        return <Wallet />;
      default:
        return <div>404: Not Found</div>;
    }
  };

  const stepperClick = (index) => {
    setActiveStep(index);
  };

  return (
    <Box
      sx={{
        maxWidth: activeStep === 3 ? "85%" : "600px",
        margin: "0rem auto 3rem auto",
        padding: 2,
      }}
    >
      <Stepper
        sx={{ maxWidth: "600px", margin: "auto" }}
        activeStep={activeStep}
        orientation="horizontal"
      >
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel
              onClick={() => stepperClick(index)}
              sx={{ cursor: "pointer !important" }}
            // className={`${index === activeStep ? 'activeStepper' : ''}`}
            />
          </Step>
        ))}
      </Stepper>
      <Grid
        container
        sx={{
          padding: "3rem",
          background: "white",
          borderRadius: "1rem",
          mt: 5,
        }}
      >
        {formContent(activeStep)}
      </Grid>
    </Box>
  );
};

export default Kyc;
