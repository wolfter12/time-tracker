import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTracker } from '../../actions/trackersActions';
import { MdPlayCircleOutline as Start } from 'react-icons/md';

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

  const handleKeyDown = (e) => {
    console.log('key pressed');
    if (e.key === 'Enter') {
      dispatch(addTracker(name));
    }
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onInput={onInputHandler}
        onKeyDown={handleKeyDown}
      />
      <Start onClick={onButtonHandler} />
    </div>
  );
}

export default TrackerInput;
