import {Tab} from "semantic-ui-react";
import ClusterEditorTab from "./ClusterEditorTab";
import GalaxyEditorTab from "./GalaxyEditorTab";

function MapEditor({clusters}) {

    const panes = [
        {menuItem: 'Galaxy Settings', render: () => <Tab.Pane><GalaxyEditorTab /></Tab.Pane>},
        {menuItem: 'Clusters', render: () => <Tab.Pane><ClusterEditorTab clusters={clusters}/></Tab.Pane>},
    ]

    return (
        <Tab panes={panes}/>
    )
}

export default MapEditor