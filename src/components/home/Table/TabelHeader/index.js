import React from 'react'
import PropTypes from 'prop-types'
import { InfoOutlined } from '@material-ui/icons'
import styles from 'components/home/Table/TabelHeader/styles.module.scss'

export const header = [
    { id: 0, title: 'ID' },
    { id: 1, title: 'Проект' },
    { id: 2, title: 'Alias' },
    { id: 3, title: 'Домен' },
    { id: 4, title: 'Описание' },
]

/**
 * Render header of the table
 *
 * @param {boolean} isProjectsExist
 *
 * @returns {*}
 * @constructor
 */
export const TableHeader = ({ isProjectsExist }) => {
    const info = isProjectsExist
        ? 'Кликните по проеку, чтобы увидеть подробную информацию'
        : 'Для начала работы добавьте проект в список'

    return (
        <>
            <div className={styles.row}>
                {header.map(item => (
                        <div key={item.id} className={styles.col}>
                            {item.title}
                        </div>
                    ),
                )}
            </div>
            <div className={styles.info}>
                <InfoOutlined className={styles.icon}/>
                {info}
            </div>
        </>
    )
}

TableHeader.propTypes = {
    isProjectsExist: PropTypes.bool,
}

TableHeader.defaultProps = {
    isProjectsExist: false,
}
