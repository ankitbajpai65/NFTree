import {
    TextField,
    Grid,
    Button,
    Typography
} from '@mui/material';

const Wallet = () => {
    return (
        <>
            <h1 style={{ margin: 'auto', margin: '1rem auto', textAlign: 'center' }}>Wallet</h1>
            <Typography variant="body2" gutterBottom sx={{ textAlign: 'center' }}>
                A wallet is your identity on the blockchain.
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ textAlign: 'center' }}>
                The certificates will be released from your Account ID.
            </Typography>
            <Grid container spacing={2} sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: '8rem',
                margin: '1rem 0'
            }}>
                <Grid item xs={4} sx={{
                    backgroundColor: '#e4e4e4',
                    textAlign: 'center'
                }}>
                    <Typography variant="h5" gutterBottom>
                        Browser Wallet
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Connect with Bit-Wallet browser extension.
                    </Typography>
                    <Button variant="contained" sx={{ mt: 3 }} className="filledBtn">Connect Wallet</Button>
                </Grid>
                <Grid item xs={4} sx={{
                    backgroundColor: '#e4e4e4',
                    textAlign: "center"
                }}>
                    <Typography variant="h5" gutterBottom sx={{ textAlign: 'center' }}>
                        Browser Wallet
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{ textAlign: 'center' }}>
                        Connect with Bit-Wallet mobile app.
                    </Typography>
                    <TextField
                        name="accountId"
                        label="Account ID"
                        variant="outlined"
                        size="small"
                        fullWidth
                        sx={{ my: 2, width: '80%' }}
                    />
                    <Button variant="contained" sx={{ m: 3 }} className="filledBtn">Request</Button>
                    {/* <Typography variant="body1" gutterBottom sx={{ textAlign: 'center' }}>
                        OR
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{ textAlign: 'center' }}>
                        Scan the QR-code using bit-wallet app.
                    </Typography> */}
                </Grid>
            </Grid>
        </>
    )
}

export default Wallet;