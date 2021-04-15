import { Button, Table, Form } from "semantic-ui-react";
import { Fragment, useState } from "react";
import GalaxyService from './../../service/galaxyservice';

function ClusterConnectionsTab({ form, setForm, clusters }) {
    const [connectionForm, setConnectionForm] = useState({
        "targetClusterId": "",
        "connectionType": "",
        "parameters": null,
        "gateType": null
    })

    const connectionTypes = [
        { key: 'N', text: 'N', value: 'N' },
        { key: 'NE', text: 'NE', value: 'NE' },
        { key: 'SE', text: 'SE', value: 'SE' },
        { key: 'S', text: 'S', value: 'S' },
        { key: 'SW', text: 'SW', value: 'SW' },
        { key: 'NW', text: 'NW', value: 'NW' },
        { key: 'CUSTOM', text: 'CUSTOM', value: 'CUSTOM' },
    ]

    const addConnectionToCluster = () => {
        if (connectionForm.targetClusterId !== "" 
            && connectionForm.connectionType !== ""
            && connectionForm.gateType !== "") {
            setForm({ ...form, connections: [...form.connections, connectionForm] })
        }
    }

    const removeConnectionFromCluster = (index) => {
        setForm({ ...form, connections: [...form.connections.slice(0, index), ...form.connections.slice(index + 1)] })
    }

    const onChangePlacement = (evt, obj) => {
        if (obj.value !== "CUSTOM") {
            setConnectionForm({ ...connectionForm, connectionType: obj.value, parameters: null })
        } else {
            setConnectionForm({
                ...connectionForm, connectionType: obj.value, parameters: {
                    "startPositionX": "",
                    "startPositionY": "",
                    "startRotation": "",
                    "endPositionX": "",
                    "endPositionY": "",
                    "endRotation": ""
                }
            })
        }
    }

    return (
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Connection Destination</Table.HeaderCell>
                    <Table.HeaderCell>Gate Placement In Grid</Table.HeaderCell>
                    <Table.HeaderCell>Gate Type</Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {
                    form.connections &&
                    form.connections.map((connection, index) => {
                        const data = GalaxyService.getClusterDataForId(connection.targetClusterId, clusters);
                        if(data){
                            return (
                                <Table.Row key={index}>
                                    <Table.Cell>{`${data.name} (${data.x},${data.y})`}</Table.Cell>
                                    {
                                        connection.connectionType !== undefined && connection.connectionType !== "CUSTOM" &&
                                            <Table.Cell>{connection.connectionType}</Table.Cell>
                                    }
                                    {
                                        connection.connectionType !== undefined && connection.connectionType === "CUSTOM" &&
                                            <Table.Cell>{ `${connection.connectionType} 
                                            (${connection.parameters.startPositionX},${connection.parameters.startPositionY},${connection.parameters.startRotation}) => 
                                            (${connection.parameters.endPositionX},${connection.parameters.endPositionY},${connection.parameters.endRotation})` }</Table.Cell>
                                    }
                                    <Table.Cell>{connection.gateType !== undefined ? connection.gateType : "ANCIENT_GATE"}</Table.Cell>
                                    <Table.Cell><Button type="button" onClick={() => { removeConnectionFromCluster(index) }} >Delete</Button></Table.Cell>
                                </Table.Row>
                            )
                        }
                    })
                }
            </Table.Body>

            <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell colSpan='4' textAlign={"right"}>
                        <Form.Group>
                            <Form.Dropdown placeholder='Destination' search selection options={GalaxyService.getClusterOptions(clusters)}
                                onChange={(e, obj) => {
                                    setConnectionForm({ ...connectionForm, targetClusterId: clusters[obj.value].id })
                                }} />
                            <Form.Dropdown placeholder='Placement' search selection options={connectionTypes}
                                onChange={onChangePlacement} />
                            <Form.Dropdown placeholder='Gate Type' search selection options={GalaxyService.getGateOptions()}
                                onChange={(e, obj) => {
                                    setConnectionForm({ ...connectionForm, gateType: obj.value })
                                }} />
                        </Form.Group>
                        {
                            connectionForm.connectionType === "CUSTOM" &&
                            <Fragment>
                                <Form.Group>
                                    <Form.Input name={"startPositionX"} label={"Entry Gate X"} value={connectionForm.parameters.startPositionX} onChange={e => {
                                        setConnectionForm({ ...connectionForm, parameters: { ...connectionForm.parameters, startPositionX: e.target.value } })
                                    }} />
                                    <Form.Input name={"startPositionY"} label={"Entry Gate Y"} value={connectionForm.parameters.startPositionY} onChange={e => {
                                        setConnectionForm({ ...connectionForm, parameters: { ...connectionForm.parameters, startPositionY: e.target.value } })
                                    }} />
                                    <Form.Input name={"startRotation"} label={"Entry Gate Rotation"} value={connectionForm.parameters.startRotation} onChange={e => {
                                        setConnectionForm({ ...connectionForm, parameters: { ...connectionForm.parameters, startRotation: e.target.value } })
                                    }} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Input name={"endPositionX"} label={"Exit Gate X"} value={connectionForm.parameters.endPositionX} onChange={e => {
                                        setConnectionForm({ ...connectionForm, parameters: { ...connectionForm.parameters, endPositionX: e.target.value } })
                                    }} />
                                    <Form.Input name={"endPositionY"} label={"Exit Gate Y"} value={connectionForm.parameters.endPositionY} onChange={e => {
                                        setConnectionForm({ ...connectionForm, parameters: { ...connectionForm.parameters, endPositionY: e.target.value } })
                                    }} />
                                    <Form.Input name={"endRotation"} label={"Exit Gate Rotation"} value={connectionForm.parameters.endRotation} onChange={e => {
                                        setConnectionForm({ ...connectionForm, parameters: { ...connectionForm.parameters, endRotation: e.target.value } })
                                    }} />
                                </Form.Group>
                            </Fragment>
                        }
                        <Form.Group>
                            <Form.Button primary type="button" onClick={addConnectionToCluster}>Add</Form.Button>
                        </Form.Group>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>
    )
}

export default ClusterConnectionsTab