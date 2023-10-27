import {
    Grid,
    TextField,
} from "@mui/material";

const AccountDetails = (props) => {
    console.log(props);
    return (
        <Grid container spacing={2}>
            <h1 style={{ margin: 'auto', margin: '1rem auto' }}>Account Details</h1>

            <Grid item xs={12}>
                <TextField
                    name="fname"
                    label="First name"
                    variant="outlined"
                    type="fname"
                    size="small"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    name="lname"
                    label="Last name"
                    variant="outlined"
                    type="lname"
                    size="small"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    name="email"
                    label="Email"
                    variant="outlined"
                    size='small'
                    type="email"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    name="phone"
                    label="Phone No."
                    variant="outlined"
                    size="small"
                    type="phone"
                    fullWidth
                />
            </Grid>
        </Grid>
    )
}

export default AccountDetails;