const { BrowserWindow } = require('electron');
const url = require("url");
const path = require("path");

const createWindow = (function () {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, `../../../dist/index.html`),
            protocol: "file:",
            slashes: true
        })
    );

    // Open the DevTools.
    //mainWindow.webContents.openDevTools()

    mainWindow.on('closed', function () {
        mainWindow = null
    });

    return createWindow;
});

exports.createWindow = createWindow;