import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.frame2}>
      <div className={styles.autoWrapper}>
        <div className={styles.image3}>
          <div className={styles.group10}>
            <div className={styles.ellipse8} />
          </div>
          <div className={styles.ellipse82} />
          <img src="../image/mk4u0zg0-4xhxuex.png" className={styles.frame98} />
        </div>
        <div className={styles.statusBarIPhone}>
          <div className={styles.time2}>
            <p className={styles.time}>9:41</p>
          </div>
          <div className={styles.levels}>
            <img
              src="../image/mk4u0zfz-0s6r2x9.svg"
              className={styles.cellularConnection}
            />
            <img src="../image/mk4u0zfz-drlrf22.svg" className={styles.wifi} />
            <img src="../image/mk4u0zfz-if79nlu.svg" className={styles.frame} />
          </div>
        </div>
      </div>
      <div className={styles.text3}>
        <p className={styles.text}>快速找到兽医</p>
        <p className={styles.text2}>
          如果你的宠物生病了，你可以随时根据兽医专家的名单来选择治疗方法
        </p>
      </div>
      <div className={styles.indicator}>
        <div className={styles.rectangle2} />
        <div className={styles.rectangle2} />
        <div className={styles.rectangle1} />
      </div>
      <div className={styles.button}>
        <p className={styles.label}>开始吧</p>
      </div>
      <div className={styles.homeIndicator2}>
        <div className={styles.homeIndicator} />
      </div>
    </div>
  );
}

export default Component;
