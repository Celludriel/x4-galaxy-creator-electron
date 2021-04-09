const defaultState = {
    "galaxy": {
        "seed": 0,
        "galaxyName": "",
        "galaxyPrefix": "",
        "galaxyOptions": {},
        "description": "",
        "author": "",
        "version": "1",
        "date": "",
        "save": "0",
        "minRandomBelts": 0,
        "maxRandomBelts": 0,
        "clusters": [{
            "id": "01",
            "name": "",
            "description": "",
            "music": "",
            "sunlight": "1",
            "economy": "0",
            "security": "0",
            "x": 0,
            "y": 0,
            "backdrop": "empty_space",
            "noBelts": false,
            "connections": [],
            "belts": [],
            "stations": [],
            "spaceObjects": []
        }],
        "products": [],
        "jobs": []
    }
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