import { Home } from 'containers/Home/index'
import { connect } from 'react-redux'
import { DispatchSelectors, StateSelectors } from 'redux/selectors'

const mapStateToProps = state => ({
    projectsList: StateSelectors.project.list(state),
})

const mapDispatchToProps = {
    createProject:  DispatchSelectors.project.create,
    editProject:    DispatchSelectors.project.edit,
    deleteProject:  DispatchSelectors.project.delete,
    getProjectList: DispatchSelectors.project.getList,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
