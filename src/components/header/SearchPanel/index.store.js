import { SearchPanel } from 'components/header/SearchPanel/index'
import { connect } from 'react-redux'
import { StateSelectors } from 'redux/selectors'

const mapStateToProps = state => ({
    projectsList: StateSelectors.project.list(state),
})

export default connect(mapStateToProps, null)(SearchPanel)
