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
						flexDirection: { xs: "column", sm: "row", md: "row", lg: "row", xl: "row" },
						justifyContent: "space-between",
						position: "relative",
						color: "text.secondary",
						bgcolor: `${obj.color}`,
						minHeight: { xs: 300, sm: 200, md: 180, lg: 150, xl: 150 },
						border: "1px solid rgba(0,0,0,0.1)",
						borderRadius: "5px",
						padding: "1rem",
						margin: "1rem 0",
						overflow: { xs: "auto", sm: "auto", md: "hidden", lg: "hidden", xl: "hidden" },
					}}
				>
					<Box
						className="basics-wrapper"
						sx={{
							display: "flex",
							flexDirection: "column",
							width: { xs: "90%", sm: "40%", md: "30%", lg: "20%", xl: "20%" },
							marginRight: 5,
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
						className="info-social-wrapper"
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							flexWrap: { xs: "", sm: "", md: "", lg: "wrap", xl: "wrap" },
							width: { xs: "90%", sm: "40%", md: "40%", lg: "40%", xl: "40%" },
						}}
					>
						<Box
							sx={{
								overflow: "auto",
								marginTop: { xs: "1rem", sm: "1rem", md: "", lg: "", xl: "" },
							}}
						>
							{obj.info ? <b>Information: </b> : ""}
							{obj.info}
						</Box>
						<Box
							className="some-buttons"
							sx={{
								display: "flex",
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
					<Box
						sx={{
							display: "flex",
							justifyContent: "end",
							width: { xs: 0, sm: "0", md: "40%", lg: "25%", xl: "25%" },
							height: { xs: 0, sm: "0", md: "100%", lg: "100%", xl: "100%" },
							visibility: { xs: "hidden", sm: "hidden", md: "visible", lg: "visible", xl: "visible" },
						}}
					>
						{obj.picture ? (
							<img
								src={images[obj.team]}
								alt={`${obj.team}`}
								style={{
									opacity: 0.6,
								}}
							></img>
						) : (
							" "
						)}
					</Box>
				</Box>
			))}
		</ThemeProvider>
	);
}

export default InfoBox;
