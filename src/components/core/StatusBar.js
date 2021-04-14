import React from 'react';
import { Segment, Table } from 'semantic-ui-react';

function MenuBar({ galaxy, filePath }) {

    return (
        <Segment>
            <Table>
                <Table.Row key={0}>
                    <Table.Cell >Macro: {galaxy.galaxyPrefix}_galaxy_macro</Table.Cell>
                    <Table.Cell >File Path: {filePath}</Table.Cell>
                </Table.Row>
            </Table>
        </Segment>
    )
}

export default MenuBar;