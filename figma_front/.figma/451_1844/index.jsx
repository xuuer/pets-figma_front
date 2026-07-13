import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.cards2}>
      <div className={styles.cards}>
        <div className={styles.iconBox}>
          <img src="../image/mk54hsfe-wgn7wcf.svg" className={styles.plus} />
        </div>
        <div className={styles.reminder}>
          <div className={styles.top}>
            <div className={styles.color}>
              <div className={styles.autoWrapper}>
                <div className={styles.rectangle} />
              </div>
            </div>
            <div className={styles.text3}>
              <p className={styles.text}>欣宠克可咀嚼片，12毫克</p>
              <p className={styles.text2}>每天1片</p>
            </div>
          </div>
          <div className={styles.time}>
            <div className={styles.frame19}>
              <img src="../image/mk54hsfe-xlariau.svg" className={styles.clock} />
              <p className={styles.a02200250}>02:20 - 02:50</p>
            </div>
            <img
              src="../image/mk54hsfe-yodvbxe.svg"
              className={styles.navBarIcon}
            />
          </div>
        </div>
        <div className={styles.reminder}>
          <div className={styles.top}>
            <div className={styles.color}>
              <div className={styles.autoWrapper}>
                <div className={styles.rectangle} />
              </div>
            </div>
            <div className={styles.text3}>
              <p className={styles.text}>顺毛可咀嚼片，10毫克</p>
              <p className={styles.text2}>每天1片</p>
            </div>
          </div>
          <div className={styles.time}>
            <div className={styles.frame19}>
              <img src="../image/mk54hsfe-pmy1hg0.svg" className={styles.clock} />
              <p className={styles.a02200250}>02:20 - 02:50</p>
            </div>
            <img
              src="../image/mk54hsfe-yodvbxe.svg"
              className={styles.navBarIcon}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;
