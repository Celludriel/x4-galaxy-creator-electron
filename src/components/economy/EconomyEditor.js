import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EconomyMaster from "./EconomyMaster";
import EconomyDetails from './EconomyDetails';
import allActions from './../../actions/index';
import { v4 as uuidv4 } from 'uuid';

function EconomyEditor() {
    const dispatch = useDispatch()
    const galaxy = useSelector(state => state.galaxyReducer.galaxy);
    const [editorState, setEditorState] = useState("MASTER")
    const [selectedProduct, setSelectedProduct] = useState()

    const selectProduct = (product) => {
        setSelectedProduct(product)
        setEditorState("DETAILS")
    }

    const prepareNewProduct = () => {
        setSelectedProduct({
            "ware": "",
            "galaxyQuota": 0,
            "clusterQuota": 0,
            "sectorQuota": 0,
            "zoneQuota": 0,
            "race": "",
            "owner": "",
            "locationInfo": {
              "spawnLocations": [],
              "wares": [],
              "securityMin": "",
              "economyMax": "",
              "sunlightMin": "",
              "sunlightMax": "",
              "maxBound": false,
              "solitary": false
            }
          })
        setEditorState("DETAILS")
    }

    const saveProduct = (product) => {
        if(product.id !== undefined){
            dispatch(allActions.economyActions.saveProduct(product))
            setEditorState("MASTER")            
        } else {
            product.id = uuidv4()
            dispatch(allActions.economyActions.saveNewProduct(product))
            setEditorState("MASTER")      
        }
    }

    return (
        <Fragment>
            {
                editorState === "MASTER" &&
                <EconomyMaster products={galaxy.products} selectProduct={selectProduct} prepareNewProduct={prepareNewProduct} />
            }
            {
                editorState === "DETAILS" &&
                <EconomyDetails product={selectedProduct} saveProduct={saveProduct} setEditorState={setEditorState} />
            }
        </Fragment>
    )
}

export default EconomyEditor