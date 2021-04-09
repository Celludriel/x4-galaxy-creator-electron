import React from 'react';
import { Container, Grid } from "semantic-ui-react";
import MenuBar from "./MenuBar";
import Map from "../map/Map";
import { useSelector } from "react-redux";

function MainContainer() {
    const clusters = useSelector(state => state.galaxyReducer.galaxy.clusters);

    return (
        <Grid padded={true} divided={true}>
            <Grid.Row columns={1}>
                <Grid.Column>
                    <MenuBar />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
                <Grid.Column textAlign='center'>
                    <Map size={20} width={25} height={25} clusters={clusters} />
                </Grid.Column>
                <Grid.Column>
                    <Container>
                        Editor pane comes here
                    </Container>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1}>
                <Grid.Column>
                    StatusBar
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default MainContainer;