import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.frame2}>
      <div className={styles.header}>
        <p className={styles.myPets}>简介</p>
        <div className={styles.ellipse}>
          <img src="../image/mk5bp6g3-56vx0is.svg" className={styles.edit} />
        </div>
        <div className={styles.statusBarIPhone}>
          <div className={styles.time2}>
            <p className={styles.time}>9:41</p>
          </div>
          <div className={styles.levels}>
            <img
              src="../image/mk5bp6g3-q4ncosw.svg"
              className={styles.cellularConnection}
            />
            <img src="../image/mk5bp6g3-ule84te.svg" className={styles.wifi} />
            <img src="../image/mk5bp6g3-0prins8.svg" className={styles.frame} />
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.profileList}>
          <div className={styles.iconLabel}>
            <div className={styles.ellipse2}>
              <img src="../image/mk5bp6g3-pmah0qh.svg" className={styles.edit} />
            </div>
            <p className={styles.title}>大帅哥</p>
          </div>
          <div className={styles.divider} />
        </div>
        <div className={styles.mail}>
          <img src="../image/mk5bp6g3-a775dq2.svg" className={styles.email} />
          <p className={styles.title}>wohaoshuai@mail.com</p>
        </div>
        <div className={styles.phone}>
          <img src="../image/mk5bp6g3-co1fo55.svg" className={styles.email} />
          <p className={styles.title}>15629766120</p>
        </div>
      </div>
      <div className={styles.optionsLogOut}>
        <div className={styles.options}>
          <div className={styles.profileList2}>
            <div className={styles.iconLabel2}>
              <div className={styles.ellipse3}>
                <img
                  src="../image/mk5bp6g3-c6oql3g.svg"
                  className={styles.payment}
                />
              </div>
              <p className={styles.title}>付款方式</p>
            </div>
            <div className={styles.divider} />
          </div>
          <div className={styles.profileList3}>
            <div className={styles.iconLabel3}>
              <div className={styles.ellipse4}>
                <img src="../image/mk5bp6g3-razc6tb.svg" className={styles.edit} />
              </div>
              <p className={styles.title}>地址</p>
            </div>
            <div className={styles.divider} />
          </div>
          <div className={styles.profileList4}>
            <div className={styles.iconLabel4}>
              <div className={styles.ellipse5}>
                <img src="../image/mk5bp6g3-11a6kae.svg" className={styles.edit} />
              </div>
              <p className={styles.title}>订单</p>
            </div>
            <div className={styles.divider} />
          </div>
          <div className={styles.profileList5}>
            <div className={styles.iconLabel5}>
              <div className={styles.ellipse6}>
                <img src="../image/mk5bp6g3-qyng86q.svg" className={styles.edit} />
              </div>
              <p className={styles.title}>预约</p>
            </div>
            <div className={styles.divider} />
          </div>
        </div>
        <p className={styles.text}>退出</p>
      </div>
      <div className={styles.background}>
        <div className={styles.vector} />
        <div className={styles.autoWrapper}>
          <img src="../image/mk5bp6g3-razc6tb.svg" className={styles.edit} />
          <img src="../image/mk5bp6g3-11a6kae.svg" className={styles.edit} />
          <img src="../image/mk5bp6g3-in04djy.svg" className={styles.edit} />
          <img src="../image/mk5bp6g3-i9r5aox.svg" className={styles.edit} />
          <img src="../image/mk5bp6g3-ubnpokm.svg" className={styles.edit} />
        </div>
        <div className={styles.homeIndicator2}>
          <div className={styles.homeIndicator} />
        </div>
      </div>
    </div>
  );
}

export default Component;
