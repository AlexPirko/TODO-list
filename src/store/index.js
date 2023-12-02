import { legacy_createStore as createStore } from 'redux';

import { rootReducer } from './root-reducer';
import { getStorageState } from '../helpers/getStorageState';
import { setStorageState } from '../helpers/setStorageState';

export const cofigureStore = () => {
    const persistedState = getStorageState();

    const store = createStore(
        rootReducer,
        persistedState,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__(),
    );

    store.subscribe(() => {
        setStorageState(store.getState());
    });

    return store;
};
