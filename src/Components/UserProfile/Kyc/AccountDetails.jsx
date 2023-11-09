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

const AccountDetails = () => {
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
                                fullWidth
                            />
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}

export default AccountDetails;