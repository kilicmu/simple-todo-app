import React from 'react';
import styles from '@scss/leftMenu.module.scss';
import { Menu, MenuItem, Group } from './Menu';
import ListIcon from "@images/icons/list.png";
export const LeftMenu = () => {
  return (
    <div className={styles.outline}>
      <ul className={styles.headline}>
        <li className={styles.headline}>
          <div className={styles.headPicture}></div>
          <span className={styles.name}>kilic</span>
          <span className={styles.mail}>kilicmu3389@outlook.com</span>
        </li>
      </ul>
      <Menu title="2019年" width="200">
        <Group title="1月" >
          <MenuItem icon={ListIcon}>1</MenuItem>
          <MenuItem icon={ListIcon}>1</MenuItem>
          <MenuItem icon={ListIcon}>1</MenuItem>
          <MenuItem icon={ListIcon}>1</MenuItem>
          <MenuItem icon={ListIcon}>1</MenuItem>
          <MenuItem icon={ListIcon}>1</MenuItem>
          <MenuItem icon={ListIcon}>1</MenuItem>
          <MenuItem icon={ListIcon}>1</MenuItem>
          <MenuItem icon={ListIcon}>1</MenuItem>
          <MenuItem icon={ListIcon}>1</MenuItem>
          <MenuItem icon={ListIcon}>1</MenuItem>
          <MenuItem icon={ListIcon}>1</MenuItem>
          <MenuItem icon={ListIcon}>1</MenuItem>
          <MenuItem icon={ListIcon}>1</MenuItem>
          <MenuItem icon={ListIcon}>1</MenuItem>
          <MenuItem icon={ListIcon}>1</MenuItem>
          <MenuItem icon={ListIcon}>1</MenuItem>
          <MenuItem icon={ListIcon}>1</MenuItem>
          <MenuItem icon={ListIcon}>1</MenuItem>
          <MenuItem icon={ListIcon}>1</MenuItem>
          <MenuItem icon={ListIcon}>1</MenuItem>
        </Group>
        <Group title="2月">
          <MenuItem icon={ListIcon}>2</MenuItem>
        </Group>
      </Menu>
    </div>
  )
}