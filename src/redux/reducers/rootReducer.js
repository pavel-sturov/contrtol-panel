import { combineReducers } from 'redux'
import { projectsReducer } from 'redux/reducers/projects/projectsReducer'

export const rootReducer = combineReducers({
    projects:    projectsReducer,
})
