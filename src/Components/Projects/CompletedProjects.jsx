import * as React from 'react';
import ProjectCard from './ProjectCard';
import {
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardActions,
    Button,
    Box,
    TextField

} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export default function CompletedProjects() {
    return (
        <>
            <div
                style={{
                    display: 'block',
                    textAlign: 'center',
                    margin: '7rem 0 4rem',
                }}
            >
                <Typography
                    variant="h3"
                    gutterBottom>Completed Projects</Typography>
            </div>

            <Grid container spacing={1} sx={{
                display: 'flex',
                alignItems: "center",
                // py: 5
            }}>
                <Grid item xs={2}></Grid>
                <Grid item container spacing={3} xs={8} sx={{
                    // border: '2px solid blue',
                    display: 'flex',
                    alignItems: 'center',
                    ml:0
                }}>
                    <Box
                        sx={{
                            // border:'2px solid red',
                            width: '42%',
                            textAlign:'center',
                            margin:'auto'
                        }}>
                        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField id="input-with-sx" placeholder="Search.." variant="standard" sx={{width:'90%'}} />
                    </Box>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>

            <Grid container spacing={1} sx={{
                display: 'flex',
                alignItems: "center",
                mb: 5,
                py: 5
            }}>
                <Grid item xs={1}></Grid>
                <Grid item container spacing={3} xs={10}>
                    {
                        Array.from({ length: 7 }).map((elem, index) => {
                            return (
                                <>
                                    <Grid
                                        key={index}
                                        item xs={3}
                                        sx={{
                                            // border: '2px solid red',
                                            height: '28rem',
                                        }}>
                                        <ProjectCard type="completedProjects"/>
                                    </Grid>
                                </>
                            )
                        })
                    }
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </>
    );
}