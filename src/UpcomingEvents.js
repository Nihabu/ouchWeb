import React from "react";
import { Box, ThemeProvider } from "@mui/system";
import theme from "./theme";
import eventsList from "./upcomingEventsList";

function UpcomingEvents(props) {
	return (
		<ThemeProvider theme={theme}>
			<h1>Upcoming events</h1>
			{eventsList.map((obj, i) => (
				<Box
					key={i}
					sx={{
						display: "flex",
						justifyContent: "space-start",
						position: "relative",
						color: "text.secondary",
						minHeight: 150,
						border: "1px solid rgba(0,0,0,0.1)",
						borderRadius: "5px",
						padding: "0 1rem",
						margin: "1rem 0",
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
									{obj.location}, Oslo
								</a>
							</div>
						</Box>
						<div className="event-info" style={{ marginTop: "1rem" }}>
							{obj.info}
						</div>
					</Box>
				</Box>
			))}
		</ThemeProvider>
	);
}

export default UpcomingEvents;
