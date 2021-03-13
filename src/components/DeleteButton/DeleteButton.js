import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTracker } from '../../actions/trackersActions';
import { MdRemoveCircleOutline as Delete } from 'react-icons/md';
import IconButton from '../IconButton';
import style from './DeleteButton.module.css';

function DeleteButton({ id }) {
  const dispatch = useDispatch();
  const deleteTrackerHandler = () => {
    dispatch(deleteTracker(id));
  };
  return (
    <div className={style.btn} onClick={deleteTrackerHandler}>
      <IconButton>
        <Delete />
      </IconButton>
    </div>
  );
}

export default DeleteButton;
