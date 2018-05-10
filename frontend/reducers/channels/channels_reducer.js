import { RECEIVE_ALL_CHANNELS, RECEIVE_CHANNEL, REMOVE_CHANNEL } from '../../actions/channel_actions';
import { RECEIVE_SERVER } from '../../actions/server_actions';
import { LOGOUT_USER } from '../../actions/session_actions';
import merge from 'lodash/merge';

const defaultState = {
  channels: null,
  currentChannel: null,
};

const channelReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  let channels;
  let newState;
  switch (action.type) {
    case RECEIVE_SERVER:
      newState = merge({}, oldState);
      channels = action.currentServer.channels;
      newState.channels = channels;
      return newState;
    case RECEIVE_ALL_CHANNELS:
      newState = merge({}, oldState);
      channels = Object.values(action.channels);
      newState.channels = channels;
      return newState;
    case RECEIVE_CHANNEL:
      newState = merge({}, oldState);
      const currentChannel = action.currentChannel;
      newState.currentChannel = currentChannel;
      return newState;
    case REMOVE_CHANNEL:
      newState = merge({}, oldState);
      delete newState.channels[parseInt(action.channelId)];
      return newState;
    case LOGOUT_USER:
      return defaultState;
    default:
      return oldState;
  }
};

export default channelReducer;
