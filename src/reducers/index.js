import {combineReducers} from 'redux'
import galaxyReducer from "./galaxyReducer";

const rootReducer = combineReducers({
    galaxyReducer: galaxyReducer
})

export default rootReducer