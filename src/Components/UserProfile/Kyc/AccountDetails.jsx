import {
    Grid,
    TextField,
} from "@mui/material";

const accountFormDetails = [
    { name: 'firstName', placeholder: 'First name' },
    { name: 'lastName', placeholder: 'Last name' },
    { name: 'email', placeholder: 'Email' },
    { name: 'phone', placeholder: 'Phone' },
];


const AccountDetails = ({ setKycDetails }) => {

    const handleInputChange = (e) => {
        setKycDetails((prev) => ({
            ...prev,
            [e.target.name]: e.target.value || e.target.files[0],
        }));
    }

    return (
        <Grid container spacing={2}>
            <h1 style={{ margin: 'auto', margin: '0 auto 1rem' }}>Account Details</h1>
            {
                accountFormDetails.map((field, index) => {
                    return (
                        <Grid item xs={12} key={index}>
                            <TextField
                                name={field.name}
                                placeholder={field.placeholder}
                                variant="outlined"
                                size="small"
                                onChange={handleInputChange}
                                fullWidth
                                // error
                                // helperText="Please fill this field"
                            />
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}

export default AccountDetails;