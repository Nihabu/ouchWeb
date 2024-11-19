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
					<Box className="googlegroup">
						<h3>The OUCH Google Group</h3>
						<p>
							Not everyone is on social media, and information often gets lost when posted on several
							different platforms. This is why we've created an email-newsletter. All important
							information about Ultimate in Oslo will be shared in the newsletter.
						</p>
						<p>
							Join{" "}
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://groups.google.com/g/oslo-ultimate"
							>
								HERE
							</a>{" "}
							for official updates per email.
						</p>
					</Box>

					<Box
						className="ultical"
						sx={{
							width: "80%",
							height: "100%",
							marginBottom: "5rem",
						}}
					>
						<h3>Tournaments around the world</h3>
						<iframe
							title="ultical"
							src="https://ultical.com/embed/map/events/?sidebar=0"
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
