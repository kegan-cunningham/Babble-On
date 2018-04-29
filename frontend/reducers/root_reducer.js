import { combineReducers } from 'redux';
import ErrorsReducer from './errors_reducer';
import SessionReducer from './session/session_reducer';

export default combineReducers({
  errors: ErrorsReducer,
  session: SessionReducer,
});
