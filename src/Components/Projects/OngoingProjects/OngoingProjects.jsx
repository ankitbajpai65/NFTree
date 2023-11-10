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
    Select,
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import './Projects.css'

export default function OngoingProjects() {
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
                    Ongoing Projects</Typography>
            </div>

            <Grid
                container
                className="filterContainer"
                sx={{
                    display: 'flex',
                    alignItems: "center",
                    flexDirection:{xs:'column',sm:'row'}
                }}>
                <Grid item xs={1}
                    sx={{ display: { xs: 'none', sm: 'block' } }}
                ></Grid>
                <Grid item spacing={3} xs={9} sm={8} lg={9} sx={{
                    // border: '2px solid blue',
                    display: 'flex',
                    alignItems: 'center',
                    ml: 0
                }}>
                    <Box
                        sx={{ width: { xs:'100%',sm: '70%', md: '40%' } }}
                        className="searchBox"
                    >
                        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} focused={false} />
                        <TextField id="input-with-sx" placeholder="Search.." variant="standard" />
                    </Box>
                </Grid>
                <Grid item xs={8} sm={2} lg={1} sx={{
                    // border: '2px solid blue',
                    display: 'flex',
                    alignItems: 'center',
                    width:'28%',
                    mt:2
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
                <Grid item xs={1}
                    sx={{ display: { xs: 'none', sm: 'block' } }}
                ></Grid>
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
                                        item
                                        xs={12} sm={6} md={4} lg={3}
                                        sx={{
                                            // border: '2px solid red',
                                            height: '25rem',
                                        }}>
                                        <ProjectCard type="ongoingProjects" />
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