import { Fragment, useState } from "react"
import { Form, Segment, Table, Button } from "semantic-ui-react"
import JobService from "../../service/jobservice";

function OrderTab({ form, setForm }) {

    const rowAlignCenter = {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end"
    };

    const [parameter, setParameter] = useState({
        "key": "",
        "value": ""
    })


    const addParameter = () => {
        if (parameter.key !== "" && parameter.value !== "") {
            Object.assign(form.order.params, { [parameter.key]: parameter.value })
            setForm({
                ...form, order: {
                    ...form.order, params: Object.assign(form.order.params, { [parameter.key]: parameter.value })
                }
            })
        }
    }

    const removeParameter = (parameterKey) => {
        const { [parameterKey]: value, ...result } = form.order.params;
        setForm({
            ...form, order: {
                ...form.order, params: result
            }
        })
    }

    return (
        <Fragment>
            <Segment>
                <Form.Group widths={"equal"} style={rowAlignCenter}>
                    <Form.Checkbox name={"defaultOrder"} label='Is default order'
                        checked={form.order !== undefined ? form.order.defaultOrder : false} onChange={(e, data) => {
                            setForm({ ...form, order: { ...form.order, defaultOrder: data.checked } })
                        }} />
                    <Form.Dropdown label={"Order"} placeholder='Order' value={form.order !== undefined ? form.order.order : ""} search selection options={JobService.getOrderOptions()}
                        onChange={(e, obj) => {
                            setForm({ ...form, order: { ...form.order, order: obj.value } })
                        }} />
                </Form.Group>
                <Form.Group widths={"equal"}>
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Parameter</Table.HeaderCell>
                                <Table.HeaderCell>Value</Table.HeaderCell>
                                <Table.HeaderCell></Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {
                                form.order && form.order.params &&
                                Object.keys(form.order.params).map((key) => [key, form.order.params[key]]).map((param, index) => {
                                    return (
                                        <Table.Row key={index}>
                                            <Table.Cell>{param[0]}</Table.Cell>
                                            <Table.Cell>{param[1]}</Table.Cell>
                                            <Table.Cell><Button type="button" onClick={() => { removeParameter(param[0]) }} >Remove</Button></Table.Cell>
                                        </Table.Row>
                                    )
                                })
                            }
                        </Table.Body>

                        <Table.Footer>
                            <Table.Row>
                                <Table.HeaderCell colSpan='3' textAlign={"right"}>
                                    <Form.Group style={rowAlignCenter} >
                                        <Form.Input labelPosition={'left corner'} name={"parameter"} label={"Parameter"} value={parameter.key} onChange={e => {
                                            setParameter({ ...parameter, key: e.target.value })
                                        }} />
                                        <Form.Input labelPosition={'left corner'} name={"value"} label={"Value"} value={parameter.value} onChange={e => {
                                            setParameter({ ...parameter, value: e.target.value })
                                        }} />
                                        <Form.Button primary type="button" onClick={addParameter}>Add</Form.Button>
                                    </Form.Group>
                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Footer>
                    </Table>
                </Form.Group>
            </Segment>
        </Fragment>
    )
}

export default OrderTab