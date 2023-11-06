import React from 'react';
import {
    Grid,
    Box,
    Typography
} from '@mui/material';
// import PropTypes from 'prop-types';
// import LinearProgress from '@mui/material/LinearProgress';
// // import Typography from '@mui/material/Typography';
// // import Box from '@mui/material/Box';
import ProgressBar from './ProgressBar';
import './CompletedProjects.css';

const CompletedProjects = () => {
    return (
        <Grid container spacing={8} columns={16} sx={{
            // width:100,
            // border: '2px solid violet',
            minHeight: '90vh',
            maxHeight: 'auto',
            my: 5,
            py: 5
        }}>
            <Grid item xs={2}></Grid>
            <Grid item xs={6} sx={{
                // border: '2px solid red',
            }}>
                <Box sx={{ height: '100%' }} >
                    <img src="/project.jpg" alt="" style={{ height: '100%', width: '100%' }} />
                </Box>
            </Grid>

            <Grid item xs={6} sx={{
                // border: '2px solid blue',
                display: 'flex',
                flexDirection: 'column',
                // alignItems: 'center',
                gap: '1rem',
                // p: 4
            }} className="projectInfoContainer">
                <Typography variant="h4" gutterBottom>
                    Project Name
                </Typography>

                <Box sx={{mb:2}}>
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
                            No of Plants planned
                        </Typography>
                    </Grid>
                    <Grid item xs={7}>
                        <Box className="projectInfo">
                            <ProgressBar />
                        </Box>
                    </Grid>
                </Grid>

                {/* <ProgressBar /> */}

                {/* <Box className="projectInfo">
                    <Typography variant="body2" sx={{ mb: 0 }} gutterBottom>
                        Total Plantation Area in square meter
                    </Typography>
                </Box> */}

                {/* <Box className="projectInfo">
                    <Typography variant="body2" sx={{ mb: 0 }} gutterBottom>
                        Project Name
                    </Typography>
                </Box>

                <Box className="projectInfo">
                    <Typography variant="body2" sx={{ mb: 0 }} gutterBottom>
                        No of Plants Plant
                    </Typography>
                </Box>
                <Box className="projectInfo">
                    <Typography variant="body2" sx={{ mb: 0 }} gutterBottom>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam vitae dolorum ratione, velit, ipsum error esse ut explicabo delectus facere optio ad dolorem deserunt? A provident eveniet, voluptates fuga doloribus, architecto enim eos eum ipsam quas at labore repudiandae tempora?
                    </Typography>
                </Box> */}
            </Grid>
            <Grid item xs={2}></Grid>
        </Grid>
    )
}

export default CompletedProjects