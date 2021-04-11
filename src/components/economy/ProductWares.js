import { useState } from "react"
import { Button, Form, Table } from "semantic-ui-react"
import GalaxyService from '../../service/galaxyservice';

function ProductWares({form, setForm}) {

    const [ware, setWare] = useState();

    const removeWare = (index) => {
        setForm({ ...form, 
                locationInfo: {...form.locationInfo, 
                    wares: [...form.locationInfo.wares.slice(0, index), ...form.locationInfo.wares.slice(index + 1)]}})
    }

    return (
        <Table>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Extra Wares</Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            {
                form.locationInfo.wares && 
                form.locationInfo.wares.map((location, index) => {
                    return (
                        <Table.Row key={index}>
                            <Table.Cell>{location}</Table.Cell>
                            <Table.Cell><Button type="button" onClick={() => { removeWare(index) }} >Delete</Button></Table.Cell>
                        </Table.Row>
                    )
                })
            }
            <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell colSpan='2' textAlign={"right"}>
                        <Form.Group>
                            <Form.Dropdown placeholder='Ware' search selection options={GalaxyService.getWareOptions()}
                                onChange={(e, obj) => { setWare(obj.value )}} />
                            <Form.Button primary type="button" 
                            onClick={() => setForm({ ...form, 
                                locationInfo: {...form.locationInfo, 
                                    wares: [ware, ...form.locationInfo.wares]}})} >Add</Form.Button>
                        </Form.Group>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>
    )
}

export default ProductWares