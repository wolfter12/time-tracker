import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTracker } from '../../actions/trackersActions';
import { MdPlayCircleFilled as Start } from 'react-icons/md';
import { IconContext } from 'react-icons';
import style from './TrackerInput.module.css';

function TrackerInput() {
  const [name, setName] = useState('');
  const inputEl = useRef(null);

  const dispatch = useDispatch();

  const onDivClick = () => {
    inputEl.current.focus();
  };

  const onInputHandler = (e) => {
    setName(e.target.value);
  };

  const onButtonHandler = () => {
    dispatch(addTracker(name));
    setName('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      dispatch(addTracker(name));
    }
  };

  return (
    <div className={style['input-container']} onClick={onDivClick}>
      <input
        type="text"
        value={name}
        onInput={onInputHandler}
        onKeyDown={handleKeyDown}
        placeholder="Enter tracker name"
        ref={inputEl}
      />
      <div className={style.start} onClick={onButtonHandler}>
        <IconContext.Provider
          value={{
            className: style['react-icon'],
          }}
        >
          <Start />
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default TrackerInput;
