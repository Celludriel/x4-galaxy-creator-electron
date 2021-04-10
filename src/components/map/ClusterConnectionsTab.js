import { Button, Table, Form } from "semantic-ui-react";
import { useState } from "react";
import GalaxyService from './../../service/galaxyservice';

function ClusterConnectionsTab({ form, setForm, clusters }) {
    const [connectionForm, setConnectionForm] = useState({
        "targetClusterId": "",
        "connectionType": ""
    })

    const connectionTypes = [
        {key: 'N',text: 'N',value: 'N'},
        {key: 'NE',text: 'NE',value: 'NE'},
        {key: 'SE',text: 'SE',value: 'SE'},
        {key: 'S',text: 'S',value: 'S'},
        {key: 'SW',text: 'SW',value: 'SW'},
        {key: 'NW',text: 'NW',value: 'NW'},
    ]

    const addConnectionToCluster = () => {
        if(connectionForm.targetClusterId !== "" && connectionForm.connectionType !== ""){
            setForm({...form, connections: [...form.connections, connectionForm]})
        }
    }

    const removeConnectionFromCluster = (index) => {
        setForm({...form, connections: [...form.connections.slice(0, index), ...form.connections.slice(index + 1)]})
    }

    return (
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Connection Destination</Table.HeaderCell>
                    <Table.HeaderCell>Gate Placement In Grid</Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {
                    form.connections && 
                        form.connections.map((connection, index) => {
                            const data = GalaxyService.getClusterDataForId(connection.targetClusterId, clusters);
                            return(
                                <Table.Row key={index}>
                                    <Table.Cell>{`${data.name} (${data.x},${data.y})`}</Table.Cell>
                                    <Table.Cell>{connection.connectionType}</Table.Cell>
                                    <Table.Cell><Button type="button" onClick={() => { removeConnectionFromCluster(index)}} >Delete</Button></Table.Cell>
                                </Table.Row>
                            )           
                        })
                }
            </Table.Body>

            <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell colSpan='3' textAlign={"right"}>
                        <Form.Group>
                            <Form.Dropdown placeholder='Destination' search selection options={GalaxyService.getClusterOptions(clusters)}
                                onChange={(e, obj) => {
                                    setConnectionForm({ ...connectionForm, targetClusterId: clusters[obj.value].id })}} />
                            <Form.Dropdown placeholder='Placement' search selection options={connectionTypes}
                                onChange={(e, obj) => {
                                    setConnectionForm({ ...connectionForm, connectionType: obj.value })}} />
                            <Form.Button primary type="button" onClick={addConnectionToCluster}>Add</Form.Button>
                        </Form.Group>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>
    )
}

export default ClusterConnectionsTab