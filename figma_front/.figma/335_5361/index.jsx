import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.frame3}>
      <div className={styles.autoWrapper}>
        <div className={styles.image2}>
          <div className={styles.ellipse8} />
          <div className={styles.ellipse82} />
          <img src="../image/mk50nid3-ql1459p.png" className={styles.frame} />
        </div>
        <div className={styles.text3}>
          <p className={styles.text}>轻松购物</p>
          <p className={styles.text2}>
            现在通过我们这款APP，你可以在任何地方买到所有宠物用品，享受无忧购物体验
          </p>
        </div>
        <div className={styles.statusBarIPhone}>
          <div className={styles.time2}>
            <p className={styles.time}>9:41</p>
          </div>
          <div className={styles.levels}>
            <img
              src="../image/mk50nid1-oiyktuu.svg"
              className={styles.cellularConnection}
            />
            <img src="../image/mk50nid1-41z4uj6.svg" className={styles.wifi} />
            <img src="../image/mk50nid1-e34xez5.svg" className={styles.frame2} />
          </div>
        </div>
      </div>
      <div className={styles.indicator}>
        <div className={styles.rectangle2} />
        <div className={styles.rectangle1} />
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
