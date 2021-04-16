import { Fragment, useState } from "react"
import { Button, Form, Modal, Table } from "semantic-ui-react"

function SelectionPicker({ label, choices, setValue, value }) {
    const [open, setOpen] = useState(false);

    return (
        <Fragment>
            <Form.Input label={label} value={value} onChange={(e) => {setValue(e.target.value)}} />&nbsp;<Button onClick={() => setOpen(true)}>...</Button>
            <SelectionPickerModal choices={choices} setValue={setValue} open={open} setOpen={setOpen} />
        </Fragment>
    )
}

export function SelectionPickerModal({ choices, setValue, open, setOpen }) {

    return (
        <Modal
            centered={false}
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
        >
            <Modal.Content>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Choice</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {
                            choices &&
                            choices.map((choice, index) => {
                                return (
                                    <Table.Row key={index} onClick={() => { setValue(choice.value); setOpen(false) }}>
                                        <Table.Cell>{choice.text}</Table.Cell>
                                    </Table.Row>
                                )
                            })
                        }
                    </Table.Body>
                </Table>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
            </Modal.Actions>
        </Modal>
    )
}

export default SelectionPicker