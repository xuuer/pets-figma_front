import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.frame2}>
      <div className={styles.autoWrapper}>
        <div className={styles.header}>
          <div className={styles.leftIcon}>
            <img src="../image/mk5c338z-13ptnjb.svg" className={styles.back} />
          </div>
          <p className={styles.myPets}>地址</p>
        </div>
        <div className={styles.statusBarIPhone}>
          <div className={styles.time2}>
            <p className={styles.time}>9:41</p>
          </div>
          <div className={styles.levels}>
            <img
              src="../image/mk5c338z-3dv1cx4.svg"
              className={styles.cellularConnection}
            />
            <img src="../image/mk5c338z-qa7fs32.svg" className={styles.wifi} />
            <img src="../image/mk5c338z-ntyjiey.svg" className={styles.frame} />
          </div>
        </div>
      </div>
      <div className={styles.autoWrapper2}>
        <div className={styles.rectangle}>
          <div className={styles.adresses}>
            <div className={styles.addressList}>
              <div className={styles.iconAddressDivider}>
                <div className={styles.iconAddress}>
                  <div className={styles.label}>
                    <img
                      src="../image/mk5c338y-37hyt3h.svg"
                      className={styles.home}
                    />
                    <p className={styles.home2}>家</p>
                  </div>
                  <p className={styles.text}>浦东新区居里路289号16栋200室</p>
                </div>
                <div className={styles.divider} />
              </div>
            </div>
            <div className={styles.addressList2}>
              <div className={styles.iconAddressDivider2}>
                <div className={styles.iconAddress2}>
                  <div className={styles.label2}>
                    <img
                      src="../image/mk5c338z-d1p9ueq.svg"
                      className={styles.home}
                    />
                    <p className={styles.home2}>公司</p>
                  </div>
                  <p className={styles.text}>浦东新区居里路289号16栋200室, 21701</p>
                </div>
                <div className={styles.divider} />
              </div>
            </div>
            <div className={styles.addressList3}>
              <div className={styles.iconAddressDivider3}>
                <div className={styles.iconAddress3}>
                  <div className={styles.label3}>
                    <img
                      src="../image/mk5c338z-7dzwknr.svg"
                      className={styles.location}
                    />
                    <p className={styles.home2}>其它</p>
                  </div>
                  <p className={styles.text}>浦东新区居里路289号16栋200室 42300</p>
                </div>
                <div className={styles.divider} />
              </div>
            </div>
          </div>
          <div className={styles.button}>
            <p className={styles.label4}>+ 添加地址</p>
          </div>
        </div>
        <div className={styles.homeIndicator2}>
          <div className={styles.homeIndicator} />
        </div>
      </div>
    </div>
  );
}

export default Component;
