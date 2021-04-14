const path = require("path");
const util = require('util');
const fs = require('fs');
const fsPromises = fs.promises;


const {app, dialog, ipcMain, BrowserWindow} = require("electron");
const isDev = require("electron-is-dev");

// Conditionally include the dev tools installer to load React Dev Tools
const {default: installExtension, REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS} = require('electron-devtools-installer');

// Handle creating/removing shortcuts on Windows when installing/uninstalling
if (require("electron-squirrel-startup")) {
    app.quit();
} // NEW!

function createWindow() {
    // Create the browser window.
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            preload: path.join(__dirname, 'preload.js')
        }
    });

    win.setMenuBarVisibility(false)

    // and load the index.html of the app.
    // win.loadFile("index.html");
    win.loadURL(
        isDev
            ? "http://localhost:3000"
            : `file://${path.join(__dirname, "../build/index.html")}`
    );

    // Open the DevTools.
    if (isDev) {
        win.webContents.openDevTools({mode: "detach"});
    }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    createWindow();

    if (isDev) {
        installExtension([REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS])
            .then(name => console.log(`Added Extension:  ${name}`))
            .catch(error => console.log(`An error occurred: , ${error}`));
    }
}); // UPDATED!

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

const loadFile = async () => {
    try {
        const dialogAsync = dialog.showOpenDialog(null, {
            properties: ['openFile'], filters: [
                {name: 'Json', extensions: ['json']}
            ]
        });
        const chosenFiles = await dialogAsync;
        if (chosenFiles && chosenFiles.canceled === false) {
            let configPath = chosenFiles.filePaths[0];
            let fileContents = fs.readFileSync(configPath, 'utf-8');
            return [JSON.parse(fileContents), configPath];
        }
        return null;
    } catch (err) {
        console.log(err);
    }
}

const saveFile = async (contents) => {
    try {
        const dialogAsync = dialog.showSaveDialog(null, {
            properties: ['openFile'], filters: [
                {name: 'Json', extensions: ['json']}
            ]
        });
        const chosenFiles = await dialogAsync;
        if (chosenFiles && chosenFiles.canceled === false) {
            let configPath = chosenFiles.filePath;
            fs.writeFile(configPath, contents, 'utf-8', () => {
                console.log("save succeeded")
            })
            return configPath
        }
    } catch (err) {
        console.log(err);
    }
}

const createMod = async (jsonFile, contents) => {
    fs.writeFile(jsonFile, contents, 'utf-8', () => {
    })
    let jarFile = process.resourcesPath + '/jar/universe-generator.jar'
    if (isDev) {
        jarFile = __dirname + '/jar/universe-generator.jar'
    }

    let runCommand = 'java -cp ' + "\"" + jarFile + "\"" + " be.celludriel.universegenerator.main.UniverseGeneratorMain " + "\"" + jsonFile + "\""
    const exec = util.promisify(require('child_process').exec);
    return await exec(runCommand)
}

ipcMain.handle('open_file_dialog', async (event, arg) => {
    return await loadFile()
})

ipcMain.handle('save_file_dialog', async (event, arg) => {
    return await saveFile(arg)
})

ipcMain.handle('create_mod', async (event, jsonFile, contents) => {
    return await createMod(jsonFile, contents)
})

ipcMain.handle('exit', async (event, arg) => {
    return app.exit()
})