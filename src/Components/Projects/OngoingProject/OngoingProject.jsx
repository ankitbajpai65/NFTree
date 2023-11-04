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
} from "@mui/material";

export default function OngoingProject() {
    return (
        <Grid container spacing={1} sx={{
            // width:100,
            // border: '2px solid violet',
            height: '100vh',
            my: 5,
            py: 5
        }}>
            <Grid item xs={2}></Grid>
            <Grid item container rowSpacing={0} columnSpacing={3} xs={8} sx={{
                // border: '2px solid blue',
            }}>
                {
                    Array.from({ length: 6 }).map((elem, index) => {
                        return (
                            <>
                                <Grid
                                    key={index}
                                    item xs={4}
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
    );
}