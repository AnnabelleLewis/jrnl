const {app, BrowserWindow } = require("electron");

require("@electron/remote/main").initialize;

function createWindow() {
    // Create app window
    const win = new BrowserWindow({
        width:800,
        height:600,
        webPreferences:{
            enableRemoteModule: true
        }
    });

    win.loadURL('http://localhost:3000')
}

app.on('ready', createWindow)