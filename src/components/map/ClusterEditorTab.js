import {Button, Dropdown, Tab, Form, Confirm} from "semantic-ui-react";
import ClusterDetailsTab from "./ClusterDetailsTab";
import { useState, useEffect } from "react";
import ClusterConnectionsTab from "./ClusterConnectionsTab";
import ClusterStationsTab from "./ClusterStationsTab";
import ClusterPlayerStartTab from './ClusterPlayerStartTab';
import GalaxyService from './../../service/galaxyservice';
import allActions from './../../actions/index';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

function ClusterEditorTab({ clusters }) {
    const dispatch = useDispatch()
    const [selectedCluster, setSelectedCluster] = useState(clusters[0])
    const [clusterDropdownValue, setClusterDropdownValue] = useState(0)
    const [clusterConfirmation, setClusterConfirmation] = useState({
        "open": false,
        "newDropdownValue": null,
        "action": null
    })

    const formValue = {
        "editorId": selectedCluster.editorId,
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
        "factionHq": selectedCluster.factionHq !== undefined ? selectedCluster.factionHq : null,
        "factionStart":  selectedCluster.factionStart !== undefined ? selectedCluster.factionStart : null,
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
        setDirty(true)
        setForm(form)
    }

    const handleSubmit = (evt) => {
        if(evt !== null){
            evt.preventDefault();
        }
        if(Number.isInteger(Number(form.x)) && Number.isInteger(Number(form.y))){
            dispatch(allActions.galaxyActions.updateClusterInGalaxy(form))
            setDirty(false)
        }
    }

    const addNewCluster = () => {
        dispatch(allActions.galaxyActions.addNewCluster({
            "editorId": uuidv4(),
            "id": "",
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
            "factionHq": null,
            "factionStart": null,
            "connections": [],
            "belts": [],
            "stations": [],
            "spaceObjects": []
        }))
        setDirty(false)
    }

    const removeCluster = () => {
        if(selectedCluster.x !== 0 || selectedCluster.y !== 0) {
            dispatch(allActions.galaxyActions.removeCluster(selectedCluster))
            setDirty(false)
        }
    }

    const switchSelectedCluster = (obj) => {
        console.log("switchSelectedCluster");
        setDirty(false)
        setSelectedCluster(clusters[obj.value])
        setClusterDropdownValue(obj.value)
    }

    const showConfirmationForAddingCluster = () => {
        if(dirty){
            setClusterConfirmation({
                "open": true,
                "action": "ADD"
            })
        } else {
            addNewCluster();
        }
    }

    const showConfirmationForSwitchingCluster = (obj) => {
        if(dirty){
            setClusterConfirmation({
                "open": true,
                "newDropdownValue": obj,
                "action": "SWITCH"
            })
        } else {
            switchSelectedCluster(obj)
        }
    }

    const doClusterSwitch = () => {
        if(clusterConfirmation.action === "SWITCH"){
            switchSelectedCluster(clusterConfirmation.newDropdownValue)
        } else if(clusterConfirmation.action === "ADD"){
            addNewCluster();
        }
        setClusterConfirmation({
            "open": false,
            "newDropdownValue": null
        })
    }

    const panes = [
        { menuItem: 'Details', render: () => <Tab.Pane ><ClusterDetailsTab form={form} setForm={formUpdate} clusters={clusters} /></Tab.Pane> },
        { menuItem: 'Connections', render: () => <Tab.Pane><ClusterConnectionsTab form={form} setForm={formUpdate} clusters={clusters} /></Tab.Pane> },
        { menuItem: 'Stations', render: () => <Tab.Pane><ClusterStationsTab form={form} setForm={formUpdate} /></Tab.Pane> },
        { menuItem: 'Player Start', render: () => <Tab.Pane><ClusterPlayerStartTab form={form} setForm={formUpdate} /></Tab.Pane> },
    ]

    return (
        <div>
            <Dropdown placeholder='Cluster' value={clusterDropdownValue} search selection options={GalaxyService.getClusterOptions(clusters)}
                onChange={(evt,obj) => showConfirmationForSwitchingCluster(obj)} />
            <Confirm
                open={clusterConfirmation.open}
                onCancel={() => setClusterConfirmation({
                    "open": false,
                    "newDropdownValue": null
                })}
                onConfirm={() => doClusterSwitch()}
            />
            &nbsp;
            <Button secondary onClick={removeCluster}>Delete</Button>
            <Button primary onClick={showConfirmationForAddingCluster}>Add</Button>
            <Form onSubmit={handleSubmit}>
                <Tab panes={panes} onTabChange={() => handleSubmit(null)} />
                <br />
                <Form.Button primary disabled={!dirty}>Save Cluster</Form.Button>
            </Form>
        </div>
    )
}

export default ClusterEditorTab