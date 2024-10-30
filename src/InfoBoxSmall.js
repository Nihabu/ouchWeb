import React from "react";
import { Box, ThemeProvider } from "@mui/system";
import theme from "./theme";
import teamList from "./teamOverview";

function InfoBoxSmall(props) {
	return (
		<ThemeProvider theme={theme}>
			{teamList.map((obj, i) => (
				<Box
					key={i}
					sx={{
						// display: "flex",
						// justifyContent: "space-start",
						// position: "relative",
						color: "text.secondary",
						bgcolor: `${obj.color}`,
						minHeight: 200,
						border: "1px solid rgba(0,0,0,0.1)",
						borderRadius: "5px",
						padding: "1rem",
						margin: "1rem 0",
						overflow: "auto",
					}}
				>
					<Box
						className="basic-social-wrapper"
						sx={{
							display: "flex",
							flexDirection: "row",
						}}
					>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								minWidth: 300,
								// marginRight: 5,
								overflow: "auto",
							}}
						>
							<div>
								<b>Team: </b> {obj.team}
							</div>
							<div>
								<b>Location: </b>{" "}
								<a
									target="_blank"
									rel="noopener noreferrer"
									href={obj.locationLink}
									style={{ color: "inherit" }}
								>
									{obj.location}
								</a>
							</div>
							<b>Times: </b>{" "}
							{obj.time.split(",").map((time, idx) => (
								<Box style={{ padding: "0 0 0 1rem" }} key={idx}>
									{time}
								</Box>
							))}
						</Box>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "start",
							}}
						>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={obj.website}
								style={{ color: "inherit", marginBottom: "-0.5rem" }}
							>
								{obj.website ? (
									<img src="\images\internet_icon.png" style={{ scale: "0.5" }} />
								) : (
									<img src="\images\internet_icon.png" style={{ scale: "0.5", opacity: 0.2 }} />
								)}
							</a>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={obj.instagram}
								style={{ color: "inherit", marginBottom: "-0.5rem" }}
							>
								{obj.instagram ? (
									<img src="\images\instagram_icon.png" style={{ scale: "0.5" }} />
								) : (
									<img src="\images\instagram_icon.png" style={{ scale: "0.5", opacity: 0.2 }} />
								)}
							</a>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={obj.facebook}
								style={{ color: "inherit", marginBottom: "-0.5rem" }}
							>
								{obj.facebook ? (
									<img src="\images\facebook_icon.png" style={{ scale: "0.5" }} />
								) : (
									<img src="\images\facebook_icon.png" style={{ scale: "0.5", opacity: 0.2 }} />
								)}
							</a>
						</Box>
					</Box>
					<Box
						className="information-wrapper"
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
						}}
					>
						<Box sx={{ marginTop: "1rem" }}>
							{obj.info ? <b>Information: </b> : ""}
							{obj.info}
						</Box>
					</Box>
				</Box>
			))}
		</ThemeProvider>
	);
}

export default InfoBoxSmall;
