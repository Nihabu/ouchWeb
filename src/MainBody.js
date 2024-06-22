import React from "react";
import { Box, ThemeProvider } from "@mui/system";
import theme from "./theme";
import { headerHeight } from "./vars";

function MainBody(props) {
	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ bgcolor: "background.blue", height: `calc(100vh - ${headerHeight})` }}>
				<Box className="main" sx={{ height: 1, display: "flex", flexDirection: "column", mx: 5 }}>
					<Box sx={{ color: "text.primary" }}>
						<h1>Welcome to the Oslo Ultimate Community Hub</h1>
					</Box>
					<Box sx={{ color: "text.secondary" }}>
						<p>Let's go</p>
					</Box>
				</Box>
			</Box>
		</ThemeProvider>
	);
}

export default MainBody;
