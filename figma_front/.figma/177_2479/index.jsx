import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.frame2}>
      <div className={styles.header}>
        <div className={styles.leftIcon}>
          <img src="../image/mk59un7o-16t2myd.svg" className={styles.back} />
        </div>
        <p className={styles.myPets}>详细资料</p>
        <div className={styles.ellipse}>
          <img src="../image/mk59un7o-io57qhz.svg" className={styles.navBarIcon} />
        </div>
        <div className={styles.statusBarIPhone}>
          <div className={styles.time2}>
            <p className={styles.time}>9:41</p>
          </div>
          <div className={styles.levels}>
            <img
              src="../image/mk59un7o-615vbxk.svg"
              className={styles.cellularConnection}
            />
            <img src="../image/mk59un7o-czdzmj3.svg" className={styles.wifi} />
            <img src="../image/mk59un7o-vot9ie1.svg" className={styles.frame} />
          </div>
        </div>
      </div>
      <div className={styles.product}>
        <div className={styles.autoWrapper}>
          <img src="../image/mk59un7s-9f4tg8u.png" className={styles.image1} />
          <div className={styles.indicators}>
            <div className={styles.ellipse9} />
            <div className={styles.ellipse10} />
            <div className={styles.ellipse10} />
          </div>
        </div>
        <div className={styles.amount}>
          <div className={styles.ellipse2}>
            <img
              src="../image/mk59un7o-65zavl6.svg"
              className={styles.navBarIcon}
            />
          </div>
          <p className={styles.a1}>1</p>
          <div className={styles.ellipse3}>
            <img
              src="../image/mk59un7o-i0dfnlw.svg"
              className={styles.navBarIcon}
            />
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.autoWrapper2}>
          <p className={styles.text}>
            毛绒针织款
            <br />
            可水洗猫爬架
          </p>
          <div className={styles.ellipse4}>
            <img src="../image/mk59un7o-sttd6tc.svg" className={styles.like} />
          </div>
        </div>
        <p className={styles.text2}>选择店铺</p>
        <div className={styles.pharmacyOptions}>
          <div className={styles.productNamePrice}>
            <p className={styles.text3}>宠物世界</p>
            <p className={styles.text3}>$14.36</p>
          </div>
          <div className={styles.arrivesTimeDeliveryI}>
            <p className={styles.text7}>
              <span className={styles.text4}>到达：</span>
              <span className={styles.text5}>&nbsp;</span>
              <span className={styles.text6}>15 min</span>
            </p>
            <div className={styles.deliveryInfo}>
              <img
                src="../image/mk59un7o-80lhjm8.svg"
                className={styles.delivery}
              />
              <p className={styles.text8}>免费配送</p>
            </div>
          </div>
        </div>
        <div className={styles.pharmacyOptions2}>
          <div className={styles.productNamePrice}>
            <p className={styles.text3}>爱宠之家</p>
            <p className={styles.text3}>$14.36</p>
          </div>
          <div className={styles.arrivesTimeDeliveryI2}>
            <p className={styles.text9}>
              <span className={styles.text4}>到达：</span>
              <span className={styles.text6}>15 min</span>
            </p>
            <div className={styles.deliveryInfo2}>
              <img
                src="../image/mk59un7o-6cuvwg8.svg"
                className={styles.delivery}
              />
              <p className={styles.text10}>配送费 ￥5</p>
            </div>
          </div>
        </div>
        <div className={styles.button2}>
          <div className={styles.details}>
            <p className={styles.text11}>详细资料</p>
            <p className={styles.text12}>
              精选耐磨剑麻柱，健康磨爪乐趣无穷。搭配柔软毛绒平台与趣味悬挂玩具，完美满足攀爬、休憩与玩耍天性。整体采用环保加厚板材，安全无异味，既是猫咪的健康游乐场，也能和谐融入您的家居空间。
            </p>
          </div>
          <div className={styles.rectangle}>
            <div className={styles.button}>
              <p className={styles.label}>加入购物车</p>
            </div>
            <div className={styles.homeIndicator2}>
              <div className={styles.homeIndicator} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;
