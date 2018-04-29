import { connect } from 'react-redux';
import { login, logout, clearSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.formType;
  const formAction = login;

  return {
    formAction: user => dispatch(formAction(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
