import React from 'react'
import styles from '@scss/modal.module.scss';

interface IModal {
  title?: string;
  children?: any;
}

export const Modal = ({ children, title }: IModal) => {
  return (
    <div className={styles.curtain}>
      <div className={styles.modalBox}>
        <div className={styles.header}>
          <p>{title}</p>
          <div className={styles.fork}></div>
        </div>
        <div className={styles.content}>
          {children}
        </div>
        <div className={styles.footer}></div>
      </div>
    </div>
  )
}
