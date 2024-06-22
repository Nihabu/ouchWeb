import React from "react";
import { ThemeProvider, Box } from "@mui/system";
import theme from "./theme";
import { headerHeight } from "./vars";

function OUCH(props) {
	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ bgcolor: "background.blue", height: `calc(100vh - ${headerHeight})` }}>
				<Box className="main" sx={{ height: 1, display: "flex", flexDirection: "column", mx: 5 }}>
					<Box sx={{ color: "text.primary" }}>
						<h1>What is OUCH?</h1>
					</Box>
					<Box sx={{ color: "text.secondary" }}>
						<p>
							The Oslo Ultimate Community Hub (OUCH) intends to build a growing, connected Ultimate
							Frisbee community around Oslo.
						</p>
						<h3> The Board </h3>
						<Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
							<img
								style={{ width: "100px", height: "100px", borderRadius: "50%" }}
								src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fd%2Fd4%2FCat_March_2010-1a.jpg&f=1&nofb=1&ipt=9bd63eb8df1971602b27bd227acd1e8b2c756414cb6d5cbd995dea83a0e2440e&ipo=images"
								alt="Board member 1"
							></img>
							<img
								style={{ width: "100px", height: "100px", borderRadius: "50%" }}
								src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp2235452.jpg&f=1&nofb=1&ipt=80baa8d9370d3b3182d429108788f8013eccd77629343094798cc56fd0c0fb5b&ipo=images"
								alt="Board member 2"
							></img>
							<img
								style={{ width: "100px", height: "100px", borderRadius: "50%" }}
								src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F-ObSozDbcGRo%2FVGakFeu1ohI%2FAAAAAAAAEGs%2FCN9bQ0cNcXU%2Fs1600%2Fscared-cat.jpg&f=1&nofb=1&ipt=46cf2c891aa3d0647285516597b5c5500410913013649871a38bb0184f32d936&ipo=images"
								alt="Board member 2"
							></img>
							<img
								style={{ width: "100px", height: "100px", borderRadius: "50%" }}
								src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F76%2F91%2F4e%2F76914e0564895885e8c921911c217dba.jpg&f=1&nofb=1&ipt=e3540f31dd3f4acba7436d2aa47a57d0a3f9a8700bb6b673dbfb25f97d55c454&ipo=images"
								alt="Board member 2"
							></img>
						</Box>
						<h3>The Club Representatives</h3>
						<Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
							<img
								style={{ width: "100px", height: "100px", borderRadius: "50%" }}
								src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.L8YB2Bg0TO_vlaiZlMJjzQHaFy%26pid%3DApi&f=1&ipt=750204ae2b4ecc4c8bc03a1978f9d055b8ef1eadaefa60cc765167bb57fc3ec9&ipo=images"
								alt="Board member 1"
							></img>
							<img
								style={{ width: "100px", height: "100px", borderRadius: "50%" }}
								src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.listbark.com%2Fwp-content%2Fuploads%2F2019%2F12%2FFunny-Animal.jpg&f=1&nofb=1&ipt=cb06cc95e412aa022e4b7624aa71efda14f5b4b3a8258d0ddbe57493a7936880&ipo=images"
								alt="Board member 2"
							></img>
							<img
								style={{ width: "100px", height: "100px", borderRadius: "50%" }}
								src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.saymedia-content.com%2F.image%2Ft_share%2FMTc2NDU5Njk3NDU1OTY2MTcw%2Ftop-10-most-funny-looking-animals-in-the-world.jpg&f=1&nofb=1&ipt=026fd74948eb2c4fbea51d2dc3934c26329bec48584f796ccd7e2cd7045d653c&ipo=images"
								alt="Board member 2"
							></img>
							<img
								style={{ width: "100px", height: "100px", borderRadius: "50%" }}
								src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages5.fanpop.com%2Fimage%2Fphotos%2F29000000%2FFunny-Animals-animal-humor-29016382-1920-1080.jpg&f=1&nofb=1&ipt=3acd255798acc4c20eb17d62befbe841b56410b387c7216ba7cffee7eba03b31&ipo=images"
								alt="Board member 2"
							></img>
							<img
								style={{ width: "100px", height: "100px", borderRadius: "50%" }}
								src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpre00.deviantart.net%2F942f%2Fth%2Fpre%2Fi%2F2016%2F061%2F1%2Fb%2Ffunny_dog_2_bis_by_cathita-d2e602m.jpg&f=1&nofb=1&ipt=51ae6d8ac39783aeb3770f1bfe44b6618ddecaaa051288398147bb6b187f3e7b&ipo=images"
								alt="Board member 2"
							></img>
						</Box>
					</Box>
				</Box>
			</Box>
		</ThemeProvider>
	);
}

export default OUCH;
