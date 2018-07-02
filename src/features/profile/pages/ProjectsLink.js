import { connect }      from 'react-redux'
import ProjectsPage     from './ProjectsPage'

const mapStateToProps = (state, ownProps) => {
  return {
      
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    
  }
}

const ProjectsLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsPage)

export default ProjectsLink