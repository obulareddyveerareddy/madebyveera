import { connect }      from 'react-redux';
import DashboardPage    from './DashboardPage';

const mapStateToProps = (state, ownProps) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

const DashboardLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardPage)

export default DashboardLink