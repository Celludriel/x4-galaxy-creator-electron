import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {Dropdown, Menu} from "semantic-ui-react";
import allActions from './../../actions/index';
import { useSelector } from 'react-redux';

function MenuBar({setEditor}) {
    const dispatch = useDispatch()
    const galaxy = useSelector(state => state.galaxyReducer.galaxy);
    const [filePath, setFilePath] = useState();

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
            .then((filePath) => {
                if(filePath !== null){
                    setFilePath(filePath)
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