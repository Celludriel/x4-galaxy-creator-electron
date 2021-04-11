const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld(
    'electron',
    {
        openFileDialog: async () => {
            return await ipcRenderer.invoke('open_file_dialog', [])
        },
        saveFileDialog: async (contents) => {
            return await ipcRenderer.invoke('save_file_dialog', contents)
        },
        createMod: async (jsonFile, contents) => {
            return await ipcRenderer.invoke('create_mod', jsonFile, contents)
        },
        exit: async () => {
            return await ipcRenderer.invoke('exit', [])
        },
    }
)