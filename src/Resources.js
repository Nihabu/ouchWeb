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
					<Box className="ultical">
						<h3>Tournaments around the world</h3>
						<iframe
							title="ultical"
							src="https://ultical.com/embed/map/events/?sidebar=1"
							width="1240"
							height="640"
							loading="lazy"
						></iframe>
					</Box>
					<Box className="youtube-whatisultimate">
						<h3>Instructional videos</h3>
						<iframe
							width="600"
							height="400"
							src="https://www.youtube.com/embed/PrinnxHyWlo?si=_KnIVg0hNRnytCd0"
							title="YouTube video player"
							frameBorder="1"
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
