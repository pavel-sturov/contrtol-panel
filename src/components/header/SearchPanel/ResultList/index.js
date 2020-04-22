import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import { List } from '@material-ui/icons'
import { Link } from 'react-router-dom'

/**
 * Render result list of search panel
 *
 * @param {Array} results
 * @param {string} searchString
 *
 * @returns {*}
 * @constructor
 */
export const ResultList = ({ results, searchString }) => {
    const lightSearchString = title => {
        const idx = title.toLowerCase().indexOf(searchString.toLowerCase())

        const str  = title.split('').slice(idx, idx + searchString.length).join('')
        const str1 = title.split('').slice(0, idx).join('')
        const str2 = title.split('').slice(idx + searchString.length).join('')

        if (!searchString.length) {
            return (
                <span>{title}</span>
            )
        }
        return (
            <>
                <span>{str1}</span>
                <span className={styles.lightSearchString}>{str}</span>
                <span>{str2}</span>
            </>
        )
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <List/>
                <div className={styles.title}>
                    Результаты поиска
                </div>
            </div>
            {results.map(project =>
                <Link to={project.alias} key={project.id} className={styles.resultItem}>
                    <div>{lightSearchString(project.title)}</div>
                    <span className={styles.description}>{project.description}</span>
                </Link>,
            )}
        </div>
    )
}

ResultList.propTypes = {
    results:      PropTypes.array,
    searchString: PropTypes.string,
}

ResultList.defaultProps = {
    results:      [],
    searchString: '',
}
