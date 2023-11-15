import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Projects.css";

const ProjectCard = ({ props }) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        maxWidth: 345,
        height: "100%",
        cursor: "pointer",
        boxShadow: "none",
        border: "1px solid #c9c9c9",
        padding: "10px",
        margin: "auto",
      }}
      className="projectsCard"
      onClick={() => navigate(`/${type}/projectName`)}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="50%"
        image="/project.jpg"
      />
      <CardContent sx={{ pb: 0, px: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          Project Title
        </Typography>

        <Typography gutterBottom variant="body1" sx={{ fontWeight: "bolder" }}>
          Location
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
          architecto
        </Typography>

        <Button
          variant="container"
          sx={{
            textTransform: "capitalize",
            color: "white",
            mt: 1,
            float: "right",
          }}
        >
          Donate
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
