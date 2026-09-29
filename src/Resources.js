import React from "react";
import { ThemeProvider, Box } from "@mui/system";
import theme from "./theme";

function Resources(props) {
	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ bgcolor: "background.white", color: "text.primary" }}>
				<Box className="main" sx={{ mx: 5, pb: 6 }}>
					<h1>Resources</h1>
					<Box
						sx={{
							display: "grid",
							gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
							columnGap: 6,
							rowGap: 4,
							alignItems: "start",
						}}
					>
						<Box>
							<Box className="Spond">
								<h3>The Oslo Ultimate Spond Group</h3>
								<p>
									Many sports are organized using the app Spond, and Ultimate is no exception. 
									The Oslo Ultimate Spond group is the main source of information for community trainings and pickup! 
									Please click the link below to request access to the group for details on upcoming trainings and pickup games.
								</p>
								<p>
									<a 
										target="_blank"
										rel="noopener noreferrer"
										href="https://spond.com/landing/group/STNIV"
									>
										Spond link.
									</a>
								</p>
							</Box>
							{/* <Box className="googlegroup">
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
							</Box> */}
							<Box className="urules">
								<h3>The Rules of Ultimate</h3>
								<p>
									There are severeal resources for learning the rules of Ultimate. The most official one is rules.wfdf.org.
									<br></br> For a more user-friendly version with a search function, see www.urules.org.

								</p>
								{ <p>
									For the rules of Ultimate, we recommend using{" "}
									<a target="_blank" rel="noopener noreferrer" href="https://urules.org/">
										THIS
									</a>{" "}
									great webpage, courtesy of the legend Steinar.
								</p> }
							</Box>
							<Box>
								<h3>The Norwegian-American Sports Association (NAIF)</h3>
								<p>NAIF is the top level for all things disc sport in Norway, incl. Discgolf and Ultimate.<br></br>
									For official news see the{" "}
									<a target="_blank" rel="noopener noreferrer" href="https://amerikanskeidretter.no/disksport/ultimate/">
										NAIF website
									</a>{" "}.
								</p>
							</Box>
							<Box className="pickup">
								<h3>Pickup games</h3>
								<p>
									PickupUltimate.com maps pickup games around the world. Open the map at{" "}
									<a target="_blank" rel="noopener noreferrer" href="https://pickupultimate.com/">
										PickupUltimate.com
									</a>
									.
								</p>
							</Box>
						</Box>
						<Box>
							<Box
								className="youtube-whatisultimate"
								sx={{ display: "flex", flexDirection: "column", gap: 2 }}
							>
								<h3>Instructional videos</h3>
								<iframe 
									src="https://www.youtube.com/embed/Ubv516MmCX0?si=RtFqsJa-G5J1753_" 
									title="YouTube video player" 
									frameBorder="0" 
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
									referrerPolicy="strict-origin-when-cross-origin" 
									allowFullScreen
									style={{ width: "100%", aspectRatio: "16 / 9" }}
								></iframe>
								<iframe
									src="https://www.youtube.com/embed/PrinnxHyWlo?si=_KnIVg0hNRnytCd0"
									title="YouTube video player"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									referrerPolicy="strict-origin-when-cross-origin"
									style={{ width: "100%", aspectRatio: "16 / 9" }}
								></iframe>
							</Box>
							<Box className="ultical" sx={{ mt: 2 }}>
								<h3>Tournaments around the world</h3>
								<iframe
									title="ultical"
									src="https://ultical.com/embed/map/events/?sidebar=0"
									frameBorder="0"
									loading="lazy"
									style={{ width: "100%", height: "28rem" }}
								></iframe>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</ThemeProvider>
	);
}

export default Resources;
