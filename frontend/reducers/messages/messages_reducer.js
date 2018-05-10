import { RECEIVE_CHANNEL, REMOVE_CHANNEL } from '../../actions/channel_actions';
import { LOGOUT_USER } from '../../actions/session_actions';
import merge from 'lodash/merge';

const defaultState = {
  messages: null
};

const messagesReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_CHANNEL:
      const messages = action.currentChannel.messages;
      return { messages };
    case REMOVE_CHANNEL:
      return defaultState;
    case LOGOUT_USER:
      return defaultState;
    default:
      return oldState;
  }
};

export default messagesReducer;
