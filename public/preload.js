// Preload (Isolated World)
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld(
    'electron',
    {
        openFileDialog: async () => {
            return await ipcRenderer.invoke('open_file_dialog', [])
        }
    }
)