import { project } from 'redux/actions/creators/Project'

export const ProjectActions = {
    create:  project.create,
    edit:    project.edit,
    delete:  project.delete,
    getList: project.getList,
}
