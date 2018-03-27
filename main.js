const {app, BrowserWindow} = require('electron');

let win;

app.on('ready', () => {
  win = new BrowserWindow({
    width: 1000,
    height: 600,
    backgroundColor: '#ffffff'
  });

  win.loadURL(`file://${__dirname}/dist/index.html`);

  win.webContents.openDevTools();
});
