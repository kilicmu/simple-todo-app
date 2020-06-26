import React, { useState } from 'react';
import styles from "@scss/menu.module.scss"

interface IMenuItem { icon?: string; children: string; }

export const MenuItem = ({ icon, children }: IMenuItem) => {
  const [currentStyle, setCurrentStyle]: [string[], any] = useState([])
  const clicked = () => {
    setCurrentStyle([styles.active, ...currentStyle]);
  }
  return (
    <li
      className={`${styles.itemStyle} ${styles.menuItem}`}
      onClick={clicked}
    >
      {icon ? <img src={icon} className={styles.icon} /> : ''}
      {children}
    </li>
  )
}

interface IMenu {
  children: any;
  icon?: string;
  title?: string;
  width?: string;
  spread?: boolean;
}
export const Menu = ({ icon, children, title, width, spread }: IMenu) => {
  const [_spread, setSpread] = useState(spread ? spread : false);
  return (
    <ul className={styles.menuOutline} style={{ width: width ? width : "100%" }}>
      <li
        className={styles.itemStyle}
        onClick={() => { setSpread(!_spread) }}
      >{icon ? <img src="icon" className={styles.icon} /> : ''} {title ? title : ''}</li>
      {_spread ? children : null}
    </ul>
  )
}

interface IGroup {
  title: string;
  children: any;
  spread?: boolean;
}

export const Group = ({ title, children, spread }: IGroup) => {
  const [_spread, setSpread] = useState(spread ? spread : false);

  return (
    <>
      <li className={styles.groupTitle} onClick={() => { setSpread(!_spread); }}>{title}</li>
      {_spread ? children : null}
    </>
  )
}
