import {
  TextField,
  Input,
  Grid,
  InputLabel,
  Button
} from '@mui/material';

const OrganizationDetails = (props) => {
  console.log(props);

  return (
    <Grid container spacing={2}>
      <h1 style={{ margin: 'auto', margin: '1rem auto' }}>Organization Details</h1>

      <Grid item xs={6}>
        <TextField
          name="orgName"
          label="Name of the organization"
          variant="outlined"
          size='small'
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          name="address"
          label="Address"
          variant="outlined"
          size="small"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="country"
          label="Country"
          variant="outlined"
          type="text"
          fullWidth
          size="small"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="website"
          label="Website"
          variant="outlined"
          size="small"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="description"
          label="Description"
          variant="outlined"
          size="small"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="registrationId"
          label="Registration ID"
          variant="outlined"
          size="small"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Input
          id="file-input"
          name="regProof"
          type="file"
          inputProps={{ accept: 'image/*' }}
          disableUnderline
          style={{ display: 'none' }}
        // onChange={handleFileUpload}
        />
        <Button variant="outlined" component="label" htmlFor="file-input" sx={{ width: '100%' }}>
          Upload Registration Proof
        </Button>
      </Grid>
    </Grid>
  )
}

export default OrganizationDetails;