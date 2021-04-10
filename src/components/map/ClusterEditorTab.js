import { Button, Dropdown, Tab, Form } from "semantic-ui-react";
import ClusterDetailsTab from "./ClusterDetailsTab";
import { useState, useEffect } from "react";
import ClusterConnectionsTab from "./ClusterConnectionsTab";
import ClusterStationsTab from "./ClusterStationsTab";
import GalaxyService from './../../service/galaxyservice';
import allActions from './../../actions/index';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

function ClusterEditorTab({ clusters }) {
    const dispatch = useDispatch()
    const [selectedCluster, setSelectedCluster] = useState(clusters[0])
    const [clusterDropdownValue, setClusterDropdownValue] = useState(0)

    const formValue = {
        "id": selectedCluster.id,
        "name": selectedCluster.name,
        "description": selectedCluster.description,
        "music": selectedCluster.music,
        "sunlight": selectedCluster.sunlight,
        "economy": selectedCluster.economy,
        "security": selectedCluster.security,
        "x": selectedCluster.x,
        "y": selectedCluster.y,
        "backdrop": selectedCluster.backdrop,
        "noBelts": selectedCluster.noBelts,
        "connections": selectedCluster.connections,
        "belts": selectedCluster.belts,
        "stations": selectedCluster.stations,
        "spaceObjects": selectedCluster.spaceObjects
    }

    const [dirty, setDirty] = useState()
    const [form, setForm] = useState(formValue)

    useEffect(() => {
        setSelectedCluster(clusters[0])
        setClusterDropdownValue(0)
        setForm(formValue)
    }, [clusters])

    useEffect(() => {
        setForm(formValue)
    }, [selectedCluster])

    const formUpdate = (form) => {
        console.log("formupdate");
        setDirty(true)
        setForm(form)
        console.log(form)
    }

    const switchSelectedCluster = (evt, obj) => {
        console.log("switchSelectedCluster");
        setDirty(false)
        setSelectedCluster(clusters[obj.value])
        setClusterDropdownValue(obj.value)
    }

    const handleSubmit = (evt) => {
        console.log("handleSubmit");
        evt.preventDefault();
        if(Number.isInteger(Number(form.x)) && Number.isInteger(Number(form.y))){
            dispatch(allActions.galaxyActions.updateClusterInGalaxy(form))
            setDirty(false)
        }
    }

    const addNewCluster = () => {
        dispatch(allActions.galaxyActions.addNewCluster({
            "id": uuidv4(),
            "name": "",
            "description": "",
            "music": "",
            "sunlight": "",
            "economy": "",
            "security": "",
            "x": "NaN",
            "y": "NaN",
            "backdrop": "",
            "noBelts": false,
            "connections": [],
            "belts": [],
            "stations": [],
            "spaceObjects": []
        }))
        setDirty(false)
    }

    const removeCluster = () => {
        if(selectedCluster.x !== 0 && selectedCluster.y !== 0) {
            dispatch(allActions.galaxyActions.removeCluster(selectedCluster))
            setDirty(false)
        }
    }

    const panes = [
        { menuItem: 'Details', render: () => <Tab.Pane><ClusterDetailsTab form={form} setForm={formUpdate} /></Tab.Pane> },
        { menuItem: 'Connections', render: () => <Tab.Pane><ClusterConnectionsTab form={form} setForm={formUpdate} clusters={clusters} /></Tab.Pane> },
        { menuItem: 'Stations', render: () => <Tab.Pane><ClusterStationsTab form={form} setForm={formUpdate} /></Tab.Pane> },
    ]

    return (
        <div>
            <Dropdown placeholder='Cluster' value={clusterDropdownValue} search selection options={GalaxyService.getClusterOptions(clusters)}
                onChange={switchSelectedCluster} />
            &nbsp;
            <Button secondary onClick={removeCluster}>Delete</Button>
            <Button primary onClick={addNewCluster}>Add</Button>
            <Form onSubmit={handleSubmit}>
                <Tab panes={panes} />
                <br />
                <Form.Button primary disabled={!dirty}>Save Cluster</Form.Button>
            </Form>
        </div>
    )
}

export default ClusterEditorTab