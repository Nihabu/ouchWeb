import React from "react";
import { ThemeProvider, Box } from "@mui/system";
import theme from "./theme";
import { headerHeight } from "./vars";

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
							It should serve as a communication link between the clubs and the overarching Norwegian Ultimate
							Commitee, as well as a resource hub for the clubs.
						</p>
						<h3> The Board </h3>
						<Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
							<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
								<img
									style={{ width: "200px", height: "200px", borderRadius: "50%" }}
									src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.L8YB2Bg0TO_vlaiZlMJjzQHaFy%26pid%3DApi&f=1&ipt=750204ae2b4ecc4c8bc03a1978f9d055b8ef1eadaefa60cc765167bb57fc3ec9&ipo=images"
									alt="Board member 1"
								></img>
								<p>President Daniel</p>
							</Box>
							<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
								<img
									style={{ width: "200px", height: "200px", borderRadius: "50%" }}
									src="/images/OUCHSecretary.jpeg"
									alt="secretary"
								></img>
								<p>Secretary Kate</p>
							</Box>
							<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
								<img
									style={{ width: "200px", height: "200px", borderRadius: "50%" }}
									src="/images/OUCHSoMe.jpeg"
									alt="some"
								></img>
								<p>Social Media Ricarda</p>
							</Box>
							<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
								<img
									style={{ width: "200px", height: "200px", borderRadius: "50%" }}
									src="/images/OUCHSoMe2.jpeg"
									alt="some2"
								></img>
								<p>Social Media Justyna</p>
							</Box>
							<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
								<img
									style={{ width: "200px", height: "200px", borderRadius: "50%" }}
									src="/images/OUCHOutdoor.jpeg"
									alt="outdoor"
								></img>
								<p>Outdoor Coordinator Daniel</p>
							</Box>
							<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
								<img
									style={{ width: "200px", height: "200px", borderRadius: "50%" }}
									src="/images/OUCHWebsite.jpeg"
									alt="website"
								></img>
								<p>Website Director Henrik</p>
							</Box>
						</Box>
						<h3>The Club Representatives</h3>
						<Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
							<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
								<img
									style={{ width: "200px", height: "200px", borderRadius: "50%" }}
									src="/images/ClubRep_Ekeberg.jpeg"
									alt="ekeberg"
								></img>
								<p>Ekeberg: Alexandre</p>
							</Box>
							<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
								<img
									style={{ width: "200px", height: "200px", borderRadius: "50%" }}
									src="/images/ClubRep_OSI.jpeg"
									alt="osi"
								></img>
								<p>OSI: Sveinn</p>
							</Box>
							<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
								<img
									style={{ width: "200px", height: "200px", borderRadius: "50%" }}
									src="/images/ClubRep_Pancake.jpeg"
									alt="pancake"
								></img>
								<p>Pancake: Juan</p>
							</Box>
							<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
								<img
									style={{ width: "200px", height: "200px", borderRadius: "50%" }}
									src="/images/ClubRep_Brickers.jpeg"
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
