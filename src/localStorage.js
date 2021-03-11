const TRACKERS = 'trackers';

export const loadData = () => {
  try {
    const serializedData = localStorage.getItem(TRACKERS);
    if (serializedData !== null) {
      const parsedData = JSON.parse(serializedData);
      if (Array.isArray(parsedData)) {
        return parsedData;
      }
    }
    return [];
  } catch (err) {
    return [];
  }
};

export const saveData = (trackers) => {
  try {
    const serializedData = JSON.stringify(trackers);
    localStorage.setItem(TRACKERS, serializedData);
  } catch (err) {
    // Ignore write errors.
  }
};
