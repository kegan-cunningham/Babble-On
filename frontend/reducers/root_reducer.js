import { combineReducers } from 'redux';
import ErrorsReducer from './errors_reducer';
import EntitiesReducer from './entities_reducer';
import UiReducer from './ui_reducer';
import SessionReducer from './session/session_reducer';
import ServersReducer from './servers_reducer';
import ChannelsReducer from './channels/channels_reducer';
import MessagesReducer from './messages/messages_reducer';

export default combineReducers({
  errors: ErrorsReducer,
  entities: EntitiesReducer,
  ui: UiReducer,
  channels: ChannelsReducer,
  messages: MessagesReducer,
  session: SessionReducer,
  servers: ServersReducer,
});
