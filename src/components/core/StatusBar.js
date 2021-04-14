import React from 'react';
import { Segment, Table } from 'semantic-ui-react';

function StatusBar({ galaxy, filePath }) {

    return (
        <Segment>
            <Table>
                <Table.Row key={0}>
                    {
                        galaxy.galaxyPrefix !== "" &&
                            <Table.Cell >Macro: {galaxy.galaxyPrefix}_galaxy_macro</Table.Cell>
                    }
                    {
                        filePath !== "" &&
                            <Table.Cell >File Path: {filePath}</Table.Cell>
                    }
                </Table.Row>
            </Table>
        </Segment>
    )
}

export default StatusBar;