import React from 'react';
import {useDispatch} from 'react-redux';
import {Dropdown, Menu} from "semantic-ui-react";
import allActions from './../../actions/index';
import { useSelector } from 'react-redux';
import {toast} from "react-toastify";
import ToastConfig from "../../service/ToastConfig";

function MenuBar({setEditor, filePath, setFilePath}) {
    const dispatch = useDispatch()
    const galaxy = useSelector(state => state.galaxyReducer.galaxy);

    const openFile = () => {
        window.electron.openFileDialog()
            .then((fileData) => {
                if(fileData[0] !== null){
                    dispatch(allActions.galaxyActions.loadGalaxy(fileData[0]))
                    setFilePath(fileData[1])
                }
            })
            .catch(error => console.log(error))
    };

    const saveFile = () => {
        window.electron.saveFileDialog(JSON.stringify(galaxy))
            .then((newFilePath) => {
                if(newFilePath !== null){
                    setFilePath(newFilePath)
                }
            })
            .catch(error => console.log(error))
    }

    const createNewGalaxy = () => {
        dispatch(allActions.galaxyActions.newGalaxy())
    }

    const createMod = () => {
        if(filePath !== undefined){
            window.electron.createMod(filePath, JSON.stringify(galaxy))
                .then(() => {
                    toast.info("Success", ToastConfig.getToastConfig())
                })
                .catch(
                    error => {
                        toast.error(error.message, ToastConfig.getErrorToastConfig())
                    }
                )
        }       
    }

    const exit = () => {
        window.electron.exit()
    }

    return (
        <Menu>
            <Dropdown item text='File'>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={createNewGalaxy}>New</Dropdown.Item>
                    <Dropdown.Item onClick={openFile}>Load</Dropdown.Item>
                    <Dropdown.Item onClick={saveFile}>Save</Dropdown.Item>
                    <Dropdown.Item disabled={filePath === undefined} onClick={createMod}>Create Mod</Dropdown.Item>
                    <Dropdown.Item onClick={exit}>Exit</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text='Editors'>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => setEditor("MAP_EDITOR")}>Map Editor</Dropdown.Item>
                    <Dropdown.Item onClick={() => setEditor("JOB_EDITOR")}>Job Editor</Dropdown.Item>
                    <Dropdown.Item onClick={() => setEditor("ECONOMY_EDITOR")}>Economy Editor</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Menu>

    )
}

export default MenuBar;