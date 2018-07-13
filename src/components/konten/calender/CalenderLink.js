import { connect }      from 'react-redux';
import CalenderPage    from './CalenderPage';

const mapStateToProps = (state, ownProps) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

const CalenderLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(CalenderPage)

export default CalenderLink