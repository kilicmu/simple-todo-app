import React, { useState, useEffect, useRef } from 'react';
import styles from '@scss/headerToolBar.module.scss';
import scanBtnPath from "@images/icons/scan-btn.png";
import testBtnPath from "@images/icons/test-btn.png";
import { useSelector } from 'react-redux';
const QRCode = require('qrcode.react');

interface IToolBar {
  height?: number;
  children: any;
  className?: string;
}

const ToolBar = ({ children, className, height = 0 }: IToolBar) => {
  const codeRef = useRef(null);
  return (
    <div className={`${styles.toolBoxOutline} ${className ? className : ''}`}>
      {children}
      {/* <div> */}
      <QRCode
        value={window.location.href}
        className={styles.toolBox}
        size="200"
        style={{ height: height }}
        id="codeScope"
      ></QRCode>
      {/* </div > */}
    </div >
  )
}

const HeaderInfo = () => {
  const [date] = useState(new Date);
  return (
    <>
      <span className={styles.myDay}>我的一天</span>
      <br />
      <span className={styles.currentTime}>{`${date.getMonth() + 1}月${date.getDate()}日，星期${'日一二三四五六'.charAt(date.getDay())}`}</span>
    </>
  );
}

const HeaderTools = () => {
  const [QRHeight, setQRHeight] = useState(0);
  return (
    <div className={styles.toolsBar}>
      {/* <ToolBar> */}
      <img
        src={testBtnPath}
        alt="test-button"
        className={`${styles.testBtn}`}
      />
      {/* </ToolBar> */}

      <ToolBar height={QRHeight}>
        <img
          src={scanBtnPath}
          alt="scan-button"
          className={styles.toolBtn}
          onClick={() => { setQRHeight((pre) => (pre === 0 ? 200 : 0)) }}
        />
      </ToolBar>
    </div>
  );
}



export const HeaderToolBar = () => (
  <header className={styles.heades}>
    <HeaderInfo />
    <HeaderTools />
  </header>
);