const loadGalaxy = (jsonFile) => {
    return {
        type: "LOAD_GALAXY",
        data: jsonFile
    }
}

export default loadGalaxy