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
        <Grid container spacing={1} sx={{
            // width:100,
            // border: '2px solid violet',
            minHeight: '100vh',
            maxHeight: 'auto',
            my: 5,
            py: 5
        }}>
            <Grid item xs={2}></Grid>
            <Grid item xs={8} sx={{
                // border: '2px solid blue',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                p: 4
            }} className="projectInfoContainer">
                <Typography variant="h3" gutterBottom>
                    Project Name
                </Typography>
                <Box sx={{ height: '15rem', width: '80%', mt: 3 }}>
                    <img src="/project.jpg" alt="" />
                </Box>

                <Box sx={{ height: 'auto', width: '80%', my: 4 }}>
                    <Typography variant="h6" sx={{ mb: 0 }} gutterBottom>
                        Project Description
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 0 }} gutterBottom>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam vitae dolorum ratione, velit, ipsum error esse ut explicabo delectus facere optio ad dolorem deserunt? A provident eveniet, voluptates fuga doloribus, architecto enim eos eum ipsam quas at labore repudiandae tempora?
                    </Typography>
                </Box>

                <ProgressBar />

                <Box className="projectInfo">
                    <Typography variant="body2" sx={{ mb: 0 }} gutterBottom>
                        Project Name
                    </Typography>
                </Box>

                <Box className="projectInfo">
                    <Typography variant="body2" sx={{ mb: 0 }} gutterBottom>
                        Total Plantation Area in square meter
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
                </Box>


            </Grid>
            <Grid item xs={2}></Grid>
        </Grid>
    )
}

export default CompletedProjects