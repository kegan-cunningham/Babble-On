import { combineReducers } from 'redux';
import ErrorsReducer from './errors_reducer';
import EntitiesReducer from './entities_reducer';
import UiReducer from './ui_reducer';
import SessionReducer from './session/session_reducer';
import ServersReducer from './servers_reducer';

export default combineReducers({
  errors: ErrorsReducer,
  entities: EntitiesReducer,
  ui: UiReducer,
  session: SessionReducer,
  servers: ServersReducer,
});
