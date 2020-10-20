import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import { actions } from '../slices';
import styles from './ButtonGroup.module.css';

const ButtonGroup = () => {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.displayConditions.sort);
  const handleClick = (typeSort) => () => {
    dispatch(actions.setSort(typeSort));
  };
  const getClassName = (typeSort) => cn(styles.btn,
    styles.btn__reset, { [styles.btn_checked]: sort === typeSort });

  return (
    <div className={styles.btn_group}>
      <button
        type="button"
        className={getClassName('cheapest')}
        onClick={handleClick('cheapest')}
      >
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button
        type="button"
        className={getClassName('quickest')}
        onClick={handleClick('quickest')}
      >
        САМЫЙ БЫСТРЫЙ
      </button>
    </div>
  );
};

export default ButtonGroup;
