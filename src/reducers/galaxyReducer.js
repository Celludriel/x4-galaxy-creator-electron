const defaultState = {
    "galaxy": {}
}

const galaxyReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "LOAD_GALAXY": 
            return {...state, galaxy: action.data}
        default:
            return state
    }
}

export default galaxyReducer