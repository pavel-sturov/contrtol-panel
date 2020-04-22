import { PROJECTS_ACTIONS_TYPES } from 'redux/actions/types'
import { sortById } from 'helpers/methods'

const initialState = {
    list: [
        { id: 2, title: 'Sahalin', alias: 'sahalin', domain: 'sahalin/v1', description: 'Онлайн-гипермаркет' },
        { id: 3, title: 'Megafon', alias: 'megafon', domain: 'megafon/v1', description: 'Сатовый оператор' },
        { id: 4, title: 'Zooqie', alias: 'zooqie', domain: 'zooqie/v1', description: 'Онлайн магазин для животных' },
    ],
}

/**
 * Root reducer
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export const projectsReducer = (state = initialState, action) => {
    switch (action.type) {
        case (PROJECTS_ACTIONS_TYPES.CREATE):
            return { ...state, list: sortById([...state.list]), created: action.payload }

        case (PROJECTS_ACTIONS_TYPES.EDIT):
            const list = state.list.filter(item => item.id !== action.payload.id)

            return { ...state, list: sortById([...list, action.payload]) }

        case (PROJECTS_ACTIONS_TYPES.DELETE):
            const newList = state.list.filter(item => item.id !== action.payload.id)

            return { ...state, list: sortById([...newList]) }

        case (PROJECTS_ACTIONS_TYPES.FETCH_LIST):
            const projectsList = state.list.filter(item => !action.payload.filter(el => el.id === item.id).length && item)

            return { ...state, list: sortById([...projectsList, ...action.payload]) }

        default:
            return state
    }
}
