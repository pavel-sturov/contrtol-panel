import React from 'react'
import styles from 'components/home/Table/TabelBody/styles.module.scss'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { EditProject } from 'components/home/EditProject'
import { DeleteProject } from 'components/home/DeleteProject'

const editTitle = 'Редактировать проект'

export const TableBody = ({ editProject, deleteProject, projects }) => {
    const projectsList = projects.getList()

    return (
        projectsList && projectsList.map(project => (
                <div key={project.getId()} className={styles.wrapper}>
                    <div className={styles.row}>
                        <div className={styles.col}>
                            {project.getId()}
                        </div>
                        <div className={styles.col}>
                            <Link className={styles.link} to={`${project.getAlias()}`}>
                                <div className={styles.name}>
                                    {project.getTitle()}
                                </div>
                            </Link>
                        </div>
                        <div className={styles.col}>
                            {project.getAlias()}
                        </div>
                        <div className={styles.col}>
                            {project.getDomain()}
                        </div>
                        <div className={[styles.col].join(' ')}>
                            {project.getDescription()}
                        </div>
                    </div>
                    <div className={styles.modal}>
                        <EditProject
                            mainTitle={`${editTitle} ${project.getTitle()}`}
                            edit={editProject}
                            project={project}
                        />
                        <DeleteProject project={project} action={deleteProject}/>
                    </div>
                </div>
            ),
        )
    )
}

TableBody.propTypes = {
    deleteProject: PropTypes.func,
    editProject:   PropTypes.func,
    projects:      PropTypes.object,
}

TableBody.defaultProps = {
    deleteProject: () => null,
    editProject:   () => null,
    projects:      {},
}
