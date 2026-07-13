import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.frame2}>
      <div className={styles.header}>
        <div className={styles.leftIcon}>
          <img src="../image/mk5a6nfx-1ykn2z6.svg" className={styles.back} />
        </div>
        <p className={styles.myPets}>你的购物车</p>
        <div className={styles.ellipse}>
          <img src="../image/mk5a6nfx-qz4i3aq.svg" className={styles.trash} />
        </div>
        <div className={styles.statusBarIPhone}>
          <div className={styles.time2}>
            <p className={styles.time}>9:41</p>
          </div>
          <div className={styles.levels}>
            <img
              src="../image/mk5a6nfx-vp0laqa.svg"
              className={styles.cellularConnection}
            />
            <img src="../image/mk5a6nfx-47irz7b.svg" className={styles.wifi} />
            <img src="../image/mk5a6nfx-vti67lx.svg" className={styles.frame} />
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.products}>
          <div className={styles.cartList}>
            <div className={styles.imageProductInfoAmou}>
              <img src="../image/mk5a6nfz-7ncks0o.png" className={styles.image1} />
              <div className={styles.productInfoAmount}>
                <div className={styles.productPrice}>
                  <p className={styles.text}>
                    毛绒针织款可水洗猫爬架
                    <br />
                  </p>
                  <div className={styles.price}>
                    <p className={styles.a2900}>￥29.00</p>
                    <p className={styles.a3400}>￥34.00</p>
                  </div>
                </div>
                <div className={styles.amount}>
                  <div className={styles.ellipse2}>
                    <img
                      src="../image/mk5a6nfx-44gma88.svg"
                      className={styles.plus}
                    />
                  </div>
                  <p className={styles.a1}>1</p>
                  <div className={styles.ellipse3}>
                    <img
                      src="../image/mk5a6nfx-pl67383.svg"
                      className={styles.plus}
                    />
                  </div>
                </div>
              </div>
            </div>
            <img src="../image/mk5a6nfx-bcmo96u.svg" className={styles.divider} />
          </div>
          <div className={styles.cartList2}>
            <div className={styles.imageProductInfoAmou2}>
              <img src="../image/mk5a6nfz-0dreq6u.png" className={styles.image1} />
              <div className={styles.productInfoAmount2}>
                <div className={styles.productPrice2}>
                  <p className={styles.text}>
                    龙猫大师 宠物罐头
                    <br />
                  </p>
                  <p className={styles.a2900}>￥9.90</p>
                </div>
                <div className={styles.amount}>
                  <div className={styles.ellipse2}>
                    <img
                      src="../image/mk5a6nfx-44gma88.svg"
                      className={styles.plus}
                    />
                  </div>
                  <p className={styles.a1}>1</p>
                  <div className={styles.ellipse3}>
                    <img
                      src="../image/mk5a6nfx-pl67383.svg"
                      className={styles.plus}
                    />
                  </div>
                </div>
              </div>
            </div>
            <img src="../image/mk5a6nfx-bcmo96u.svg" className={styles.divider} />
          </div>
          <div className={styles.cartList3}>
            <div className={styles.imageProductInfoAmou}>
              <img src="../image/mk5a6nfz-ezhlamw.png" className={styles.image1} />
              <div className={styles.productInfoAmount}>
                <div className={styles.productPrice}>
                  <p className={styles.text}>猫猫衣服保暖耐磨毛孩子都喜欢</p>
                  <div className={styles.price}>
                    <p className={styles.a2900}>￥54.00</p>
                    <p className={styles.a3400}>￥60.00</p>
                  </div>
                </div>
                <div className={styles.amount}>
                  <div className={styles.ellipse2}>
                    <img
                      src="../image/mk5a6nfx-44gma88.svg"
                      className={styles.plus}
                    />
                  </div>
                  <p className={styles.a1}>1</p>
                  <div className={styles.ellipse3}>
                    <img
                      src="../image/mk5a6nfx-yctoact.svg"
                      className={styles.plus}
                    />
                  </div>
                </div>
              </div>
            </div>
            <img src="../image/mk5a6nfx-bcmo96u.svg" className={styles.divider} />
          </div>
        </div>
        <div className={styles.subTotal2}>
          <div className={styles.seperator} />
          <div className={styles.subTotal}>
            <p className={styles.text2}>小计</p>
            <p className={styles.a2900}>￥92.90</p>
          </div>
        </div>
        <div className={styles.buttons}>
          <div className={styles.ellipse4}>
            <img src="../image/mk5a6nfx-1m6ja8f.svg" className={styles.trash} />
          </div>
          <div className={styles.button}>
            <p className={styles.label}>结算</p>
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
