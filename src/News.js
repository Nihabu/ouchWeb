import React from "react";
import { ThemeProvider, Box } from "@mui/system";
import theme from "./theme";
import { headerHeight } from "./vars";
import NewsBox from "./NewsBox";

function News(props) {
	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ bgcolor: "background.white", height: `calc(100vh - ${headerHeight})` }}>
				<Box className="main" sx={{ height: 1, display: "flex", flexDirection: "column", mx: 5 }}>
					<h1>NEWS</h1>
					<NewsBox />
				</Box>
			</Box>
		</ThemeProvider>
	);
}

export default News;
