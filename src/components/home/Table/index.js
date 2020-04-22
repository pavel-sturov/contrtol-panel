import React from 'react'
import styles from './styles.module.scss'
import { TableHeader } from 'components/home/Table/TabelHeader'
import PropTypes from 'prop-types'
import { TableBody } from 'components/home/Table/TabelBody'

/**
 * Render full table
 *
 * @param {function} editProject
 * @param {function} deleteProject
 * @param {Object} projects
 *
 * @returns {*}
 * @constructor
 */
export const Table = ({ editProject, deleteProject, projects }) => {
    return (
        <div className={styles.wrapper}>
            <TableHeader isProjectsExist={!!projects.getCount()}/>
            <TableBody
                editProject={editProject}
                deleteProject={deleteProject}
                projects={projects}
            />
        </div>
    )
}

Table.propTypes = {
    deleteProject: PropTypes.func,
    editProject:   PropTypes.func,
    projects:      PropTypes.object,
}

Table.defaultProps = {
    deleteProject: () => null,
    editProject:   () => null,
    projects:      {},
}
