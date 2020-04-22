import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { Table } from 'components/home/Table'
import { Header } from 'containers/Header'
import { ProjectCounter } from 'components/home/ProjectCounter'
import styles from './styles.module.scss'
import { AddProject } from 'components/home/AddProject'
import { Button } from 'reactstrap'
import Project from 'helpers/models/Project'

const name = 'Пользователь'

/**
 * Render Home Page
 *
 * @param {Array} projectsList
 * @param {function} createProject
 * @param {function} editProject
 * @param {function} deleteProject
 * @param {function} getProjectList
 *
 * @return {*}
 * @constructor
 */
export const Home = ({ projectsList, createProject, editProject, deleteProject, getProjectList }) => {
    const [projects, setProjects] = useState(Project.createList([]))

    useEffect(() => {
        setProjects(Project.createList(projectsList))
    }, [projectsList])

    return (
        <>
            <Header name={name}/>
            <Button className="mt-5 ml-5" color="primary" onClick={() => getProjectList()}>
                {' Получить список проектов'}
            </Button>
            <div className={styles.info}>
                <ProjectCounter count={projects.getCount()}/>
                <AddProject createProject={createProject}/>
            </div>
            <Table
                editProject={editProject}
                deleteProject={deleteProject}
                projects={projects}
            />
        </>
    )
}

Home.propTypes = {
    createProject:  PropTypes.func,
    deleteProject:  PropTypes.func,
    editProject:    PropTypes.func,
    getProjectList: PropTypes.func,
    projectsList:   PropTypes.array,
}

Home.defaultProps = {
    createProject:  () => null,
    deleteProject:  () => null,
    editProject:    () => null,
    getProjectList: () => null,
    projectsList:   [],
}
