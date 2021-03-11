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
  return (
    <div>
      <input type="text" value={name} onInput={onInputHandler} />
      <Start onClick={onButtonHandler} />
    </div>
  );
}

export default TrackerInput;
