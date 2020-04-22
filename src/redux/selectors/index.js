import { MICROSERVICE_ACTIONS_TYPES } from 'redux/actions/types'
import { ProjectActions } from 'redux/actions'

const ProjectStateSelectors = {
    list: state => state.projects.list,
}

const MicroserviceStateSelectors = {
    list: state => state.microservice[MICROSERVICE_ACTIONS_TYPES.LIST],
    addToProject: state => state.microservice[MICROSERVICE_ACTIONS_TYPES.ADD_TO_PROJECT],
}

export const StateSelectors = {
    project: ProjectStateSelectors,
    microservice: MicroserviceStateSelectors,
}

export const DispatchSelectors = {
    project: ProjectActions,
}

