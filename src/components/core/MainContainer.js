import React from 'react';
import {Container, Grid} from "semantic-ui-react";
import MenuBar from "./MenuBar";
import Map from "../map/Map";

function MainContainer() {

    return (
        <Grid padded={true} divided={true}>
            <Grid.Row columns={1}>
                <Grid.Column>
                    <MenuBar/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
                <Grid.Column textAlign='center'>
                    <Map size={20} width={24} height={24} />
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