import React, { useCallback, useRef } from 'react'
import styles from "@scss/toHideButton.module.scss"
import nextIconPath from "@images/icons/next.png";
import { useSelector, useDispatch } from 'react-redux';
import { createReverseShowStateAction } from '@/actions';
export const ToHideButton = () => {
  const showFinished = useSelector((state: any) => state.showFinished)
  const dispatch = useDispatch();
  const imgRef = useRef(null);
  const clickToReverseState = useCallback(() => {
    const icon: any = imgRef.current;
    if (!showFinished) {
      icon.style.transform = 'rotate(90deg)';
    } else {
      icon.style.transform = 'rotate(0deg)';
    }
    dispatch(createReverseShowStateAction());
  }, [showFinished])
  return (
    <div className={styles.toHideButton} onClick={clickToReverseState}>
      <span className={styles.finished}>已完成</span>
      <img
        src={nextIconPath}
        alt="next"
        className={styles.nextIcon}
        ref={imgRef}
      />
    </div>
  )
}