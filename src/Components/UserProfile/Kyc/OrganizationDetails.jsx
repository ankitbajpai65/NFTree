import React from 'react';
import {
  TextField,
  Input,
  Grid,
  Button
} from '@mui/material';

const organizationFormDetails = [
  { name: 'orgName', placeholder: 'Name of organization', xs: 6 },
  { name: 'address', placeholder: 'Address', xs: 6 },
  { name: 'country', placeholder: 'Country' },
  { name: 'website', placeholder: 'Website' },
  { name: 'description', placeholder: 'Description' },
  { name: 'registrationId', placeholder: 'Registration ID' },
  { name: 'registrationProof', placeholder: 'Upload Registration Proof' },
];

const OrganizationDetails = () => {
  return (
    <Grid container spacing={2}>
      <h1 style={{ margin: 'auto', margin: '1rem auto' }}>Organization Details</h1>

      {
        organizationFormDetails.map((field, index) => (
          <Grid item xs={field.xs || 12} key={index}>
            {field.name !== 'regProof' ? (
              <TextField
                name={field.name}
                placeholder={field.placeholder}
                variant="outlined"
                size="small"
                fullWidth
              />
            ) : (
              <>
                <Input
                  id="file-input"
                  name="regProof"
                  type="file"
                  inputProps={{ accept: 'image/*' }}
                  disableUnderline
                  style={{ display: 'none' }}
                />
                <Button
                  variant="outlined"
                  component="label"
                  htmlFor="file-input"
                  sx={{ width: '100%' }}
                  className="outlinedBtn"
                >
                  {field.placeholder}
                </Button>
              </>
            )}
          </Grid>
        ))
      }
    </Grid>
  );
}

export default OrganizationDetails;
