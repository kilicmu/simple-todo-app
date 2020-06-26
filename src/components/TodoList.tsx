import React, { ReactChild } from 'react'
import styles from "@scss/todoList.module.scss";
import { ElementList } from './common';
export const TodoList = ({ children }: { children?: ReactChild | ReactChild[] }) => {
  return (
    <div className={styles.todoList}>
      {children}
    </div>
  )
}
