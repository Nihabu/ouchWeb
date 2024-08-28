import React from "react";
import { ThemeProvider, Box } from "@mui/system";
import theme from "./theme";
import { headerHeight } from "./vars";

function News(props) {
	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ bgcolor: "background.white", height: `calc(100vh - ${headerHeight})` }}>
				<Box className="main" sx={{ height: 1, display: "flex", flexDirection: "column", mx: 5 }}>
					<Box sx={{ color: "text.primary" }}>
						<h1>News</h1>
					</Box>
					<Box sx={{ color: "text.secondary" }}>
						<p>In other news...</p>
					</Box>
				</Box>
			</Box>
		</ThemeProvider>
	);
}

export default News;
