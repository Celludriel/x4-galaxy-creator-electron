import React from 'react';
import {Container, Grid} from "semantic-ui-react";
import MenuBar from "./MenuBar";
import Map from "../map/Map";
import {useSelector} from "react-redux";
import {createSelector} from 'reselect'

const clustersSelector = createSelector(
    state => state.galaxyReducer.galaxy.clusters,
    (items) => {
      if(items.length > 0){
          var retValue = [];
          for(var i = 0;i < items.length;i++){
              retValue[items[i].x + "," + items[i].y] = items[i];
          }
          return retValue;
      }
      return []
    })

function MainContainer() {
    const clusters = useSelector(state => state.galaxyReducer.galaxy.clusters);

    return (
        <Grid padded={true} divided={true}>
            <Grid.Row columns={1}>
                <Grid.Column>
                    <MenuBar/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
                <Grid.Column textAlign='center'>
                    <Map size={20} width={20} height={20} clusters={clusters}/>
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