import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTracker } from '../../actions/trackersActions';
import { MdRemove as Delete } from 'react-icons/md';
import { IconContext } from 'react-icons';
import style from './DeleteButton.module.css';

function DeleteButton({ id }) {
  const dispatch = useDispatch();
  const deleteTrackerHandler = () => {
    dispatch(deleteTracker(id));
  };
  return (
    <div className={style.delete} onClick={deleteTrackerHandler}>
      <IconContext.Provider value={{ className: style.delete }}>
        <Delete />
      </IconContext.Provider>
    </div>
  );
}

export default DeleteButton;
