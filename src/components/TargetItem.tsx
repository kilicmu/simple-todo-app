import React, { useState, useCallback } from 'react'
import styles from '@scss/targetItem.module.scss';
import successIconPath from "@images/icons/success.png";
import pendingIconPath from "@images/icons/pending-icon.png";
import { useDispatch } from 'react-redux';
import { createFinishTargetAction, createRemoveTargetAction } from '@/actions';

export const TargetItem = ({ id, finished, content }: { id: number, finished?: boolean, content?: string }) => {
  /**
   * true 为已经完成， flase为未完成
   */
  const dispatch = useDispatch();
  const finishTarget = useCallback(() => {
    dispatch(createFinishTargetAction(id))
  }, [id])
  const removeTarget = useCallback(() => {
    dispatch(createRemoveTargetAction(id));
  }, [id])

  return (
    <div className={styles.itemOutline} >
      <img src={finished ? successIconPath : pendingIconPath} alt="status" className={styles.statusImg} onClick={finishTarget} />
      <span className={styles.targetDescript}>{content}</span>
      <div
        className={`${styles.fork} ${styles.forkPosition}`}
        onClick={removeTarget}
      ></div>
    </div>
  )
}
