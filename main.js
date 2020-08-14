const { createWindow } = require('./src/app/electron/create-window.js');
const { app, ipcMain } = require('electron');
const fs = require('fs');

let mainWindow;

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
});

app.on('activate', function () {
    if (mainWindow === null) createWindow()
});

ipcMain.on('read-downloads', (event, arg) => {
    const directoryPath = 'C:/Users/Tiago/Downloads/';

    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        };

        files.forEach(function (file) {
            fs.stat(directoryPath + file, function (err, file) {
                if (err) {
                    return console.log('Unable to scan directory: ' + err);
                };
                
                console.log(file)
            })
        });
    });
});