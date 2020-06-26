import React, { useState } from 'react';
import styles from "@scss/targetItem.module.scss";
import sumIconPath from "@images/icons/sum.svg";
import pendingIconPath from "@images/icons/pending-icon.png";
import { useDispatch, useSelector } from 'react-redux';
import { createAddItemAction } from '@/actions';

export const SendTargetItem = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const list = useSelector((state: any) => state.list)
  return (
    <div className={styles.sendTargetItem}>
      <img src={inputValue.length !== 0 ? pendingIconPath : sumIconPath} alt="sum" className={styles.sendStatus} />
      <input
        value={inputValue}
        onChange={(v) => { setInputValue(v.target.value) }}
        className={styles.inputArea}
        placeholder="添加任务"
        onKeyPress={(e) => {
          if (e.nativeEvent.keyCode === 13) {
            if (inputValue !== '') {
              const data: any = {};
              if (list.length === 0) {
                data.id = 1;
              } else {
                data.id = list[list.length - 1]['id'];
              }
              data.id =
                data.content = inputValue;
              data.finished = false;
              dispatch(createAddItemAction(data))
              setInputValue('');
            }
          }
        }}
      />
    </div>
  )
}
