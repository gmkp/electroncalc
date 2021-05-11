const {app, BrowserWindow} = require('electron')

const path = require('path')
const url = require('url')
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

let win

function createWindow() {
    win = new BrowserWindow({width: 350, height: 350})

    win.loadURL(url.format({
        pathname: path.join(__dirname, './index.html'),
        protocol: 'file',
        slashes: true
    }))

    win.on('closed', () => {
    win = null
    })


}
app.on('ready', createWindow)
app.on('window-all-closed', () => {
    app.quit()
    if (process.platform !== 'darwin') { 
        app.quit()
    }
  
})