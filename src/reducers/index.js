import { combineReducers } from 'redux';
import ticketReducer from './ticketReducers';

const rootReducer = combineReducers({
  ticket: ticketReducer,
});

export default rootReducer;
