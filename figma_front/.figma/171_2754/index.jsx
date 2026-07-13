import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.vets}>
      <div className={styles.title}>
        <p className={styles.text}>提醒事项</p>
        <p className={styles.text2}>查看全部</p>
      </div>
      <div className={styles.cards2}>
        <div className={styles.cards}>
          <div className={styles.iconBox}>
            <img src="../image/mk5438z4-nmq5vds.svg" className={styles.plus} />
          </div>
          <div className={styles.reminder}>
            <div className={styles.top}>
              <div className={styles.color}>
                <div className={styles.autoWrapper}>
                  <div className={styles.rectangle} />
                </div>
              </div>
              <div className={styles.text5}>
                <p className={styles.text3}>欣宠克可咀嚼片，12毫克</p>
                <p className={styles.text4}>每天1片</p>
              </div>
            </div>
            <div className={styles.time}>
              <div className={styles.frame19}>
                <img src="../image/mk5438z4-i173u5g.svg" className={styles.clock} />
                <p className={styles.a02200250}>02:20 - 02:50</p>
              </div>
              <img
                src="../image/mk5438z4-fa932xs.svg"
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
              <div className={styles.text5}>
                <p className={styles.text3}>顺毛可咀嚼片，10毫克</p>
                <p className={styles.text4}>每天1片</p>
              </div>
            </div>
            <div className={styles.time}>
              <div className={styles.frame19}>
                <img src="../image/mk5438z4-bfnrvov.svg" className={styles.clock} />
                <p className={styles.a02200250}>02:20 - 02:50</p>
              </div>
              <img
                src="../image/mk5438z4-fa932xs.svg"
                className={styles.navBarIcon}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;
