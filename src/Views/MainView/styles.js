import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	root : {
		width    : "100vw",
		height   : "100vh",
		margin   : 0,
		padding  : 0,
		overflow : "hidden",
		position : "relative",

		display        : "flex",
		justifyContent : "center",

		"& > img" : {
			position : "absolute",

			width  : "100vw",
			height : "100vh",
			zIndex : -1,
			top    : 0,
			left   : 0,
			right  : 0,
			bottom : 0,
		},

		"& .callToAction" : {
			marginTop     : "20vh",
			color         : "white",
			textTransform : "none",
			padding       : "0 15px",

			height       : "50px",
			border       : "1px solid white",
			borderRadius : "10px",
		},
	},
}));

export default useStyles;
