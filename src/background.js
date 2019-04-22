'use strict'

import {
    app,
    protocol,
    BrowserWindow,
    ipcMain
} from 'electron'
import {
    createProtocol,
    installVueDevtools
} from 'vue-cli-plugin-electron-builder/lib'
const isDevelopment = process.env.NODE_ENV !== 'production'
let electron = require("electron");
let win;

protocol.registerStandardSchemes(['app'], {
    secure: true
})

function createWindow(x, y) {
    // Create the browser window.
    win = new BrowserWindow({
        width: x,
        height: y,
        frame: false
    })

    if (process.env.WEBPACK_DEV_SERVER_URL) {
        // Load the url of the dev server if in development mode
        win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
        if (!process.env.IS_TEST) win.webContents.openDevTools()
    } else {
        createProtocol('app')
        // Load the index.html when not in development
        win.loadURL('app://./index.html')
    }

    win.on('closed', () => {
        win = null
    })
}

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
    if (isDevelopment && !process.env.IS_TEST) {
        // Install Vue Devtools
        await installVueDevtools()
    }
    const {
        width,
        height
    } = electron.screen.getPrimaryDisplay().workAreaSize
    console.log("width: " + width + ", height: " + height);
    createWindow(width, height)
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
    if (process.platform === 'win32') {
        process.on('message', data => {
            if (data === 'graceful-exit') {
                app.quit()
            }
        })

    } else {
        process.on('SIGTERM', () => {
            app.quit()
        })
    }
}


ipcMain.on('doAction', (event, arg) => {
    // console.log(" le render process est: "+ arg) // affiche "ping"
    if(arg == 'close'){
        app.quit();
    }else if(arg == 'minimize'){
        win.minimize();
        event.sender.send('doAction', 'la fenetre est reduite')
    }else{
        win.maximize();
        event.sender.send('doAction', 'la fenetre est agrandi')
    }
})