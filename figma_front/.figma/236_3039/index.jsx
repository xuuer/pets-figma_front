import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.frame2}>
      <div className={styles.header}>
        <div className={styles.leftIcon}>
          <img src="../image/mk58lsst-1hvj45o.svg" className={styles.back} />
        </div>
        <p className={styles.myPets}>编辑宠物信息</p>
        <div className={styles.statusBarIPhone}>
          <div className={styles.time2}>
            <p className={styles.time}>9:41</p>
          </div>
          <div className={styles.levels}>
            <img
              src="../image/mk58lsst-d06lrk8.svg"
              className={styles.cellularConnection}
            />
            <img src="../image/mk58lsst-wdakauu.svg" className={styles.wifi} />
            <img src="../image/mk58lsst-m5d614z.svg" className={styles.frame} />
          </div>
        </div>
      </div>
      <div className={styles.iconBox}>
        <div className={styles.ellipse}>
          <img src="../image/mk58lsst-yn7hx5f.svg" className={styles.plus} />
        </div>
      </div>
      <div className={styles.inputs}>
        <div className={styles.frame15}>
          <p className={styles.label}>姓名</p>
          <p className={styles.input}>布丁</p>
        </div>
        <div className={styles.input2}>
          <div className={styles.frame152}>
            <p className={styles.label}>年龄</p>
            <p className={styles.input}>4岁，2个月</p>
          </div>
          <img src="../image/mk58lsst-my6a19h.svg" className={styles.right} />
        </div>
        <div className={styles.input2}>
          <div className={styles.frame152}>
            <p className={styles.label}>种类</p>
            <p className={styles.input}>狗</p>
          </div>
          <img src="../image/mk58lsst-my6a19h.svg" className={styles.right} />
        </div>
        <div className={styles.frame15}>
          <p className={styles.label}>品种</p>
          <p className={styles.input}>边牧</p>
        </div>
        <div className={styles.input2}>
          <div className={styles.frame152}>
            <p className={styles.label}>性别</p>
            <p className={styles.input}>男</p>
          </div>
          <img src="../image/mk58lsst-my6a19h.svg" className={styles.right} />
        </div>
      </div>
      <div className={styles.button}>
        <p className={styles.label2}>保存</p>
      </div>
      <div className={styles.homeIndicator2}>
        <div className={styles.homeIndicator} />
      </div>
    </div>
  );
}

export default Component;
