import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.frame2}>
      <div className={styles.header}>
        <div className={styles.leftIcon}>
          <img src="../image/mk5cjkt7-7i3m4g5.svg" className={styles.back} />
        </div>
        <p className={styles.myPets}>订单</p>
        <div className={styles.statusBarIPhone}>
          <div className={styles.time2}>
            <p className={styles.time}>9:41</p>
          </div>
          <div className={styles.levels}>
            <img
              src="../image/mk5cjkt7-csba2gi.svg"
              className={styles.cellularConnection}
            />
            <img src="../image/mk5cjkt7-bdo1cyc.svg" className={styles.wifi} />
            <img src="../image/mk5cjkt7-axw5gns.svg" className={styles.frame} />
          </div>
        </div>
      </div>
      <div className={styles.orders}>
        <div className={styles.today}>
          <div className={styles.titleDivider}>
            <p className={styles.text}>今天</p>
            <div className={styles.vector3} />
          </div>
          <div className={styles.previousOrder}>
            <div className={styles.order}>
              <div className={styles.frame95}>
                <div className={styles.deliveryInfo}>
                  <p className={styles.text2}>空运</p>
                  <img
                    src="../image/mk5cjkt7-bagfr8g.svg"
                    className={styles.right}
                  />
                </div>
                <p className={styles.text3}>2025年8月21日·下午04点48分</p>
                <p className={styles.text4}>浦东新区居里路289号</p>
                <div className={styles.rectangle} />
              </div>
              <div className={styles.coffees}>
                <div className={styles.image}>
                  <img
                    src="../image/mk5cjkt9-tj2ag5y.png"
                    className={styles.caffeAmericano1}
                  />
                </div>
                <div className={styles.image2}>
                  <img
                    src="../image/mk5cjkt9-wu1e691.png"
                    className={styles.caffeAmericano12}
                  />
                </div>
                <div className={styles.image3}>
                  <img
                    src="../image/mk5cjkt9-5gq7xaw.png"
                    className={styles.caffeAmericano1}
                  />
                  <div className={styles.ellipse}>
                    <p className={styles.a1}>2</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.price}>
              <p className={styles.a6495}>￥64.95</p>
              <div className={styles.button}>
                <p className={styles.label}>再买一单</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.thisMonth}>
          <div className={styles.titleDivider}>
            <p className={styles.text}>这个月</p>
            <div className={styles.vector3} />
          </div>
          <div className={styles.previousOrder2}>
            <div className={styles.order2}>
              <div className={styles.frame952}>
                <div className={styles.deliveryInfo}>
                  <p className={styles.text2}>完成</p>
                  <img
                    src="../image/mk5cjkt7-bagfr8g.svg"
                    className={styles.right}
                  />
                </div>
                <p className={styles.text3}>2025年8月14日·下午12点36分5610</p>
                <p className={styles.text4}>浦东新区居里路289号</p>
                <div className={styles.rectangle2} />
              </div>
              <div className={styles.coffees2}>
                <div className={styles.image}>
                  <img
                    src="../image/mk5cjkt9-vs1hrwk.png"
                    className={styles.caffeAmericano1}
                  />
                </div>
                <div className={styles.image2}>
                  <img
                    src="../image/mk5cjkt9-snxlpcw.png"
                    className={styles.caffeAmericano12}
                  />
                </div>
              </div>
            </div>
            <div className={styles.price}>
              <p className={styles.a6495}>￥35.45</p>
              <div className={styles.button}>
                <p className={styles.label}>再买一单</p>
              </div>
            </div>
          </div>
          <div className={styles.previousOrder3}>
            <div className={styles.order3}>
              <div className={styles.frame953}>
                <div className={styles.deliveryInfo}>
                  <p className={styles.text2}>完成</p>
                  <img
                    src="../image/mk5cjkt7-bagfr8g.svg"
                    className={styles.right}
                  />
                </div>
                <p className={styles.text3}>2025年8月14日·下午12点36分5610</p>
                <p className={styles.text4}>浦东新区居里路289号</p>
                <div className={styles.rectangle3} />
              </div>
              <div className={styles.coffees2}>
                <div className={styles.image}>
                  <img
                    src="../image/mk5cjkt9-7o4473f.png"
                    className={styles.caffeAmericano1}
                  />
                </div>
                <div className={styles.image2}>
                  <img
                    src="../image/mk5cjkt9-8afj6xh.png"
                    className={styles.caffeAmericano12}
                  />
                </div>
              </div>
            </div>
            <div className={styles.price}>
              <p className={styles.a6495}>￥27.89</p>
              <div className={styles.button}>
                <p className={styles.label}>再买一单</p>
              </div>
            </div>
          </div>
          <div className={styles.homeIndicator2}>
            <div className={styles.homeIndicator} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;
