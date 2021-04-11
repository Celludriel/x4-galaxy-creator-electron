import BasicInformationTab from './BasicInformationTab';
import ShipTab from './ShipTab';
import LocationTab from './LocationTab';
import QuotaTab from './QuotaTab';
import { Form, Tab } from 'semantic-ui-react';
import { useState } from 'react';
import OrderTab from './OrderTab';

function JobDetails({ job, saveJob, setEditorState }) {

    const [dirty, setDirty] = useState()
    const [form, setForm] = useState(job)

    const updateForm = (form) => {
        setForm(form)
        setDirty(true)
    }

    const submitJob = () => {
        saveJob(form)
        setDirty(false)
        setEditorState("MASTER")
    }

    const panes = [
        { menuItem: 'Basic Information', render: () => <Tab.Pane><BasicInformationTab form={form} setForm={updateForm} /></Tab.Pane> },
        { menuItem: 'Location', render: () => <Tab.Pane><LocationTab /></Tab.Pane> },
        { menuItem: 'Quota', render: () => <Tab.Pane><QuotaTab /></Tab.Pane> },
        { menuItem: 'Ship', render: () => <Tab.Pane><ShipTab /></Tab.Pane> },
        { menuItem: 'Order', render: () => <Tab.Pane><OrderTab /></Tab.Pane> },
    ]

    return (
        <Form onSubmit={submitJob}>
            <Tab panes={panes} />
            <br />
            <Form.Group widths={"equal"}>
                <Form.Button secondary onClick={() => setEditorState("MASTER")}>Cancel</Form.Button>
                <Form.Button primary disabled={!dirty}>Save Job</Form.Button>
            </Form.Group>
        </Form>
    )
}

export default JobDetails