import React from 'react';
import styles from "@/scss/background.module.scss";


export const BackGroundSection = ({ children }: { children: JSX.Element[] }) => (
  <section className={styles.backPicture}>{children}</section>
);