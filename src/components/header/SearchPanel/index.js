import PropTypes from 'prop-types'
import React, { useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'
import { Search } from '@material-ui/icons'
import { Tip } from 'components/global/Tip'
import { ResultList } from 'components/header/SearchPanel/ResultList'

/**
 * Render search panel
 *
 * @param {Array} projectsList
 *
 * @returns {*}
 * @constructor
 */
export const SearchPanel = ({ projectsList }) => {
    const [active, setActive]             = useState(false)
    const [searchString, setSearchString] = useState('')
    const [projects, setProjects]         = useState([])

    useEffect(() => {
        setProjects(projectsList)
    }, [projectsList])


    const searchRef = useRef()

    const showSearch  = () => setActive(true)
    const hideSearch  = () => setActive(false)
    const inputToggle = event => setSearchString(event.target.value)

    const getSearchFocus = () => searchRef.current.focus()

    const tipTitle = active ? '' : 'Нажмите чтобы начать'

    const results = projects && projects.filter(project => project.title.toLowerCase().includes(searchString.toLowerCase()))
    return (
        <Tip title={tipTitle}>
            <div
                tabIndex={1}
                className={[styles.searchWrapper, active && styles.active].join(' ')}
                onClick={getSearchFocus}
                onFocus={showSearch}
                onBlur={hideSearch}
            >
                <Search className={styles.searchIcon}/>
                <input
                    ref={searchRef}
                    onChange={inputToggle}
                    className={styles.search}
                    type="text"
                    placeholder={'Поиск проекта...'}
                    value={searchString}
                />
                {active && results && <ResultList results={results} searchString={searchString}/>}
            </div>
        </Tip>
    )
}

SearchPanel.propTypes = {
    projectsList: PropTypes.array,
}

SearchPanel.defaultProps = {
    projectsList: [],
}
