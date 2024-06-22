import { createTheme } from "@mui/system";

const theme = createTheme({
	palette: {
		background: {
			white: "#fff",
			grey: "#dfdfdf",
			blue: "rgba(3, 183, 208, 0.05)",
		},
		text: {
			primary: "#23404d",
			secondary: "#4f4e4f",
		},
		logoColors: {
			orange: "#E47313",
			blue: "#03B7D0",
			green: "#ACDA82",
		},
	},
});

export default theme;
