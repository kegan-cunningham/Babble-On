import * as APIUtil from '../util/user_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users,
});

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user,
});

export const fetchUsers = () => dispatch => {
  APIUtil.fetchUsers().then(users => (
    dispatch(receiveUsers(users))
  ))
};

export const fetchUser = id => dispatch => (
  APIUtil.fetchUser(id).then(user => (
    dispatch(receiveUser(user))
  ))
);

export const editUser = (user, userId) => dispatch => (
  APIUtil.editUser(user, userId).then(user => (
    dispatch(receiveUser(user))
  ))
);
