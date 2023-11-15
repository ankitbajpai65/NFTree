import React from 'react';
import {
    TextField,
    Input,
    Grid,
    Button
} from '@mui/material';

const uploadedFileInfo = {
    marginTop: '1rem',
    textAlign: 'center',
    fontSize: '14px',
}

const organizationFormDetails = [
    { name: 'orgName', placeholder: 'Name of organization', xs: 6 },
    { name: 'address', placeholder: 'Address', xs: 6 },
    { name: 'country', placeholder: 'Country' },
    { name: 'website', placeholder: 'Website' },
    { name: 'description', placeholder: 'Description' },
    { name: 'registrationId', placeholder: 'Registration ID' },
    // { name: 'registrationProof', placeholder: 'Upload Registration Proof' },
];


const OrganizationDetails = ({ kycDetails, setKycDetails }) => {

    const handleInputChange = (e) => {
        setKycDetails((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    const handleFileInput = (e) => {
        const file = e.target.files[0];
        console.log(file);
        setKycDetails((prev) => ({
            ...prev,
            regProof: file,
        }));
    };

    return (
        <Grid container spacing={2}>
            <h1 style={{ margin: 'auto', margin: '1rem auto' }}>Organization Details</h1>

            {
                organizationFormDetails.map((field, index) => (
                    <Grid item xs={field.xs || 12} key={index}>

                        <TextField
                            name={field.name}
                            placeholder={field.placeholder}
                            onChange={handleInputChange}
                            variant="outlined"
                            size="small"
                            fullWidth
                        />
                    </Grid>
                ))
            }
            <Grid item xs={12}>
                <Input
                    id="file-input"
                    name="regProof"
                    type="file"
                    inputProps={{ accept: 'image/*' }}
                    disableUnderline
                    style={{ display: 'none' }}
                    onChange={handleFileInput}
                />
                <Button
                    variant="outlined"
                    component="label"
                    htmlFor="file-input"
                    sx={{ width: '100%' }}
                    className="outlinedBtn"
                >
                    Upload Registration Proof
                </Button>
                <p style={uploadedFileInfo}>{kycDetails?.regProof ? `${kycDetails?.regProof?.name}` : 'No file selected'}</p>
            </Grid>
        </Grid>
    );
}

export default OrganizationDetails;
