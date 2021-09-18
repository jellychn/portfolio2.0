import { combineReducers, createStore, applyMiddleware } from 'redux';
import appReducer from './ducks/app';

let middleware: never[] = [];

const reducer = combineReducers({
    app: appReducer 
});

const store = createStore(
    reducer,
    {},
    applyMiddleware(...middleware)
);

export default store;

export type RootState = ReturnType<typeof reducer>