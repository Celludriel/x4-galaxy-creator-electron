import { Fragment } from "react";
import { Form, Segment, Tab } from "semantic-ui-react";
import ClusterEditorTab from "./ClusterEditorTab";
import GalaxyEditorTab from "./GalaxyEditorTab";

function MapEditor({ clusters, mapDisplay, setMapDisplay }) {

    const panes = [
        { menuItem: 'Galaxy Settings', render: () => <Tab.Pane><GalaxyEditorTab /></Tab.Pane> },
        { menuItem: 'Clusters', render: () => <Tab.Pane><ClusterEditorTab clusters={clusters} /></Tab.Pane> },
    ]

    return (
        <Fragment>
            <Segment>
                <Form>
                    <Form.Group>
                        <Form.Checkbox name={"showCoords"} label='Show Coordinates'
                            checked={mapDisplay.showCoords} onChange={(e, data) => {
                                setMapDisplay({ ...mapDisplay, showCoords: data.checked })
                            }} />
                        <Form.Checkbox name={"showSectorName"} label='Show Sector Names'
                            checked={mapDisplay.showSectorName} onChange={(e, data) => {
                                setMapDisplay({ ...mapDisplay, showSectorName: data.checked })
                            }} />
                    </Form.Group>
                </Form>
            </Segment>
            <Tab panes={panes} />
        </Fragment>
    )
}

export default MapEditor