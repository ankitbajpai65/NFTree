import * as React from 'react';
import OngoingProjectCard from './OngoingProjectCard';
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

export default function OngoingProject() {
    return (
        <>
            <div
                style={{
                    display: 'block',
                    textAlign: 'center',
                    margin: '7rem 0 2rem',
                    // position: 'relative'
                }}
            >
                <Typography
                    variant="h3"
                    gutterBottom>Ongoing Projects</Typography>
            </div>

            <Grid container spacing={1} sx={{
                // width:100,
                // border: '2px solid violet',
                // height: '100vh',
                display: 'flex',
                alignItems: "center",
                py: 5
            }}>
                <Grid item xs={2}></Grid>
                <Grid container spacing={3} xs={8} sx={{
                    // border: '2px solid blue',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <Box
                        sx={{
                            width: '80%',
                            textAlign:'center',
                            margin:'auto'
                            // position: 'absolute',
                            // top: '8rem',
                            // right: '2rem'
                        }}>
                        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField id="input-with-sx" placeholder="Search.." variant="standard" sx={{width:'100%'}} />
                    </Box>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>

            <Grid container spacing={1} sx={{
                // width:100,
                // border: '2px solid violet',
                height: '100vh',
                display: 'flex',
                alignItems: "center",
                mb: 5,
                py: 5
            }}>
                <Grid item xs={2}></Grid>
                <Grid container spacing={3} xs={8} sx={{
                    // border: '2px solid blue',
                }}>
                    {
                        Array.from({ length: 7 }).map((elem, index) => {
                            return (
                                <>
                                    <Grid
                                        key={index}
                                        item xs={3}
                                        sx={{
                                            // border: '2px solid red',
                                            height: 310,
                                        }}>
                                        <OngoingProjectCard id={index} />
                                    </Grid>
                                </>
                            )
                        })
                    }
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
        </>
    );
}