import React from "react";
import { Box, ThemeProvider } from "@mui/system";
import theme from "./theme";
import teamList from "./teamOverview";

function InfoBox(props) {
	return (
		<ThemeProvider theme={theme}>
			{teamList.map((obj, i) => (
				<Box
					key={i}
					sx={{
						display: "flex",
						justifyContent: "space-between",
						position: "relative",
						color: "text.secondary",
						bgcolor: `${obj.color}`,
						minHeight: 150,
						border: "1px solid rgba(0,0,0,0.1)",
						borderRadius: "5px",
						padding: "1rem",
						margin: "1rem 0",
						overflow: "hidden",
					}}
				>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							width: "15%",
							marginRight: 5,
							overflow: "auto",
						}}
					>
						<div>
							<b>Team: </b> {obj.team}
						</div>
						<div>
							<b>Location: </b>{" "}
							{obj.location.map((loc, i) => (
								<a
									target="_blank"
									rel="noopener noreferrer"
									href={obj.locationLink[i]}
									style={{ color: "inherit" }}
									key={i}
								>
									{obj.location[i]}
									<br />
								</a>
							))}
						</div>
						<b>Times: </b>{" "}
						{obj.time.split(",").map((time, idx) => (
							<Box style={{ padding: "0 0 0 1rem" }} key={idx}>
								{time}
							</Box>
						))}
					</Box>
					<Box
						className="info_social_wrapper"
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							flexWrap: "wrap",
							width: "40%",
						}}
					>
						<Box
							sx={{
								maxWidth: 500,
								maxHeight: 200,
								overflow: "auto",
							}}
						>
							{obj.info ? <b>Information: </b> : ""}
							{obj.info}
						</Box>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "start",
							}}
						>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={obj.website}
								style={{ color: "inherit" }}
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
								style={{ color: "inherit" }}
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
								style={{ color: "inherit" }}
							>
								{obj.facebook ? (
									<img src="\images\facebook_icon.png" style={{ scale: "0.5" }} />
								) : (
									<img src="\images\facebook_icon.png" style={{ scale: "0.5", opacity: 0.2 }} />
								)}
							</a>
						</Box>
					</Box>
					{obj.picture ? (
						<Box
							sx={{
								width: "25%",
								display: "flex",
								justifyContent: "end",
							}}
						>
							<img
								src={obj.picture}
								alt={`${obj.team}`}
								style={{
									opacity: 0.6,
								}}
							></img>
						</Box>
					) : (
						" "
					)}
				</Box>
			))}
		</ThemeProvider>
	);
}

export default InfoBox;
