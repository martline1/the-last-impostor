import React        from "react";
import { Redirect } from "react-router-dom";

// Import Own Components
import MainView from "~/Views/MainView";
import GameView from "~/Views/GameView";

const routes = [
	{
		path      : "/",
		component : MainView,
		exact     : true,
	},
	{
		path      : "/game",
		component : GameView,
		exact     : true,
	},
	{
		component : props => <Redirect {...props} to="/" />,
	},
];

export default routes;
