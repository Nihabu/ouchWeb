import React from "react";
import { Box, ThemeProvider } from "@mui/system";
import { NavLink } from "react-router-dom";
import theme from "./theme";
import logo from "./images/OUCH_Logo.jpg";

function Header(props) {
	return (
		<ThemeProvider theme={theme}>
			<Box
				className="Header-container"
				sx={{
					bgcolor: "background.white",
					color: "logoColors.blue",
					height: props.headerHeight,
					display: "flex",
					justifyContent: "left",
				}}
			>
				<NavLink to="/ouchWeb" style={{ width: 0 }}>
					<img
						className="logo"
						src={logo}
						alt="OUCH Logo"
						style={{
							height: "100%",
						}}
					/>
				</NavLink>
				<Box
					className="Button-container"
					sx={{
						display: "flex",
						justifyContent: "space-evenly",
						alignItems: "center",
						width: "100%",
					}}
				>
					<NavLink
						to="/ouchWeb"
						style={({ isActive }) => {
							return {
								color: isActive ? "#E47313" : "#03B7D0",
								fontWeight: isActive ? "bold" : "",
								textDecoration: isActive ? "underline" : "none",
							};
						}}
					>
						Home
					</NavLink>
					<NavLink
						to="/news"
						style={({ isActive }) => {
							return {
								color: isActive ? "#E47313" : "#03B7D0",
								fontWeight: isActive ? "bold" : "",
								textDecoration: isActive ? "underline" : "none",
							};
						}}
					>
						News
					</NavLink>
					<NavLink
						to="/resources"
						style={({ isActive }) => {
							return {
								color: isActive ? "#E47313" : "#03B7D0",
								fontWeight: isActive ? "bold" : "",
								textDecoration: isActive ? "underline" : "none",
							};
						}}
					>
						Resources
					</NavLink>
					<NavLink
						to="/ouch"
						style={({ isActive }) => {
							return {
								color: isActive ? "#E47313" : "#03B7D0",
								fontWeight: isActive ? "bold" : "",
								textDecoration: isActive ? "underline" : "none",
							};
						}}
					>
						OUCH
					</NavLink>
				</Box>
			</Box>
		</ThemeProvider>
	);
}

export default Header;
