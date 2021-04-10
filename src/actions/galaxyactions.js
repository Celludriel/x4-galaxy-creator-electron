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

const updateGalaxy = (segment) => {
    return {
        type: "UPDATE_GALAXY",
        data: segment
    } 
}

const updateClusterInGalaxy = (cluster) => {
    return {
        type: "UPDATE_CLUSTER",
        data: cluster
    }     
}


export default { loadGalaxy, saveGalaxy, updateGalaxy, updateClusterInGalaxy }