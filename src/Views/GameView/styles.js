import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	root : {
		margin  : 0,
		padding : 0,

		width  : "100vw",
		height : "100vh",
	},
	backBtn : {
		top      : 0,
		left     : 0,
		position : "absolute",

		"& svg" : {
			fontSize : "1.7em",
		},
	},
}));

export default useStyles;
