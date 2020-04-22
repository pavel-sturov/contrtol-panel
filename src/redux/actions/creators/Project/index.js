import { PROJECTS_ACTIONS_TYPES } from 'redux/actions/types'
import { create, getList } from 'redux/actions/creators/Project/actions'

const createAction = (type, payload) => payload => ({ type, payload })

export const project = {
    create,
    getList,
    delete: createAction(PROJECTS_ACTIONS_TYPES.DELETE),
    edit:   createAction(PROJECTS_ACTIONS_TYPES.EDIT),
}
