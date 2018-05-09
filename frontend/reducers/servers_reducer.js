import { RECEIVE_ALL_SERVERS, RECEIVE_SERVER } from '../actions/server_actions';
import merge from 'lodash/merge';

const defaultState = {
  currentServer: null,
  servers: null
};

const serverReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_SERVERS:
      console.log(action.servers)
      const servers = action.servers;
      newState = merge({}, oldState);
      newState.servers = action.servers;
      return newState;
    case RECEIVE_SERVER:
      const currentServer = action.currentServer;
      newState = merge({}, oldState);
      newState.currentServer = currentServer;
      return newState;
    default:
      return oldState;
  }
};

export default serverReducer;
