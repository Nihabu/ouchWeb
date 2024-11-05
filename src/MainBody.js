import React from "react";
import { Box, ThemeProvider } from "@mui/system";
import theme from "./theme";
import { headerHeight } from "./vars";
import InfoBox from "./InfoBox";
import UpcomingEvents from "./UpcomingEvents";

function MainBody(props) {
	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ bgcolor: "background.white", height: `calc(100vh - ${headerHeight})` }}>
				<Box
					className="main"
					sx={{
						height: 1,
						display: "flex",
						flexDirection: "column",
						mx: 5,
					}}
				>
					<Box sx={{ color: "text.primary" }}>
						<h1>Welcome to the Oslo Ultimate Community Hub</h1>
						<p>Overview over practice times in the Oslo area</p>
					</Box>
					<InfoBox />
					<UpcomingEvents />
				</Box>
			</Box>
		</ThemeProvider>
	);
}

export default MainBody;
