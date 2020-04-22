import { URLS } from 'helpers/constants'
import { PROJECTS_ACTIONS_TYPES } from 'redux/actions/types'

//TODO need to refactoring

export const create = (project, id = 1) => async dispatch => {
    const response = await fetch(URLS.I_JSON_URL, {
        method: 'POST',
        body:   JSON.stringify({ id, method: 'projects.create', params: { project } }),
    })

    dispatch({ type: PROJECTS_ACTIONS_TYPES.CREATE, payload: response.status === 200 })
}

export const getList = (id = 1) => async dispatch => {
    const response               = await fetch(URLS.I_JSON_URL, {
        method: 'POST',
        body:   JSON.stringify({ id, method: 'projects.list' }),
    })
    const { result: { models } } = await response.json()

    dispatch({ type: PROJECTS_ACTIONS_TYPES.FETCH_LIST, payload: models })
}
