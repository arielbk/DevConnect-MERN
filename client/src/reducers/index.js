import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import profilereducer from './profileReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profilereducer,
});
