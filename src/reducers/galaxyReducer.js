import { v4 as uuidv4 } from 'uuid';

const defaultState = {
    "galaxy": {
        "seed": 0,
        "galaxyName": "",
        "galaxyPrefix": "",
        "galaxyOptions": {
            "addDoubleTravelSpeed": false
        },
        "description": "",
        "author": "",
        "version": "1",
        "date": "",
        "save": "0",
        "minRandomBelts": 0,
        "maxRandomBelts": 0,
        "clusters": [{
            "editorId": uuidv4(),
            "id": "",
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

const addEditorUuid = (galaxy) => {
    var clusters = galaxy.clusters.map((cluster) => {
        if(cluster.editorId === undefined){
            cluster["editorId"] = uuidv4();
        }
        return cluster
    })
    var products = galaxy.products.map((product) => {
        if(product.editorId === undefined){
            product["editorId"] = uuidv4();
        } 
        return product
    })
    var jobs = galaxy.jobs.map((job) => { 
        if(job.editorId === undefined){
            job["editorId"] = uuidv4();
        }
        return job        
    })

    galaxy.clusters = clusters
    galaxy.products = products
    galaxy.jobs = jobs

    return galaxy
}

const galaxyReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "LOAD_GALAXY":
            var galaxyWithUuid = addEditorUuid(action.data)
            return {
                ...state, galaxy: galaxyWithUuid
            }        
        case "UPDATE_GALAXY":
            return {...state, galaxy: {...state.galaxy, ...action.data}}        
        case "NEW_GALAXY":
            return defaultState     
        case "UPDATE_CLUSTER":
            return {...state,
                galaxy: { ...state.galaxy, clusters: state.galaxy.clusters.map(cluster => (cluster.editorId === action.data.editorId) ? action.data : cluster)}
            }
        case "ADD_CLUSTER":
            return {...state,
                galaxy: { ...state.galaxy, clusters: [action.data, ...state.galaxy.clusters]}
            }
        case "REMOVE_CLUSTER":
            debugger
            return {...state,
                galaxy: { ...state.galaxy, clusters: state.galaxy.clusters.filter(cluster => (cluster.editorId === action.data.editorId) ? null : cluster)}
            }
        case "UPDATE_PRODUCT":
            return {...state,
                galaxy: { ...state.galaxy, products: state.galaxy.products.map(product => (product.editorId === action.data.editorId) ? action.data : product)}
            }
        case "ADD_PRODUCT":
            return {...state,
                galaxy: { ...state.galaxy, products: [action.data, ...state.galaxy.products]}
            }
        case "REMOVE_PRODUCT":
            return {...state,
                galaxy: { ...state.galaxy, products: state.galaxy.products.filter(product => (product.editorId === action.data.editorId) ? null : product)}
            }
        case "UPDATE_JOB":
            return {...state,
                galaxy: { ...state.galaxy, jobs: state.galaxy.jobs.map(job => (job.editorId === action.data.editorId) ? action.data : job)}
            }
        case "ADD_JOB":
            return {...state,
                galaxy: { ...state.galaxy, jobs: [action.data, ...state.galaxy.jobs]}
            }
        case "REMOVE_JOB":
            return {...state,
                galaxy: { ...state.galaxy, jobs: state.galaxy.jobs.filter(job => (job.editorId === action.data.editorId) ? null : job)}
            }
        default:
            return state
    }
}

export default galaxyReducer