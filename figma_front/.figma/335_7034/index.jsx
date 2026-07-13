import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.frame2}>
      <div className={styles.statusBarIPhone}>
        <div className={styles.time2}>
          <p className={styles.time}>9:41</p>
        </div>
        <div className={styles.levels}>
          <img
            src="../image/mk4u0ze9-lk898om.svg"
            className={styles.cellularConnection}
          />
          <img src="../image/mk4u0ze9-dyac2zy.svg" className={styles.wifi} />
          <img src="../image/mk4u0ze9-p6z9iti.svg" className={styles.frame} />
        </div>
      </div>
      <div className={styles.group10}>
        <img src="../image/mk4u0zea-9em21e5.png" className={styles.ellipse8} />
        <div className={styles.text3}>
          <p className={styles.text}>已成功注册!</p>
          <p className={styles.text2}>现在您可以享受我们的所有服务。</p>
        </div>
      </div>
      <div className={styles.button}>
        <p className={styles.label}>登录</p>
      </div>
      <div className={styles.homeIndicator2}>
        <div className={styles.homeIndicator} />
      </div>
    </div>
  );
}

export default Component;
