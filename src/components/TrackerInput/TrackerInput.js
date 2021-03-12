import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTracker } from '../../actions/trackersActions';
import { MdPlayCircleFilled as Start } from 'react-icons/md';
import { IconContext } from 'react-icons';
import style from './TrackerInput.module.css';

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
    if (e.key === 'Enter') {
      dispatch(addTracker(name));
    }
  };

  return (
    <div className={style['tracker-input']}>
      <form>
        <input
          type="text"
          value={name}
          onInput={onInputHandler}
          onKeyDown={handleKeyDown}
          placeholder="Enter tracker name"
        />
        {/* TODO: Add pointer on hover/focus */}
        <div className={style.start} onClick={onButtonHandler}>
          <IconContext.Provider
            value={{
              className: style['react-icon'],
            }}
          >
            <Start />
          </IconContext.Provider>
        </div>
      </form>
    </div>
  );
}

export default TrackerInput;
