import authReducer from './authReducer';
import checklistReducer from './checklistReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  checklists: checklistReducer
});

export default rootReducer;