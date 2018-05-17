import { connect } from 'react-redux';
import { signup, clearSessionErrors } from '../../actions/session_actions';
import JoinForm from './join_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formAction = signup;

  return {
    formAction: user => dispatch(formAction(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(JoinForm));
