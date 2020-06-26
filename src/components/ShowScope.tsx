import React from 'react'
import { ElementList } from './common'
import styles from '@/scss/showScope.module.scss';
export const ShowScope = ({ children }: { children: ElementList }) => {
  return (
    <article className={styles.showScope}>
      {children}
    </article>
  )
}
