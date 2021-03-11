import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

// const initialState = {};

const middleware = [thunk];

// as a backup use initialState above instead persistedState
const store = createStore(
  rootReducer,
  persistedState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(() => {
  const trackers = store.getState().trackers.items || [];
  saveState([...trackers]);
});

export default store;
