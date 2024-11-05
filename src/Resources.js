import React from "react";
import { ThemeProvider, Box } from "@mui/system";
import theme from "./theme";
import { headerHeight } from "./vars";

function Resources(props) {
	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ bgcolor: "background.white", height: `calc(100vh - ${headerHeight})` }}>
				<Box className="main" sx={{ height: 1, display: "flex", flexDirection: "column", mx: 5 }}>
					<Box sx={{ color: "text.primary" }}>
						<h1>Resources</h1>
					</Box>
					<Box
						className="ultical"
						sx={{
							width: "100%",
							height: "100%",
							marginBottom: "5rem",
						}}
					>
						<h3>Tournaments around the world</h3>
						<iframe
							title="ultical"
							src="https://ultical.com/embed/map/events/?sidebar=1"
							width="100%"
							height="100%"
							frameBorder="0"
							loading="lazy"
						></iframe>
					</Box>
					<Box
						className="youtube-whatisultimate"
						sx={{
							width: "50vw",
							height: "100%",
						}}
					>
						<h3>Instructional videos</h3>
						<iframe
							width="100%"
							height="100%"
							src="https://www.youtube.com/embed/PrinnxHyWlo?si=_KnIVg0hNRnytCd0"
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerPolicy="strict-origin-when-cross-origin"
						></iframe>
					</Box>
				</Box>
			</Box>
		</ThemeProvider>
	);
}

export default Resources;
