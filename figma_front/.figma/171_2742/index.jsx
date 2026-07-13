import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.cards}>
      <div className={styles.shopCard}>
        <div className={styles.card2}>
          <img src="../image/mk541v4v-xhgnevm.png" className={styles.image1} />
          <p className={styles.text}>毛绒针织款可水洗猫爬架</p>
          <div className={styles.bottom}>
            <div className={styles.price}>
              <p className={styles.a2900}>￥29.00</p>
              <p className={styles.a3400}>￥34.00</p>
            </div>
            <div className={styles.ellipse}>
              <img src="../image/mk541v4u-ehz5mom.svg" className={styles.plus} />
            </div>
          </div>
          <div className={styles.saleInfo}>
            <p className={styles.text2}>优惠 10%</p>
          </div>
        </div>
      </div>
      <div className={styles.shopCard2}>
        <div className={styles.card1}>
          <img src="../image/mk541v4v-vn54wem.png" className={styles.image1} />
          <p className={styles.text}>
            龙猫大师
            <br />
            宠物罐头
          </p>
          <div className={styles.bottom2}>
            <p className={styles.a2900}>￥29.00</p>
            <div className={styles.ellipse}>
              <img src="../image/mk541v4u-nha00fa.svg" className={styles.plus} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.shopCard}>
        <div className={styles.card2}>
          <img src="../image/mk541v4v-w0ia47d.png" className={styles.image1} />
          <p className={styles.text}>宠物零食多口味，毛孩子都爱吃</p>
          <div className={styles.bottom}>
            <div className={styles.price}>
              <p className={styles.a2900}>￥29.00</p>
              <p className={styles.a3400}>￥34.00</p>
            </div>
            <div className={styles.ellipse}>
              <img src="../image/mk541v4u-nha00fa.svg" className={styles.plus} />
            </div>
          </div>
          <div className={styles.saleInfo}>
            <p className={styles.text2}>优惠 10%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;
