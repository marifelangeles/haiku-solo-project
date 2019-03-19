import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import shelfInfo from './shelfInfoReducer';
import wordInfo from './wordInfoReducer';
import haikuLine from './haikuReducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  shelfInfo, // will have description and img url.
  wordInfo, // will have word, definition and maybe POS & pronunciation
  haikuLine, // have properties: line_1, line_2, line_3
});

export default rootReducer;
