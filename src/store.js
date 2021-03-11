import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { loadData, saveData } from './localStorage';

const persistedData = loadData();

const initialState = {
  trackers: persistedData,
};

const middleware = [thunk];

// as a backup use initialState above instead persistedState
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(() => {
  const trackers = store.getState().trackers || [];
  saveData([...trackers]);
});

export default store;
