const { app, BrowserWindow } = require("electron");
const electronReload         = require("electron-reload");

// Import Own Components
const settings = require("../settings.json");

// Comment on production
electronReload(`${__dirname}/`);

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) { // eslint-disable-line global-require
	app.quit();
}

let win;

const createWindow = () => {
	win = new BrowserWindow({
		width          : settings.width,
		height         : settings.height,
		resizable      : false,
		webPreferences : {
			nodeIntegration : true,
		},
	});

	win.webContents.openDevTools();

	win.on("closed", () => win = null);
	// win.setMenu(null);
	win.loadFile(`${__dirname}/index.html`);
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});
