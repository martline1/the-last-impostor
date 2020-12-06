import React      from "react";
import { Button } from "@material-ui/core";

// Import Own Components
import { useRedirectTo } from "~/Util/Hooks";
import BackgroundImg     from "~/Resources/Background.png";
import useStyles         from "./styles";

const MainView = () => {
	const classes    = useStyles();
	const redirectTo = useRedirectTo();

	return (
		<div className={classes.root}>
			<img src={BackgroundImg} alt="amerike background" />

			<Button
				className="callToAction"
				onClick={redirectTo("/game")}
			>
				¡Unirse al juego!
			</Button>
		</div>
	);
};

export default MainView;
