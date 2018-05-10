import merge from 'lodash/merge';

import { RECEIVE_USERS, RECEIVE_USER } from '../../actions/user_actions';
import { RECEIVE_SERVER, REMOVE_SERVER } from '../../actions/server_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USERS:
      const users = {};
      Object.values(action.users).map((user) => {
        users[user.id] = user;
      });
      return Object.assign({}, state, users);
    case RECEIVE_USER:
      const user = action.user;
      return merge({}, state, { [user.id]: user });
    default:
      return state;
  }
};

export default usersReducer;
