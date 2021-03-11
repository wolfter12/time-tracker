const TRACKERS = 'trackers';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(TRACKERS);
    if (serializedState !== null) {
      const parsedState = JSON.parse(serializedState);
      if (Array.isArray(parsedState)) {
        return { trackers: { items: parsedState } };
      }
    }
    return {};
  } catch (err) {
    return {};
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(TRACKERS, serializedState);
  } catch (err) {
    // Ignore write errors.
  }
};
