import React from 'react';
import {Dropdown, Menu} from "semantic-ui-react";

function MenuBar() {
    return (
        <Menu>
            <Dropdown item text='File'>
                <Dropdown.Menu>
                    <Dropdown.Item>New</Dropdown.Item>
                    <Dropdown.Item>Load</Dropdown.Item>
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