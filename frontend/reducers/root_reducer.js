import { combineReducers } from 'redux';
import ErrorsReducer from './errors_reducer';
import UiReducer from './ui_reducer';
import SessionReducer from './session/session_reducer';

export default combineReducers({
  errors: ErrorsReducer,
  ui: UiReducer,
  session: SessionReducer,
});
