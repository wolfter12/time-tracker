import React from 'react';
import style from './IconButton.module.css';

function IconButton({ children }) {
  return <div className={style.icon}>{children}</div>;
}

export default IconButton;
