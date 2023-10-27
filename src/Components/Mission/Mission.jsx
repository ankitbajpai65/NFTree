import React from "react";
import {
	Box,
	Grid,
	Typography,
	Card,
	CardMedia,
} from '@mui/material';
import BitSaudiImg from "./assets/mission2.png";
import "./Mission.css";

const Mission = () => {
	return (
		<>
			<div id="mission"></div>
			<Grid container spacing={8} justifyContent="center" className="mission">
				<Grid item xs={12} sm={2} md={1} lg={1} sx={{
					display: { xs: "none", md: "block" }
				}}>
				</Grid>
				<Grid
					item
					xs={12}
					sm={6}
					md={5}
					lg={5}>
					<Typography
						variant="h4"
						gutterBottom
						sx={{
							fontWeight: "bold",
							mb: 4,
							display: { xs: "block", sm: "none" },
							textAlign: "center",
						}}
						className="missionHead">
						The Impact and Mission of NFTree
					</Typography>
					<Card
						sx={{
							boxShadow: "none",
							background: 'transparent'
							// border: '2px solid green',
						}}
						className="missionImgContainer"
					>
						<CardMedia
							component="img"
							sx={{ width: 'unset' }}
							image={BitSaudiImg}
							alt="Image Alt Text"
							className="missionImg"
						/>
					</Card>
				</Grid>
				<Grid item xs={12} sm={6} md={5} lg={5} sx={{
					// border: '2px solid blue'
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}>
					<Box
						sx={{
							// border: '2px solid blue',
							width: '75%',
							padding: '0 2rem',
							textAlign: "start",
							pr: { xs: 3, md: 0 },
						}}>
						<Typography
							variant="h4"
							gutterBottom
							sx={{
								fontWeight: "bold",
								mb: 4,
								display: { xs: "none", sm: "block" },
								textAlign: "justify",
							}}
							className="missionHead">
							The Impact and Mission of NFTree
						</Typography>
						<Typography
							sx={{
								typography: "body1",
								lineHeight: 1.8,
								textAlign: "justify",
							}}
							gutterBottom
							className="missionPara">
							The mission of NFTree is to provide a sustainable solution for investors to impact the environment positively while earning income. Our goal is to create the world's largest sustainable forest using NFTs and to be a platform that cultivates a sense of responsibility among the masses towards the environment.
						</Typography>
					</Box>
				</Grid>
				<Grid
					item
					xs={12}
					sm={2}
					md={1}
					lg={1}
					sx={{ display: { xs: "none", md: "block" } }}></Grid>
			</Grid>
		</>
	);
};

export default Mission;
