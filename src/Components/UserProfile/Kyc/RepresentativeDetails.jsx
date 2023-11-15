import React from 'react';
import {
    TextField,
    Grid,
    Button
} from '@mui/material';
import Input from '@mui/material/Input';

const uploadedFileInfo = {
    marginTop: '1rem',
    textAlign: 'center',
    fontSize: '14px',
}

const RepresentativeDetails = ({ kycDetails, setKycDetails }) => {

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
            signedNote: file,
        }));
    };

    return (
        <Grid container spacing={2}>
            <h1 style={{ margin: 'auto', margin: '1rem auto' }}>Representative Details</h1>

            <Grid item xs={12}>
                <TextField
                    name="designation"
                    placeholder="Designation of the representative"
                    onChange={handleInputChange}
                    variant="outlined"
                    size='small'
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <Input
                    id="file-input"
                    name="signedNote"
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
                    Upload Signed Note
                </Button>
                <p style={uploadedFileInfo}>{kycDetails?.signedNote ? `${kycDetails?.signedNote?.name}` : 'No file selected'}</p>
            </Grid>
        </Grid>
    )
}

export default RepresentativeDetails;