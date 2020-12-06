import * as PIXI from "pixi.js";

const color = (...args) => {
	const addZeroIfNeeded = str => (str + "").length === 1 ? "0" + str : str;

	// Transform each section to base 16
	const hexValue = args.reduce((acc, val) => {
		return acc + addZeroIfNeeded(val.toString(16));
	}, "");

	return parseInt(hexValue, 16);
};

let app, resources;

const sprites = {};

export function setup(_app) {
	app = _app;

	const loader = new PIXI.Loader();

	loader
		.add("scene", "./assets/Cafeteria-sharedassets0.assets-210.png")
		.add("playerTileMap", "./assets/Player-sharedassets0.assets-55.png")
		.load((loader, _resources) => resources = _resources);

	loader.onComplete.add(() => {
		// Define background
		const container = new PIXI.Container();
		const scene     = new PIXI.Sprite(resources.scene.texture);

		scene.anchor.set(0.5);
		scene.position.set(app.view.width / 2, app.view.height / 2);
		scene.width  = app.view.height - 20;
		scene.height = app.view.height - 20;

		const graphics = new PIXI.Graphics();

		graphics.beginFill(0x000000);
		graphics.moveTo(0, 0);
		graphics.lineTo(410, 0);
		graphics.lineTo(0, 390);
		graphics.lineTo(0, 0);
		graphics.closePath();
		graphics.endFill();
		
		container.addChild(scene);
		container.addChild(graphics);

		container.pivot.set(container.width / 2, container.height / 2);
		container.position.set(app.view.width / 2 -400, app.view.height / 2);
		container.scale.set(1.5);

		app.stage.addChild(container);

		// Define player
		const playerTextureFromTileMap = resources.playerTileMap.texture;

		const playerIdleRect = new PIXI.Rectangle(0, 0, 165, 220);

		playerTextureFromTileMap.frame = playerIdleRect;

		const player = new PIXI.Sprite(playerTextureFromTileMap);

		player.anchor.set(0.5);
		player.position.set(app.view.width / 2, app.view.height / 2);
		player.scale.set(0.4);

		const text = new PIXI.Text("martline2", {
			fill       : color(30, 30, 30),
			align      : "center",
			fontSize   : 24,
			fontFamily : "Arial",
		});

		text.position.set(player.x - player.width / 2 -15, player.y + player.height / 2);

		app.stage.addChild(player);
		app.stage.addChild(text);
	});

	app.ticker.add(draw);
};

function draw() {
	console.log("draw");
}

export function clean() {
	app.ticker.remove(draw);
};
