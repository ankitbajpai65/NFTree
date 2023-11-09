import React from "react";
import AboutCard from "./AboutCard.jsx";
import { aboutCardData } from "./AboutCardData.js";
import Grid from "@mui/material/Grid";
import "./About.css";

const About = () => {
    return (
        <>
            <div id="about"></div>
            <div className="aboutDiv">
                <h1>What is NFTree?</h1>
                <p className="aboutDesc">
                    NFTree is a platform for investing in tree plantations through NFTokens. These tokens represent ownership in a tree. As the tree grows, so does the value of the token. This means that NFTree provides both an economic and environmental benefit.
                </p>

                <Grid
                    container
                    spacing={{ xs: 3, md: 3 }}
                    justifyContent="center"
                >
                    <Grid
                        item
                        sm={1}
                        md={2}
                        lg={3}
                        sx={{ display: { xs: "none", sm: "block" } }}></Grid>
                    <Grid
                        item
                        container
                        xs={12}
                        sm={10}
                        md={8}
                        lg={6}
                        spacing={3}
                        className="aboutCardContainerDiv">
                        {aboutCardData.map((data, id) => {
                            return (
                                <Grid
                                    item
                                    xs={6}
                                    key={id}>
                                    <AboutCard
                                        key={id}
                                        desc={data.desc}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid>
                    <Grid
                        item
                        sm={1}
                        md={2}
                        lg={3}
                        sx={{ display: { xs: "none", sm: "block" } }}>
                    </Grid>
                </Grid>
            </div>
        </>
    );
};

export default About;
