import { combineReducers } from 'redux';

import { tasks } from './tasks/tasks-reducer';

export const rootReducer = combineReducers({
    tasks,
});
