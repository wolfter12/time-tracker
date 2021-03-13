import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTracker } from '../../actions/trackersActions';
import { MdRemoveCircleOutline as Delete } from 'react-icons/md';
import { IconContext } from 'react-icons';
import style, { icon, baseline } from './DeleteButton.module.css';

function DeleteButton({ id }) {
  const dispatch = useDispatch();
  const deleteTrackerHandler = () => {
    dispatch(deleteTracker(id));
  };
  return (
    <div className={style.btn}>
      <div className={`${icon} ${baseline}`} onClick={deleteTrackerHandler}>
        <IconContext.Provider value={{ className: style['react-icon'] }}>
          <Delete />
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default DeleteButton;
