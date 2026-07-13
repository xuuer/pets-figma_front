import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.cardRows}>
      <div className={styles.petShop}>
        <div className={styles.title}>
          <p className={styles.text}>宠物超市</p>
          <p className={styles.text2}>查看全部</p>
        </div>
        <div className={styles.cards2}>
          <div className={styles.cards}>
            <div className={styles.shopCard}>
              <div className={styles.card2}>
                <img
                  src="../image/mk537rgx-8fltgnj.png"
                  className={styles.image1}
                />
                <p className={styles.text3}>毛绒针织款可水洗猫爬架</p>
                <div className={styles.bottom}>
                  <div className={styles.price}>
                    <p className={styles.a2900}>￥29.00</p>
                    <p className={styles.a3400}>￥34.00</p>
                  </div>
                  <div className={styles.ellipse}>
                    <img
                      src="../image/mk537rgu-upnhcpt.svg"
                      className={styles.plus}
                    />
                  </div>
                </div>
                <div className={styles.saleInfo}>
                  <p className={styles.text4}>优惠 10%</p>
                </div>
              </div>
            </div>
            <div className={styles.shopCard2}>
              <div className={styles.card1}>
                <img
                  src="../image/mk537rgx-sjf1dcw.png"
                  className={styles.image1}
                />
                <p className={styles.text3}>
                  龙猫大师
                  <br />
                  宠物罐头
                </p>
                <div className={styles.bottom2}>
                  <p className={styles.a2900}>￥29.00</p>
                  <div className={styles.ellipse}>
                    <img
                      src="../image/mk537rgu-a01y0a7.svg"
                      className={styles.plus}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.shopCard}>
              <div className={styles.card2}>
                <img
                  src="../image/mk537rgx-1bij7yq.png"
                  className={styles.image1}
                />
                <p className={styles.text3}>宠物零食多口味，毛孩子都爱吃</p>
                <div className={styles.bottom}>
                  <div className={styles.price}>
                    <p className={styles.a2900}>￥29.00</p>
                    <p className={styles.a3400}>￥34.00</p>
                  </div>
                  <div className={styles.ellipse}>
                    <img
                      src="../image/mk537rgu-a01y0a7.svg"
                      className={styles.plus}
                    />
                  </div>
                </div>
                <div className={styles.saleInfo}>
                  <p className={styles.text4}>优惠 10%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.vets}>
        <div className={styles.title2}>
          <p className={styles.text}>兽医</p>
          <p className={styles.text2}>查看全部</p>
        </div>
        <div className={styles.cards4}>
          <div className={styles.cards3}>
            <div className={styles.vet}>
              <img src="../image/mk537rgx-jpc4tri.png" className={styles.image} />
              <div className={styles.nameStars}>
                <p className={styles.text5}>陈佑康</p>
                <img src="../image/mk537rgu-t4ih2ty.svg" className={styles.stars} />
              </div>
            </div>
            <div className={styles.vet}>
              <img src="../image/mk537rgx-b2bmq4g.png" className={styles.image} />
              <div className={styles.nameStars}>
                <p className={styles.text5}>李鑫宇</p>
                <img src="../image/mk537rgu-t4ih2ty.svg" className={styles.stars} />
              </div>
            </div>
            <div className={styles.vet}>
              <img src="../image/mk537rgx-it3tfk7.png" className={styles.image} />
              <div className={styles.nameStars}>
                <p className={styles.text5}>钱佳仪</p>
                <img src="../image/mk537rgu-t4ih2ty.svg" className={styles.stars} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.vets2}>
        <div className={styles.title3}>
          <p className={styles.text}>提醒事项</p>
          <p className={styles.text2}>查看全部</p>
        </div>
        <div className={styles.cards6}>
          <div className={styles.cards5}>
            <div className={styles.iconBox}>
              <img src="../image/mk537rgu-230s2w7.svg" className={styles.plus2} />
            </div>
            <div className={styles.reminder}>
              <div className={styles.top}>
                <div className={styles.color}>
                  <div className={styles.autoWrapper}>
                    <div className={styles.rectangle} />
                  </div>
                </div>
                <div className={styles.text8}>
                  <p className={styles.text6}>欣宠克可咀嚼片，12毫克</p>
                  <p className={styles.text7}>每天1片</p>
                </div>
              </div>
              <div className={styles.time}>
                <div className={styles.frame19}>
                  <img
                    src="../image/mk537rgu-732dvpr.svg"
                    className={styles.clock}
                  />
                  <p className={styles.a02200250}>02:20 - 02:50</p>
                </div>
                <img
                  src="../image/mk537rgu-c61t1e8.svg"
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
                <div className={styles.text8}>
                  <p className={styles.text6}>顺毛可咀嚼片，10毫克</p>
                  <p className={styles.text7}>每天1片</p>
                </div>
              </div>
              <div className={styles.time}>
                <div className={styles.frame19}>
                  <img
                    src="../image/mk537rgu-xsdfq2n.svg"
                    className={styles.clock}
                  />
                  <p className={styles.a02200250}>02:20 - 02:50</p>
                </div>
                <img
                  src="../image/mk537rgu-c61t1e8.svg"
                  className={styles.navBarIcon}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;
