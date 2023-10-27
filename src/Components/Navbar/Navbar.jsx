import React, { useState, useEffect } from "react";
import { Routes, Route,useNavigate } from "react-router-dom";
import Home from "../Home/Home";
import Kyc from "../Kyc/Kyc";
// import Kyc from
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo1 from "/logo_colored.png";
import "../Navbar/Navbar.css";
import Button from "@mui/material/Button";

const drawerWidth = 240;

export default function Navbar() {
	const navigate = useNavigate();
	const navItems = ["Home", "About", "Contact", "Mission"];

	const [mobileOpen, setMobileOpen] = React.useState(false);
	const [scroll, setScroll] = useState(false);
	const [isLogin, setIsLogin] = useState(false);
	// const [isMouseEnter, setIsMouseEnter] = useState(false);

	const scrolling = () => {
		window.scrollY >= 2 ? setScroll(true) : setScroll(false);
	};
	window.addEventListener("scroll", scrolling);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
		if (isMouseEnter) setIsMouseEnter(false);
	};

	const handleMouseEnter = () => {
		// console.log(`mouse enters`);
		setIsMouseEnter(true);
	};
	const handleMouseLeave = () => {
		// console.log(`mouse leaves`);
		setIsMouseEnter(false);
		setMobileOpen(false);
	};

	const handleSidebarClick = (event) => {
		// console.log(event.target);
		const clickedElement = event.target;
		if (!clickedElement.classList.contains("solutionLink")) {
			setIsMouseEnter(false);
		}
	};

	const handleLogin=()=>{
		setIsLogin(!isLogin)
	}

	const drawer = (
		<Box
			sx={{
				textAlign: "center",
				zIndex: "20",
			}}
			id="sidebar">
			<Typography variant="h6" sx={{ my: 2 }}>
				<img
					src={logo1}
					alt=""
					style={{
						height: "5rem",
						marginTop: ".5rem",
					}}
				/>
			</Typography>
			<Divider />
			<List>
				{navItems.map((item, index) => (
					<ListItem key={index} disablePadding>
						<div
							style={{
								padding: "10px",
								margin: "auto",
							}}>
							<a
								href={`#${item.toLowerCase()}`}
								className="navbarLinks otherLinks"
								onClick={handleDrawerToggle}
								style={{ color: "black" }}
							>
								{item}
							</a>
						</div>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<>
			<Box sx={{ display: "flex" }}>
				<CssBaseline />
				<AppBar
					component="nav"
					sx={{
						// border: '2px solid red',
						zIndex: 10,
						boxShadow: "none",
						// background: scroll ? "#343A4B" : "transparent",
						background: "#EBF3E8",
						position: "fixed",
						top: 0,
					}}>
					<Toolbar>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="start"
							onClick={handleDrawerToggle}
							sx={{
								mr: 2,
								display: { sm: "none" },
								color: "white",
							}}>
							<MenuIcon />
						</IconButton>
						<Grid container
							sx={{
								// border: '2px solid red',
								width: "100%",
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
							}}>
							<Grid item
								xs={4}
								sx={{
									// border: '2px solid red',
									display: { xs: "none", sm: "block" },
									width: { sm: "70%", md: "50%" },
								}}>
								<Box
									sx={{
										width: "100%",
										display: "flex",
										justifyContent: "space-around",
										alignItems: "center",
									}}>
									{navItems.map((item, index) => {
										return (
											<>
												{console.log(item)}
												<div
													key={index}
													style={{
														display: "flex",
														alignItems: "center",
													}}>
													<a
														href={`#${item.toLowerCase()}`}
														className="navbarLinks"
													// style={{ color: "white" }}
													>
														{item}
													</a>
												</div>
											</>
										)
									})}
								</Box>
							</Grid>
							<Grid item xs={4}
								component="div"
								sx={{
									display: { xs: "none", sm: "block" },
									textAlign: "center",
									// ml: { sm: 0, md: 4 },
								}}
								className="navbarTitle">
								<a href="#home">
									<img
										src={logo1}
										alt=""
										style={{
											height: "3rem",
											margin: 'auto',
											marginTop: ".5rem",
										}}
										id="navbarLogo"
									/>
								</a>
							</Grid>

							<Grid item xs={4} sx={{
								display: 'flex',
								justifyContent: 'flex-end',
								gap: '1rem',
								padding: '0 1rem'
							}}>
								{
									isLogin ?
										<Button variant="contained" onClick={()=>navigate('/kyc')}>Complete KYC</Button>
										:
										<>
											<Button variant="outlined" onClick={handleLogin}>Signin</Button>
											<Button variant="contained" onClick={handleLogin}>Signup</Button>
										</>
								}
							</Grid>

						</Grid>
						{/* <LanguageSelect lang={lang} setLang={setLang} /> */}
					</Toolbar>
				</AppBar>
				<Box component="nav">
					<Drawer
						variant="temporary"
						open={mobileOpen}
						onClose={handleDrawerToggle}
						ModalProps={{
							keepMounted: true,
						}}
						onClick={handleSidebarClick}
						sx={{
							display: { xs: "block", sm: "none" },
							"& .MuiDrawer-paper": {
								boxSizing: "border-box",
								width: drawerWidth,
							},
						}}>
						{drawer}
					</Drawer>
				</Box>
			</Box>

			<Routes>
				<Route index element={<Home />} />
				<Route path="/" element={<Home />} />
				{/* <Route path="/login" element={<Login />} /> */}
				<Route path="kyc" element={<Kyc />} />
				{/* <Route path="*" element={<NoPage />} /> */}
			</Routes>
		</>
	);
}

