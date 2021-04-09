import {Form} from "semantic-ui-react";
import {useSelector} from "react-redux";

function GalaxyEditorTab() {
    const galaxy = useSelector(state => state.galaxyReducer.galaxy);
    
    return (
        <Form>
            <Form.Group widths={"equal"}>
                <Form.Input name={"seed"} label={"Seed"} value={galaxy !== undefined ? galaxy.seed : ""}/>
                <Form.Input name={"galaxyPrefix"} label={"Galaxy prefix"} value={galaxy !== undefined ? galaxy.galaxyPrefix : ""}/>
            </Form.Group>
            <Form.Group widths={"equal"}>
                <Form.Input name={"galaxyName"} label={"Name"} value={galaxy !== undefined ? galaxy.galaxyName : ""}/>
                <Form.Input name={"author"} label={"Author"} value={galaxy !== undefined ? galaxy.author : ""}/>
            </Form.Group>
            <Form.Group widths={"equal"}>
                <Form.Input name={"version"} label={"Version"} value={galaxy !== undefined ? galaxy.version : ""}/>
                <Form.Input name={"date"} label={"Date"} value={galaxy !== undefined ? galaxy.date : ""}/>
            </Form.Group>
            <Form.TextArea label={"Description"} placeholder='More information ...' value={galaxy !== undefined ? galaxy.description : ""}/>
            <Form.Group widths={"equal"}>
                <Form.Input name={"minRandomBelts"} label={"Minimum random belts"} value={galaxy !== undefined ? galaxy.minRandomBelts : ""}/>
                <Form.Input name={"maxRandomBelts"} label={"Maximum random belts"} value={galaxy !== undefined ? galaxy.maxRandomBelts : ""}/>
            </Form.Group>
            Galaxy Options
            <Form.Group widths={"equal"}>
                <Form.Checkbox name={"addDoubleTravelSpeed"} label='Double travel speed'
                               checked={galaxy.galaxyOptions["addDoubleTravelSpeed"] !== undefined ? galaxy.galaxyOptions["addDoubleTravelSpeed"]
                                   : false}/>
            </Form.Group>
            <Form.Button primary>Save Galaxy</Form.Button>
        </Form>
    )
}

export default GalaxyEditorTab