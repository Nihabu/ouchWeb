import React from "react";
import { ThemeProvider, Box } from "@mui/system";
import theme from "./theme";
import { headerHeight } from "./vars";
import President from "./images/OUCHPresident.jpg";
import Secretary from "./images/OUCHSecretary.jpeg";
import SoMe from "./images/OUCHSoMe.jpeg";
import SoMe2 from "./images/OUCHSoMe2.jpeg";
import Outdoor from "./images/OUCHOutdoor.jpeg";
import Website from "./images/OUCHWebsite.jpeg";
import ClubRep_Brickers from "./images/ClubRep_Brickers.jpeg";
import ClubRep_Ekeberg from "./images/ClubRep_Ekeberg.jpeg";
import ClubRep_OSI from "./images/ClubRep_OSI.jpeg";
import ClubRep_Pancake from "./images/ClubRep_Pancake.jpeg";

function OUCH(props) {
	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ bgcolor: "background.white", height: `calc(100vh - ${headerHeight})` }}>
				<Box className="main" sx={{ height: 1, display: "flex", flexDirection: "column", mx: 5 }}>
					<Box sx={{ color: "text.primary" }}>
						<h1>What is OUCH?</h1>
					</Box>
					<Box sx={{ color: "text.secondary" }}>
						<p>
							The Oslo Ultimate Community Hub (OUCH) intends to build a growing, connected Ultimate
							Frisbee community around Oslo.
						</p>
						<p>
							It should serve as a communication link between the clubs and the overarching Norwegian
							Ultimate Commitee, as well as a resource hub for the clubs.
						</p>
						<h3> The Board </h3>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-evenly",
								gap: "1rem",
								flexWrap: "wrap",
							}}
						>
							<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
								<img
									style={{ width: "200px", height: "200px", borderRadius: "50%" }}
									src={President}
									alt="OUCH President"
								></img>
								<p>President: Daniel</p>
							</Box>
							<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
								<img
									style={{ width: "200px", height: "200px", borderRadius: "50%" }}
									src={Secretary}
									alt="secretary"
								></img>
								<p>Secretary: Kate</p>
							</Box>
							<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
								<img
									style={{ width: "200px", height: "200px", borderRadius: "50%" }}
									src={SoMe}
									alt="some"
								></img>
								<p>Social Media: Ricarda</p>
							</Box>
							<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
								<img
									style={{ width: "200px", height: "200px", borderRadius: "50%" }}
									src={SoMe2}
									alt="some2"
								></img>
								<p>Social Media: Justyna</p>
							</Box>
							<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
								<img
									style={{ width: "200px", height: "200px", borderRadius: "50%" }}
									src={Outdoor}
									alt="outdoor"
								></img>
								<p>Outdoor Coordinator: Daniel</p>
							</Box>
							<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
								<img
									style={{ width: "200px", height: "200px", borderRadius: "50%" }}
									src={Website}
									alt="website"
								></img>
								<p>Website Director: Henrik</p>
							</Box>
						</Box>
						<h3>The Club Representatives</h3>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-evenly",
								gap: "1rem",
								flexWrap: "wrap",
							}}
						>
							<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
								<img
									style={{ width: "200px", height: "200px", borderRadius: "50%" }}
									src={ClubRep_Ekeberg}
									alt="ekeberg"
								></img>
								<p>Ekeberg: Alexandre</p>
							</Box>
							<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
								<img
									style={{ width: "200px", height: "200px", borderRadius: "50%" }}
									src={ClubRep_OSI}
									alt="osi"
								></img>
								<p>OSI: Sveinn</p>
							</Box>
							<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
								<img
									style={{ width: "200px", height: "200px", borderRadius: "50%" }}
									src={ClubRep_Pancake}
									alt="pancake"
								></img>
								<p>Pancake: Juan</p>
							</Box>
							<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
								<img
									style={{ width: "200px", height: "200px", borderRadius: "50%" }}
									src={ClubRep_Brickers}
									alt="brickers"
								></img>
								<p>Brickers: Alexander</p>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</ThemeProvider>
	);
}

export default OUCH;
