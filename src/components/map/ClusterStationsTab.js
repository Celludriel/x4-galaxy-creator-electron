import { Button, Table, Form } from "semantic-ui-react";
import { useState } from "react";
import GalaxyService from './../../service/galaxyservice';

function ClusterStationsTab({ form, setForm }) {
    const [stationForm, setStationForm] = useState({
        "type": "",
        "race": "",
        "owner": "",
        "faction": ""
    })

    const addStationToCluster = () => {
        if (stationForm.type !== ""
            && stationForm.race !== ""
            && stationForm.owner !== ""
            && stationForm.faction !== "") {
            setForm({ ...form, stations: [...form.stations, stationForm] })
        }
    }

    const removeStationFromCluster = (index) => {
        setForm({ ...form, stations: [...form.stations.slice(0, index), ...form.stations.slice(index + 1)] })
    }

    return (
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Type</Table.HeaderCell>
                    <Table.HeaderCell>Race</Table.HeaderCell>
                    <Table.HeaderCell>Owner</Table.HeaderCell>
                    <Table.HeaderCell>Faction</Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {
                    form.connections &&
                    form.stations.map((station, index) => {
                        return (
                            <Table.Row key={index}>
                                <Table.Cell>{station.type}</Table.Cell>
                                <Table.Cell>{station.race}</Table.Cell>
                                <Table.Cell>{station.owner}</Table.Cell>
                                <Table.Cell>{station.faction}</Table.Cell>
                                <Table.Cell><Button type="button" onClick={() => { removeStationFromCluster(index) }} >Delete</Button></Table.Cell>
                            </Table.Row>
                        )
                    })
                }
            </Table.Body>

            <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell colSpan='5' textAlign={"right"}>
                        <Form.Group>
                            <Form.Dropdown placeholder='Type' search selection options={GalaxyService.getStationOptions()}
                                onChange={(e, obj) => {
                                    setStationForm({ ...stationForm, type: obj.value })
                                }} />
                            <Form.Dropdown placeholder='Race' search selection options={GalaxyService.getRaceOptions()}
                                onChange={(e, obj) => {
                                    setStationForm({ ...stationForm, race: obj.value })
                                }} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Dropdown placeholder='Owner' search selection options={GalaxyService.getRaceOptions()}
                                onChange={(e, obj) => {
                                    setStationForm({ ...stationForm, owner: obj.value })
                                }} />
                            <Form.Dropdown placeholder='Faction' search selection options={GalaxyService.getFactionOptions()}
                                onChange={(e, obj) => {
                                    setStationForm({ ...stationForm, faction: obj.value })
                                }} />
                            <Form.Button primary type="button" onClick={addStationToCluster}>Add</Form.Button>
                        </Form.Group>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>
    )
}

export default ClusterStationsTab