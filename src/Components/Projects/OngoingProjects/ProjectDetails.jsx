import React from 'react';
import {
    Grid,
    Box,
    Typography,
    Button
} from '@mui/material';
import ProgressBar from './ProgressBar';
import { useNavigate } from 'react-router-dom';

const ProjectDetails = ({ progress }) => {
    const navigate = useNavigate();
    console.log(progress);

    return (
        <Grid container spacing={8} columns={16} sx={{
            minHeight: '90vh',
            maxHeight: 'auto',
            my: 5,
            py: 5
        }}>
            <Grid item xs={2}></Grid>
            <Grid item xs={6} sx={{
                display: 'flex',
                alignItems: 'center'
            }}>
                <Box sx={{ height: '100%', width: "90%" }} >
                    <img src="/project.jpg" alt="" style={{ height: '80%', width: '100%',mb:'auto' }} />
                </Box>
            </Grid>

            <Grid item xs={6} sx={{
                // border: '2px solid blue',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
            }} className="projectInfoContainer">
                <Typography variant="h4" gutterBottom sx={{ mb: 0 }}>
                    Project Name
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ fontWeight: 'bolder' }}>
                    Location
                </Typography>

                <Box
                    sx={{
                        mb: 2,
                        width: '90%'
                    }}>
                    <Typography variant="body2" sx={{ mb: 0 }} gutterBottom>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam vitae dolorum ratione, velit, ipsum error esse ut explicabo delectus facere optio ad dolorem deserunt? A provident eveniet, voluptates fuga doloribus, architecto enim eos eum ipsam quas at labore repudiandae tempora?
                    </Typography>
                </Box>
                <Grid container>
                    <Grid item xs={5} sx={{
                        marginTop: 'auto',
                        marginBottom: 'auto',
                    }}>
                        <Typography variant="body2" sx={{ mb: 0 }} gutterBottom>
                            Total Plantation Area in square meter
                        </Typography>
                    </Grid>
                    <Grid item xs={7}>
                        <Box className="projectInfo">
                            <Typography variant="body2" sx={{ mb: 0 }} gutterBottom>
                                5
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={5} sx={{
                        marginTop: 'auto',
                        marginBottom: 'auto',
                    }}>
                        <Typography variant="body2" sx={{ mb: 0 }} gutterBottom>
                            Donation Cost per Plant
                        </Typography>
                    </Grid>
                    <Grid item xs={7}>
                        <Box className="projectInfo">
                            <Typography variant="body2" sx={{ mb: 0 }} gutterBottom>
                                Rs.100/-
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={5} sx={{
                        marginTop: 'auto',
                        marginBottom: 'auto',
                    }}>
                        <Typography variant="body2" sx={{ mb: 0 }} gutterBottom>
                            Total no of plants planned
                        </Typography>
                    </Grid>
                    <Grid item xs={7}>
                        <Box className="projectInfo">
                            <ProgressBar progress={progress} />
                        </Box>
                    </Grid>
                </Grid>

                <Button
                    variant="contained"
                    onClick={() => navigate('./contribute')}
                    sx={{
                        width: '7rem',
                        textTransform: 'capitalize'
                    }}
                >Contribute</Button>

                {/* PROJECT OWNER */}

                <Typography variant="h5" gutterBottom sx={{ mb: 3,mt:4 }}>
                    Project Owner
                </Typography>

                <Grid container>
                    <Grid item xs={5} sx={{
                        marginTop: 'auto',
                        marginBottom: 'auto',
                    }}>
                        <Typography variant="body2" sx={{ mb: 0 }} gutterBottom>
                            Name
                        </Typography>
                    </Grid>
                    <Grid item xs={7}>
                        <Box className="projectInfo">
                            <Typography variant="body2" sx={{ mb: 0 }} gutterBottom>
                                Project owner name
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={5} sx={{
                        marginTop: 'auto',
                        marginBottom: 'auto',
                    }}>
                        <Typography variant="body2" sx={{ mb: 0 }} gutterBottom>
                            Email
                        </Typography>
                    </Grid>
                    <Grid item xs={7}>
                        <Box className="projectInfo">
                            <Typography variant="body2" sx={{ mb: 0 }} gutterBottom>
                                Project owner's email
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

            </Grid>
            <Grid item xs={2}></Grid>
        </Grid>
    )
}

export default ProjectDetails;