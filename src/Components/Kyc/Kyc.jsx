import { useState } from 'react';
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Grid,
  Button
} from '@mui/material';
import AccountDetails from './AccountDetails';
import OrganizationDetails from './OrganizationDetails';
import RepresentativeDetails from './RepresentativeDetails';
import Wallet from './Wallet';

const steps = [' Account Details', 'Organization Details', 'Representative Details', 'Wallet'];

const Kyc = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleBack = () => {
    activeStep > 0 && setActiveStep((prevStep) => prevStep - 1);
  };
  const handleNext = () => {
    activeStep < 3 && setActiveStep((prevStep) => prevStep + 1);
  };

  const formContent = (step) => {
    console.log(`formContent runs ${step}`);
    switch (step) {
      case 0:
        return <AccountDetails />;
      case 1:
        return <OrganizationDetails />;
      case 2:
        return <RepresentativeDetails />;
      case 3:
        return <Wallet />;
      default:
        return <div>404: Not Found</div>
    }
  };

  const stepperClick = (index) => {
    setActiveStep(index);
  }

  return (
    <Box
      sx={{
        maxWidth: activeStep === 3 ? '85%' : "600px",
        // margin: 'auto',
        margin: "4rem auto 3rem auto",
        padding: 2
      }}
    >
      <Stepper
        sx={{ maxWidth: '600px', margin: 'auto' }}
        activeStep={activeStep}
        orientation="horizontal"
      >
        {steps.map((label, index) => (
          <Step key={index} sx={{
            color: index === activeStep ? 'blue !important' : '',
          }}>
            <StepLabel onClick={() => stepperClick(index)} sx={{
              cursor: 'pointer !important',
              color: index === activeStep ? 'blue !important' : '',
            }} />
          </Step>
        ))}
      </Stepper>
      <Grid container sx={{ border: '1px solid #c6c6c6', mt: 5 }}>
        <Grid
          item
          xs={12}
          sx={{ padding: '20px' }}
        >
          {formContent(activeStep)}
        </Grid>
        <Grid
          item
          xs={12}
          mt={3}
          mb={5}
          sx={{
            display: activeStep === 3 ? 'none' : "flex",
            justifyContent: "center",
            gap: '1rem',
          }}
        >
          <Button sx={{
            width: '45%'
          }}
            variant="contained"
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            Back
          </Button>
          {activeStep === steps.length - 1 ? (
            <Button
              sx={{ width: '45%' }}
              variant="contained"
            >
              Submit
            </Button>
          ) : (
            <Button
              sx={{ width: '45%' }}
              variant="contained"
              onClick={handleNext}
            >
              Next
            </Button>
          )}
        </Grid>
      </Grid>
    </Box >
  )
}

export default Kyc;