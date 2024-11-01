import React from "react";
import { Box, ThemeProvider } from "@mui/system";
import theme from "./theme";
import teamList from "./teamOverview";
import internet_icon from "./images/internet_icon.png";
import instagram_icon from "./images/instagram_icon.png";
import facebook_icon from "./images/facebook_icon.png";
import Ekeberg_Team_Picture from "./images/Ekeberg_Team_Picture.jpg";
import Baerum_Team_Picture from "./images/Baerum_Team_Picture.jpg";
import OSI_Team_Picture from "./images/OSI_Team_Picture.jpg";
import Pancake_Team_Picture from "./images/Pancake_Team_Picture.jpg";
import Brickers_Team_Picture from "./images/Brickers_Team_Picture.jpg";

function InfoBox(props) {
	const images = {
		Ekeberg: Ekeberg_Team_Picture,
		Bærum: Baerum_Team_Picture,
		OSI: OSI_Team_Picture,
		Pancake: Pancake_Team_Picture,
		Brickers: Brickers_Team_Picture,
	};
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

							width: "20%",
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
									<img src={internet_icon} style={{ scale: "0.5" }} alt="internet icon" />
								) : (
									<img
										src={internet_icon}
										style={{ scale: "0.5", opacity: 0.2 }}
										alt="internet icon"
									/>
								)}
							</a>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={obj.instagram}
								style={{ color: "inherit" }}
							>
								{obj.instagram ? (
									<img src={instagram_icon} style={{ scale: "0.5" }} alt="instagram icon" />
								) : (
									<img
										src={instagram_icon}
										style={{ scale: "0.5", opacity: 0.2 }}
										alt="instagram icon"
									/>
								)}
							</a>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={obj.facebook}
								style={{ color: "inherit" }}
							>
								{obj.facebook ? (
									<img src={facebook_icon} style={{ scale: "0.5" }} alt="facebook icon" />
								) : (
									<img
										src={facebook_icon}
										style={{ scale: "0.5", opacity: 0.2 }}
										alt="facebook icon"
									/>
								)}
							</a>
						</Box>
					</Box>
					{obj.picture ? (
						<Box
							sx={{
								display: "flex",
								justifyContent: "end",
								width: "25%",
							}}
						>
							<img
								src={images[obj.team]}
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
