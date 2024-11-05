import React from "react";
import { Box, ThemeProvider } from "@mui/system";
import theme from "./theme";
import eventsList from "./upcomingEventsList";

function UpcomingEvents(props) {
	return (
		<ThemeProvider theme={theme}>
			<Box
				sx={{
					margin: { xs: "1rem 0", sm: "1rem 0", md: "1rem 0", lg: "0 2rem", xl: "0 2rem" },
				}}
			>
				<h2 style={{ marginBottom: "36px" }}>Upcoming events</h2>
				<Box
					sx={{
						border: "1px solid rgba(0,0,0,0.1)",
						borderRadius: "5px",
						background: "rgba(0,0,0,0.05)",
					}}
				>
					{eventsList.map((obj, i) => (
						<Box
							key={i}
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-start",
								position: "relative",
								color: "text.secondary",
								minHeight: { xs: 300, sm: 200, md: 180, lg: 150, xl: 150 },
								padding: "0 1rem",
								margin: "0 0 2rem 0",
							}}
						>
							<Box>
								<div className="event-title">
									<h2>{obj.title}</h2>
								</div>
								<Box className="date-location-wrapper" sx={{ display: "flex", flexDirection: "row" }}>
									<div className="event-date" style={{ marginRight: "2rem" }}>
										<b>Date: </b>
										{obj.date}
									</div>
									<div>
										<b>Location: </b>{" "}
										<a
											target="_blank"
											rel="noopener noreferrer"
											href={obj.locationLink}
											style={{ color: "inherit" }}
											key={i}
										>
											{obj.location}
										</a>
									</div>
								</Box>
								<div className="event-info" style={{ marginTop: "1rem" }}>
									{obj.info}
								</div>
							</Box>
						</Box>
					))}
				</Box>
			</Box>
		</ThemeProvider>
	);
}

export default UpcomingEvents;
