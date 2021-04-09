import {Form} from "semantic-ui-react";

function ClusterDetailsTab ({selectedCluster}) {

    const backdropOptions = [
        {
            key: 'empty_space',
            text: 'Empty space',
            value: 'empty_space',
        }
    ]

    return (
        <Form>
            <Form.Group widths={"equal"}>
                <Form.Input name={"id"} label={"Id"}/>
                <Form.Input name={"x"} label={"X"}/>
                <Form.Input name={"y"} label={"Y"}/>
            </Form.Group>
            <Form.Input name={"name"} label={"Name"}/>
            <Form.TextArea label={"Description"} placeholder='More information ...'/>
            <Form.Group widths={"equal"}>
                <Form.Input name={"music"} label={"Music"}/>
                <Form.Input name={"sunlight"} label={"Sunlight"}/>
            </Form.Group>
            <Form.Group widths={"equal"}>
                <Form.Input name={"economy"} label={"Economy"}/>
                <Form.Input name={"security"} label={"Security"}/>
            </Form.Group>
            <Form.Group widths={"equal"}>
                <Form.Dropdown label={"Backdrop"} placeholder='Backdrop' search selection options={backdropOptions}/>
                <Form.Checkbox name={"noBelts"} label='Disable belts'/>
            </Form.Group>
            <Form.Button primary>Save Cluster</Form.Button>
        </Form>
    )
}

export default ClusterDetailsTab