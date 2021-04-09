import {Button, Dropdown, Tab} from "semantic-ui-react";
import ClusterDetailsTab from "./ClusterDetailsTab";
import {useState} from "react";
import ClusterConnectionsTab from "./ClusterConnectionsTab";
import ClusterStationsTab from "./ClusterStationsTab";

function ClusterEditorTab({clusters}) {
    const [selectedCluster, setSelectedCluster] = useState();

    const panes = [
        {menuItem: 'Details', render: () => <Tab.Pane><ClusterDetailsTab selectedCluster={selectedCluster}/></Tab.Pane>},
        {menuItem: 'Connections', render: () => <Tab.Pane><ClusterConnectionsTab selectedCluster={selectedCluster}/></Tab.Pane>},
        {menuItem: 'Stations', render: () => <Tab.Pane><ClusterStationsTab selectedCluster={selectedCluster}/></Tab.Pane>},
    ]

    const clusterOptions = clusters.map((cluster, index) => {
        return {
            key: index,
            text: `${cluster.name} (${cluster.x},${cluster.y})`,
            value: index
        }
    })

    return (
        <div>
            <Dropdown placeholder='Cluster' search selection options={clusterOptions}
                      onChange={(evt, obj) => setSelectedCluster(clusters[obj.value])}/>
            &nbsp;
            <Button secondary>Delete</Button>
            <Button primary>Add</Button>
            <Tab panes={panes}/>
        </div>
    )
}

export default ClusterEditorTab