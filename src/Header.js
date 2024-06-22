import React from "react";
import { Box, ThemeProvider, unstable_styleFunctionSx } from "@mui/system";
import { NavLink } from "react-router-dom";
import theme from "./theme";

function Header(props) {
	return (
		<ThemeProvider theme={theme}>
			<Box
				className="Header-container"
				sx={{
					bgcolor: "background.blue",
					color: "logoColors.blue",
					height: props.headerHeight,
					display: "flex",
				}}
			>
				<NavLink to="/">
					<img
						className="logo"
						src="https://scontent.fosl3-1.fna.fbcdn.net/v/t39.30808-6/441951914_122110706396314563_2080403929050843264_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=qVZWTroUZxgQ7kNvgFr2cwY&_nc_ht=scontent.fosl3-1.fna&oh=00_AYBl4ytWB3edWT0d2v_ht9jYmATov5jc__eRLUqe3sX0Ww&oe=6679D9A2"
						alt="OUCH Logo"
						style={{ height: "100%" }}
					/>
				</NavLink>
				<Box
					className="Button-container"
					sx={{
						display: "flex",
						justifyContent: "space-evenly",
						alignItems: "center",
						width: 1,
					}}
				>
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
