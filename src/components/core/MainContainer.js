import React, { useState } from 'react';
import {Grid} from "semantic-ui-react";
import MenuBar from "./MenuBar";
import StatusBar from "./StatusBar";
import Map from "../map/Map";
import {useSelector} from "react-redux";
import MapEditor from "../map/MapEditor";
import EconomyEditor from './../economy/EconomyEditor';
import JobEditor from './../job/JobEditor';
import {ToastContainer} from "react-toastify";

function MainContainer() {
    const [activeEditor, setActiveEditor] = useState("MAP_EDITOR");
    const [filePath, setFilePath] = useState();
    const [mapDisplay, setMapDisplay] = useState({
        "showCoords": true,
        "showSectorName": false
    });
    const galaxy = useSelector(state => state.galaxyReducer.galaxy);
    const clusters = galaxy.clusters

    return (
        <Grid padded={true} divided={true}>
            <Grid.Row columns={1}>
                <Grid.Column>
                    <ToastContainer style={{ width: "1000px" }}/>
                    <MenuBar setEditor={setActiveEditor} filePath={filePath} setFilePath={setFilePath} />
                </Grid.Column>
            </Grid.Row>
            {
                activeEditor === "MAP_EDITOR" && 
                <Grid.Row columns={2}>
                    <Grid.Column textAlign='center'>
                        <Map size={40} width={25} height={25} clusters={clusters} mapDisplay={mapDisplay} />
                    </Grid.Column>
                    <Grid.Column>
                        <MapEditor clusters={clusters} mapDisplay={mapDisplay} setMapDisplay={setMapDisplay} />
                    </Grid.Column>
                </Grid.Row>
            }
            {
                activeEditor === "ECONOMY_EDITOR" && 
                <Grid.Row columns={1}>
                    <Grid.Column textAlign='center'>
                        <EconomyEditor />
                    </Grid.Column>
                </Grid.Row>
            }            
            {
                activeEditor === "JOB_EDITOR" && 
                <Grid.Row columns={1}>
                    <Grid.Column textAlign='center'>
                        <JobEditor />
                    </Grid.Column>
                </Grid.Row>
            }            
            <Grid.Row columns={1}>
                <Grid.Column>
                    <StatusBar galaxy={galaxy} filePath={filePath} />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default MainContainer;