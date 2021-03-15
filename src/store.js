import { createStore, applyMiddleware } from 'redux';
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
  applyMiddleware(...middleware)
);

store.subscribe(() => {
  const trackers = store.getState().trackers || [];
  saveData([...trackers]);
});

export default store;
