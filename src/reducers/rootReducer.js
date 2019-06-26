import authReducer from './authReducer';
import checklistReducer from './checklistReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  auth: authReducer,
  checklists: checklistReducer,
  firestore: firestoreReducer
});

export default rootReducer;