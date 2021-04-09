import {Form} from "semantic-ui-react";

function ClusterDetailsTab({selectedCluster}) {

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
                <Form.Input name={"id"} label={"Id"} value={selectedCluster !== undefined ? selectedCluster.id : ""}/>
                <Form.Input name={"x"} label={"X"} value={selectedCluster !== undefined ? selectedCluster.x : ""}/>
                <Form.Input name={"y"} label={"Y"} value={selectedCluster !== undefined ? selectedCluster.y : ""}/>
            </Form.Group>
            <Form.Input name={"name"} label={"Name"} value={selectedCluster !== undefined ? selectedCluster.name : ""}/>
            <Form.TextArea label={"Description"} placeholder='More information ...'
                           value={selectedCluster !== undefined ? selectedCluster.description : ""}/>
            <Form.Group widths={"equal"}>
                <Form.Input name={"music"} label={"Music"} value={selectedCluster !== undefined ? selectedCluster.music : ""}/>
                <Form.Input name={"sunlight"} label={"Sunlight"} value={selectedCluster !== undefined ? selectedCluster.sunlight : ""}/>
            </Form.Group>
            <Form.Group widths={"equal"}>
                <Form.Input name={"economy"} label={"Economy"} value={selectedCluster !== undefined ? selectedCluster.economy : ""}/>
                <Form.Input name={"security"} label={"Security"} value={selectedCluster !== undefined ? selectedCluster.security : ""}/>
            </Form.Group>
            <Form.Group widths={"equal"}>
                <Form.Dropdown label={"Backdrop"} placeholder='Backdrop' search selection options={backdropOptions}
                               value={selectedCluster !== undefined ? selectedCluster.backdrop : ""}/>
                <Form.Checkbox name={"noBelts"} label='Disable belts' checked={selectedCluster !== undefined ? selectedCluster.noBelts : ""}/>
            </Form.Group>
            <Form.Button primary>Save Cluster</Form.Button>
        </Form>
    )
}

export default ClusterDetailsTab