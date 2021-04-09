import React from 'react';
import {useDispatch} from 'react-redux';
import {Dropdown, Menu} from "semantic-ui-react";
import allActions from './../../actions/index';

function MenuBar() {
    const dispatch = useDispatch()

    const openFile = () => {
        window.electron.openFileDialog()
            .then((galaxyJsonObject) => {
                console.log(galaxyJsonObject);
                if(galaxyJsonObject !== null){
                    dispatch(allActions.galaxyActions.loadGalaxy(galaxyJsonObject))
                }
            })
            .catch(error => console.log(error))
    };

    return (
        <Menu>
            <Dropdown item text='File'>
                <Dropdown.Menu>
                    <Dropdown.Item>New</Dropdown.Item>
                    <Dropdown.Item onClick={openFile}>Load</Dropdown.Item>
                    <Dropdown.Item>Save</Dropdown.Item>
                    <Dropdown.Item>Create Mod</Dropdown.Item>
                    <Dropdown.Item>Exit</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text='Editors'>
                <Dropdown.Menu>
                    <Dropdown.Item>Map Editor</Dropdown.Item>
                    <Dropdown.Item>Job Editor</Dropdown.Item>
                    <Dropdown.Item>Economy Editor</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Menu>

    )
}

export default MenuBar;