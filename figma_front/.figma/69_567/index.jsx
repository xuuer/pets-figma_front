import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.frame2}>
      <div className={styles.header}>
        <p className={styles.myPets}>我的宠物</p>
        <div className={styles.ellipse}>
          <img src="../image/mke06a3i-8c098dg.svg" className={styles.plus} />
        </div>
        <div className={styles.statusBarIPhone}>
          <div className={styles.time2}>
            <p className={styles.time}>9:41</p>
          </div>
          <div className={styles.levels}>
            <img
              src="../image/mke06a3j-5njzfen.svg"
              className={styles.cellularConnection}
            />
            <img src="../image/mke06a3j-nl96jk4.svg" className={styles.wifi} />
            <img src="../image/mke06a3j-qb83nu4.svg" className={styles.frame} />
          </div>
        </div>
      </div>
      <div className={styles.autoWrapper2}>
        <div className={styles.background}>
          <div className={styles.vector} />
          <div className={styles.autoWrapper}>
            <img src="../image/mke06a3i-8d390l6.svg" className={styles.plus} />
            <img src="../image/mke06a3i-2sjz5qz.svg" className={styles.plus} />
            <img src="../image/mke06a3i-u7r0p6c.svg" className={styles.plus} />
            <img src="../image/mke06a3i-a9wibux.svg" className={styles.plus} />
            <img src="../image/mke06a3i-5weawn6.svg" className={styles.plus} />
          </div>
          <div className={styles.homeIndicator2}>
            <div className={styles.homeIndicator} />
          </div>
        </div>
        <div className={styles.petCard}>
          <img src="../image/mke06a3n-6einlx1.png" className={styles.image} />
          <div className={styles.topBack}>
            <div className={styles.name}>
              <p className={styles.text}>布丁</p>
              <p className={styles.text2}>4岁</p>
            </div>
            <div className={styles.ellipse2}>
              <img src="../image/mke06a3i-2p28mmd.svg" className={styles.plus} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;
