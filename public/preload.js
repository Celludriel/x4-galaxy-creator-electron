// Preload (Isolated World)
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld(
    'electron',
    {
        openFileDialog: async () => {
            return await ipcRenderer.invoke('open_file_dialog', [])
        },
        saveFileDialog: async (contents) => {
            return await ipcRenderer.invoke('save_file_dialog', contents)
        }
    }
)