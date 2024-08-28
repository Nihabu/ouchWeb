import React from "react";
import { Box, ThemeProvider } from "@mui/system";
import theme from "./theme";
import { headerHeight } from "./vars";
import practiceList from "./teamOverview";

function MainBody(props) {
	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ bgcolor: "background.white", height: `calc(100vh - ${headerHeight})` }}>
				<Box className="main" sx={{ height: 1, display: "flex", flexDirection: "column", mx: 5 }}>
					<Box sx={{ color: "text.primary" }}>
						<h1>Welcome to the Oslo Ultimate Community Hub</h1>
						<p>Overview over practice times in the Oslo area</p>
					</Box>
					<Box>
						{practiceList.map((obj, i) => (
							<Box key={i}>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										justifyContent: "center",
										alignItems: "space-between",
										color: "text.secondary",
										background: `url(${obj.picture}) right`,
										backgroundRepeat: "no-repeat",
										backgroundSize: "350px",
										bgcolor: `${obj.color}`,
										minHeight: "150px",
										border: "1px solid rgba(0,0,0,0.1)",
										borderRadius: "5px",
										padding: "1rem",
										margin: "1rem 0",
									}}
								>
									<Box>
										<Box key={obj.team}>
											<b>Team:</b> {obj.team}
										</Box>
										<Box key={obj.location}>
											<b>Location:</b>{" "}
											<a
												target="_blank"
												rel="noopener noreferrer"
												href={obj.locationLink}
												style={{ color: "inherit" }}
											>
												{obj.location}
											</a>
										</Box>
										<b>Time:</b>
										{obj.time.split(",").map((time, idx) => (
											<Box style={{ padding: "0 0 0 1rem" }} key={idx}>
												{time}
											</Box>
										))}
										<Box key={obj.info}>
											<b>Information:</b> {obj.info}
										</Box>
									</Box>
								</Box>
							</Box>
						))}
					</Box>
				</Box>
			</Box>
		</ThemeProvider>
	);
}

export default MainBody;
