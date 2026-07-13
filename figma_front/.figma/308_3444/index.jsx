import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.frame2}>
      <div className={styles.autoWrapper}>
        <div className={styles.header}>
          <div className={styles.leftIcon}>
            <img src="../image/mk5bwd99-8d9fjdw.svg" className={styles.back} />
          </div>
          <p className={styles.myPets}>付款方式</p>
        </div>
        <div className={styles.statusBarIPhone}>
          <div className={styles.time2}>
            <p className={styles.time}>9:41</p>
          </div>
          <div className={styles.levels}>
            <img
              src="../image/mk5bwd99-tu839my.svg"
              className={styles.cellularConnection}
            />
            <img src="../image/mk5bwd99-nfjzlzs.svg" className={styles.wifi} />
            <img src="../image/mk5bwd99-0gtq53w.svg" className={styles.frame} />
          </div>
        </div>
      </div>
      <div className={styles.autoWrapper2}>
        <div className={styles.rectangle2}>
          <div className={styles.methods}>
            <div className={styles.methodList}>
              <div className={styles.cardInfo}>
                <div className={styles.rectangle}>
                  <img
                    src="../image/mk5bwd99-r9qtido.svg"
                    className={styles.icons}
                  />
                </div>
                <div className={styles.cardName}>
                  <p className={styles.linaMastercard}>万事达卡</p>
                  <div className={styles.frame88}>
                    <div className={styles.password}>
                      <div className={styles.ellipse15} />
                      <div className={styles.ellipse15} />
                      <div className={styles.ellipse15} />
                      <div className={styles.ellipse15} />
                    </div>
                    <p className={styles.headline}>1994</p>
                  </div>
                </div>
              </div>
              <div className={styles.divider} />
            </div>
            <div className={styles.methodList2}>
              <div className={styles.cardInfo2}>
                <div className={styles.rectangle}>
                  <img
                    src="../image/mk5bwd99-k21obh5.svg"
                    className={styles.icons}
                  />
                </div>
                <div className={styles.cardName2}>
                  <p className={styles.linaMastercard}>Visa卡</p>
                  <div className={styles.frame882}>
                    <div className={styles.password}>
                      <div className={styles.ellipse15} />
                      <div className={styles.ellipse15} />
                      <div className={styles.ellipse15} />
                      <div className={styles.ellipse15} />
                    </div>
                    <p className={styles.headline}>1981</p>
                  </div>
                </div>
              </div>
              <div className={styles.divider} />
            </div>
            <div className={styles.methodList3}>
              <div className={styles.cardInfo3}>
                <div className={styles.rectangle}>
                  <img
                    src="../image/mk5bwd99-1c5riha.svg"
                    className={styles.icons}
                  />
                </div>
                <div className={styles.cardName3}>
                  <p className={styles.linaMastercard}>PayPal账户</p>
                  <p className={styles.headline3}>
                    <span className={styles.headline2}>wohaoshuai@mail.com</span>
                  </p>
                </div>
              </div>
              <div className={styles.divider} />
            </div>
          </div>
          <div className={styles.button}>
            <p className={styles.label}>+ 添加新卡</p>
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
