import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTracker } from '../../actions/trackersActions';
import { MdPlayCircleOutline as Start } from 'react-icons/md';
// import PropTypes from 'prop-types';

// const TRACKERS = 'trackers';

function TrackerInput() {
  const [name, setName] = useState('');

  const dispatch = useDispatch();

  const onInputHandler = (e) => {
    setName(e.target.value);
  };

  const onButtonHandler = () => {
    dispatch(addTracker(name));
    setName('');
  };
  return (
    <div>
      <input type="text" value={name} onInput={onInputHandler} />
      <Start onClick={onButtonHandler} />
    </div>
  );
}

// TrackerInput.propTypes = {
//   addTracker: PropTypes.func.isRequired,
// };

export default TrackerInput;
