const loadGalaxy = (jsonFile) => {
    return {
        type: "LOAD_GALAXY",
        data: jsonFile
    }
}

const saveGalaxy = (json) => {
    return {
        type: "SAVE_GALAXY",
        data: json
    }
}

const newGalaxy = () => {
    return {
        type: "NEW_GALAXY",
        data: null
    } 
}

const updateGalaxy = (segment) => {
    return {
        type: "UPDATE_GALAXY",
        data: segment
    } 
}

const addNewCluster = (cluster) => {
    return {
        type: "ADD_CLUSTER",
        data: cluster
    }    
} 

const removeCluster = (cluster) => {
    return {
        type: "REMOVE_CLUSTER",
        data: cluster
    }    
} 

const updateClusterInGalaxy = (cluster) => {
    return {
        type: "UPDATE_CLUSTER",
        data: cluster
    }     
}


export default { loadGalaxy, saveGalaxy, newGalaxy, updateGalaxy, addNewCluster, updateClusterInGalaxy, removeCluster }