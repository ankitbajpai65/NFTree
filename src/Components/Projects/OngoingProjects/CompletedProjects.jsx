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
    TextField,
    InputLabel,
    MenuItem,
    FormControl,
    Select
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
                <Typography variant="h4" gutterBottom
                    sx={{
                        color: 'var(--green-30)',
                        fontWeight: 'bold'
                    }}
                >
                    Completed Projects</Typography>
            </div>

            <Grid container spacing={1} sx={{
                display: 'flex',
                alignItems: "center",
                // py: 5
            }}>
                <Grid item xs={1}></Grid>
                <Grid item container spacing={3} xs={9} sx={{
                    // border: '2px solid blue',
                    display: 'flex',
                    alignItems: 'center',
                    ml: 0
                }}>
                    <Box
                        sx={{ width: '42%' }}>
                        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} focused={false} />
                        <TextField id="input-with-sx" placeholder="Search.." variant="standard" />
                    </Box>
                </Grid>
                <Grid item container spacing={3} xs={1} sx={{
                    // border: '2px solid blue',
                    display: 'flex',
                    alignItems: 'center',
                    ml: 0
                }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label" >Filter</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={age}
                            label="Age"
                        // onChange={handleChange}
                        >
                            <MenuItem value={10}>Delhi</MenuItem>
                            <MenuItem value={20}>Mumbai</MenuItem>
                            <MenuItem value={30}>Kolkata</MenuItem>
                            <MenuItem value={30}>Chennai</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={1}></Grid>
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
                                            height: '25rem',
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