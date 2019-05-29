import { combineReducers } from 'redux';
import secrets from "./secrets";

const dummyApp = combineReducers({
  secrets,
})

export default dummyApp;
