import React from "react";
import { ThemeProvider, Box } from "@mui/system";
import theme from "./theme";
import { headerHeight } from "./vars";

function Resources(props) {
	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ bgcolor: "background.blue", height: `calc(100vh - ${headerHeight})` }}>
				<Box className="main" sx={{ height: 1, display: "flex", flexDirection: "column", mx: 5 }}>
					<Box sx={{ color: "text.primary" }}>
						<h1>Resources</h1>
					</Box>
					<Box sx={{ color: "text.secondary" }}>
						<p>This is where I'd put my resources, if I had any... </p>
					</Box>
				</Box>
			</Box>
		</ThemeProvider>
	);
}

export default Resources;
