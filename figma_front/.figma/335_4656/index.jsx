import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.frame3}>
      <div className={styles.image1}>
        <div className={styles.ellipse8} />
        <div className={styles.ellipse82} />
        <img src="../image/mk4zzhw4-bwu8qmt.png" className={styles.frame} />
        <div className={styles.statusBarIPhone}>
          <div className={styles.time2}>
            <p className={styles.time}>9:41</p>
          </div>
          <div className={styles.levels}>
            <img
              src="../image/mk4zzhw2-jm9dzyx.svg"
              className={styles.cellularConnection}
            />
            <img src="../image/mk4zzhw2-38wpmza.svg" className={styles.wifi} />
            <img src="../image/mk4zzhw2-oiu8v6m.svg" className={styles.frame2} />
          </div>
        </div>
      </div>
      <div className={styles.text3}>
        <p className={styles.text}>照顾你的宠物</p>
        <p className={styles.text2}>
          宠物护理可以通过一些简单的步骤来帮助你每天照顾你心爱的宠物
        </p>
      </div>
      <div className={styles.indicator}>
        <div className={styles.rectangle1} />
        <div className={styles.rectangle2} />
        <div className={styles.rectangle2} />
      </div>
      <div className={styles.button2}>
        <div className={styles.button}>
          <p className={styles.text4}>下一步</p>
        </div>
        <p className={styles.text5}>跳过</p>
      </div>
      <div className={styles.homeIndicator2}>
        <div className={styles.homeIndicator} />
      </div>
    </div>
  );
}

export default Component;
