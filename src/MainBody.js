import React from "react";
import { Box, ThemeProvider } from "@mui/system";
import theme from "./theme";
import InfoBox from "./InfoBox";
import UpcomingEvents from "./UpcomingEvents";
import teamList from "./teamOverview";

function MainBody(props) {
	return (
		<ThemeProvider theme={theme}>
<<<<<<< HEAD
			<Box sx={{ color: "text.primary", mx: 5 }}>
				<h1>Welcome to the Oslo Ultimate Community Hub</h1>
				<p>The place where you find information regarding Ultimate Frisbee in Oslo, Norway.</p>
			</Box>
			<Box
				sx={{
					bgcolor: "background.white",
					display: "flex",
					flexDirection: { xs: "column", sm: "column", md: "column", lg: "row", xl: "row" },
					mx: 5,
				}}
			>
				<Box
					className="main"
					sx={{
						height: 1,
						display: "flex",
						flexDirection: "column",
						maxWidth: { xs: "100vw", sm: "100vw", md: "100vw", lg: "70vw", xl: "70vw" },
					}}
				>
					<h2>Overview over practice times in the Oslo area</h2>
=======
			<Box sx={{ bgcolor: "background.white", height: `calc(100vh - ${headerHeight})` }}>
				<Box className="main" sx={{ height: 1, display: "flex", flexDirection: "column", mx: 5 }}>
					<Box sx={{ color: "text.primary" }}>
						<h1>Welcome to the Oslo Ultimate Community Hub</h1>
						<p>The place where you find information regarding Ultimate Frisbee in Oslo, Norway.</p>
					</Box>
					<h3>Overview over practice times in the Oslo area</h3>
>>>>>>> fded3be9cf4c850007aba6332088742bc698dd4c
					<InfoBox />
				</Box>
				<UpcomingEvents />
			</Box>
		</ThemeProvider>
	);
}

export default MainBody;
