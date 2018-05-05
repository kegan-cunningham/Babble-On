import UserShow from './user_show';
import { connect } from 'react-redux';
import { fetchUser, fetchUsers } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[ownProps.match.params.id];
  return {
    user,
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchUsers: () => dispatch(fetchUsers()),
    editUser: (user, userId) => dispatch(editUser(user, userId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserShow);
