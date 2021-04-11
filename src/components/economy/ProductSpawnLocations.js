import { useState } from "react"
import { Button, Form, Table } from "semantic-ui-react"
import GalaxyService from './../../service/galaxyservice';

function ProductSpawnLocations({form, setForm}) {

    const [faction, setFaction] = useState();

    const removeSpawnLocation = (index) => {
        setForm({ ...form, 
                locationInfo: {...form.locationInfo, 
                    spawnLocations: [...form.locationInfo.spawnLocations.slice(0, index), ...form.locationInfo.spawnLocations.slice(index + 1)]}})
    }

    return (
        <Table>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Can spawn in space of faction</Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            {
                form.locationInfo.spawnLocations && 
                form.locationInfo.spawnLocations.map((location, index) => {
                    return (
                        <Table.Row key={index}>
                            <Table.Cell>{location}</Table.Cell>
                            <Table.Cell><Button type="button" onClick={() => { removeSpawnLocation(index) }} >Delete</Button></Table.Cell>
                        </Table.Row>
                    )
                })
            }
            <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell colSpan='2' textAlign={"right"}>
                        <Form.Group>
                            <Form.Dropdown placeholder='Faction' search selection options={GalaxyService.getFactionOptions()}
                                onChange={(e, obj) => { setFaction(obj.value )}} />
                            <Form.Button primary type="button" 
                            onClick={() => setForm({ ...form, 
                                locationInfo: {...form.locationInfo, 
                                    spawnLocations: [faction, ...form.locationInfo.spawnLocations]}})} >Add</Form.Button>
                        </Form.Group>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>
    )
}

export default ProductSpawnLocations