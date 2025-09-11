import React from "react";
import { Box, ThemeProvider } from "@mui/system";
import theme from "./theme";
import newsList from "./newsList";

function InfoBox(props) {
	return (
		<ThemeProvider theme={theme}>
			{newsList.map((obj, i) => (
				<Box
					key={i}
					sx={{
						color: "text.secondary",
						bgcolor: `${obj.color}`,
						border: "1px solid rgba(0,0,0,0.1)",
						borderRadius: "5px",
						padding: "1rem",
						margin: "1rem 0",
					}}
				>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							minWidth: 300,
							marginRight: 5,
						}}
					>
						<div className='posteddate'>{obj.posted}</div>
						<div className='newsheader'><h1>{obj.header}</h1></div>
						<div className='newstext'>{obj.text}</div>
					</Box>
				</Box>
			))}
		</ThemeProvider>
	);
}

export default InfoBox;
