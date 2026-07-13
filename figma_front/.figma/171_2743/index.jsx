import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.shopCard}>
      <div className={styles.card2}>
        <img src="../image/mk54sq3y-3ht2d6d.png" className={styles.image1} />
        <p className={styles.text}>毛绒针织款可水洗猫爬架</p>
        <div className={styles.bottom}>
          <div className={styles.price}>
            <p className={styles.a2900}>￥29.00</p>
            <p className={styles.a3400}>￥34.00</p>
          </div>
          <div className={styles.ellipse}>
            <img src="../image/mk54sq3x-73wyscx.svg" className={styles.plus} />
          </div>
        </div>
        <div className={styles.saleInfo}>
          <p className={styles.text2}>优惠 10%</p>
        </div>
      </div>
    </div>
  );
}

export default Component;
