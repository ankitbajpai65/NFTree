import {
    TextField,
    Grid,
    Button
} from '@mui/material';
import Input from '@mui/material/Input';

const RepresentativeDetails = () => {
    return (
        <Grid container spacing={2}>
            <h1 style={{ margin: 'auto', margin: '1rem auto' }}>Representative Details</h1>

            <Grid item xs={12}>
                <TextField
                    name="designation"
                    placeholder="Designation of the representative"
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
            </Grid>
        </Grid>
    )
}

export default RepresentativeDetails;