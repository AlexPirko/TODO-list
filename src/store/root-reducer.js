import { combineReducers } from 'redux';

import { tasks } from './tasks/tasks-reducer';
import { filters } from './filters/filters-reducer';

export const rootReducer = combineReducers({
    tasks,
    filters,
});
