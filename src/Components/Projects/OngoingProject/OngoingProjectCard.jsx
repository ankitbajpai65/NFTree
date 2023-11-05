import React from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";
import { useNavigate } from 'react-router-dom';

const OngoingProjectCard = ({ id }) => {
    const navigate = useNavigate();
    console.log(id)
    return (
        <Card sx={{
            maxWidth: 345,
            cursor: 'pointer'
        }}
            onClick={() => navigate(`/completed_projects/${id + 1}`)}
        >
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="/project.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Project Title
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero architecto assumenda adipisci officiis harum iste
                </Typography>
            </CardContent>
            {/* <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions> */}
        </Card>
    )
}

export default OngoingProjectCard