import {Form} from "semantic-ui-react";
import {useSelector} from "react-redux";

function GalaxyEditorTab() {
    const galaxy = useSelector(state => state.galaxyReducer.galaxy);

    return (
        <Form>
            <Form.Group widths={"equal"}>
                <Form.Input name={"seed"} label={"Seed"}/>
                <Form.Input name={"galaxyPrefix"} label={"Galaxy prefix"}/>
            </Form.Group>
            <Form.Group widths={"equal"}>
                <Form.Input name={"galaxyName"} label={"Name"}/>
                <Form.Input name={"author"} label={"Author"}/>
            </Form.Group>
            <Form.Group widths={"equal"}>
                <Form.Input name={"version"} label={"Version"}/>
                <Form.Input name={"date"} label={"Date"}/>
            </Form.Group>
            <Form.TextArea label={"Description"} placeholder='More information ...'/>
            <Form.Group widths={"equal"}>
                <Form.Input name={"minRandomBelts"} label={"Minimum random belts"}/>
                <Form.Input name={"maxRandomBelts"} label={"Maximum random belts"}/>
            </Form.Group>
            Galaxy Options
            <Form.Group widths={"equal"}>
                <Form.Checkbox name={"addDoubleTravelSpeed"} label='Double travel speed'/>
            </Form.Group>
            <Form.Button primary>Save Galaxy</Form.Button>
        </Form>
    )
}

export default GalaxyEditorTab