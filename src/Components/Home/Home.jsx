import React, { useState, useEffect } from "react";
import About from "../About/About";
import Mission from "../Mission/Mission";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import home from "./assets/home.png";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
	return (
		<>
			<div id="home"></div>
			<Grid
				container
				spacing={2}
				sx={{
					// border: '2px solid red',
					height: { xs: "70vh", sm: "90vh" },
					zIndex: 1,
					display: "flex",
					alignItems: "center",
					background: '#EBF3E8'
				}}
				id="homeContainer">
				<Grid
					item
					xs={12}
					sm={1}
					sx={{ display: { xs: "none", sm: "block" } }}></Grid>
				<Grid
					item
					xs={12}
					sm={5}
					sx={{
						// border: '2px solid red',
						height: "68%",
						backgroundImage: `url(${home})`,
						backgroundPosition: "center",
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						display: { xs: "block", sm: "none" },
					}}
					id="homeImg"></Grid>
				<Grid
					item
					xs={12}
					sm={5}
					sx={{
						// border: '2px solid red',
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
					}}>
					<Box
						sx={{
							// border: '2px solid blue',
							width: { xs: "90%", sm: "90%", lg: "70%" },
							textAlign: "start",
						}}
						className="homeTextBox">
						<Typography
							variant="h1"
							gutterBottom
							className="homeHead"
							sx={{
								fontWeight: "bold",
								// color: "black",
							}}>
							NFTree
						</Typography>
						<Typography
							variant="body1"
							className="homeDesc"
							gutterBottom
							sx={{
								textAlign: "justify",
								// color: "white",
								marginBottom: '2rem'
							}}>
							{/* {t("mainSubHeading")} */}
							Welcome to NFTree, the platform that provides a new way to save the environment and reward investors at the same time. With our NFTree, you can exercise your social responsibility without compromising your investment goals, and we can continue planting more trees around the globe.
						</Typography>

						{/* {lang === "en" ? */}
						{/* <Link
								style={{ marginTop: '1rem' }}
								className="downloadBtn"
								to="https://drive.google.com/file/d/1j0sPNmKCAPwZ5olYa4zZnZFjqk5-TI6D/view?usp=sharing"
								target="_blank">
								HomeButton
							</Link> */}
						<Button variant="contained" endIcon={<ArrowForwardIcon />}>
							Get Started
						</Button>
					</Box>
				</Grid>
				<Grid
					item
					xs={12}
					sm={5}
					sx={{
						height: "80%",
						// border: '2px solid yellow',
						// marginTop: '2rem',
						backgroundImage: `url(${home})`,
						backgroundPosition: "center",
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						display: { xs: "none", sm: "block" },
					}}
					id="homeImgContainer"></Grid>
				<Grid
					item
					xs={12}
					sm={1}
					sx={{ display: { xs: "none", sm: "block" } }}></Grid>
			</Grid>

			<About />
			<Mission />
		</>
	);
};

export default Home;
