import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.frame2}>
      <div className={styles.autoWrapper}>
        <div className={styles.header}>
          <p className={styles.text}>你好，杰杰</p>
          <div className={styles.ellipse}>
            <img src="../image/mk544052-w3py4n8.svg" className={styles.search} />
          </div>
        </div>
        <div className={styles.statusBarIPhone}>
          <div className={styles.time2}>
            <p className={styles.time}>9:41</p>
          </div>
          <div className={styles.levels}>
            <img
              src="../image/mk544052-3cjtrar.svg"
              className={styles.cellularConnection}
            />
            <img src="../image/mk544052-b9hsv4c.svg" className={styles.wifi} />
            <img src="../image/mk544052-7q0uss5.svg" className={styles.frame} />
          </div>
        </div>
      </div>
      <div className={styles.background}>
        <p className={styles.text2}>智能宠物护理</p>
        <p className={styles.text3}>
          为您的宠物找到完美
          <br />
          的兽医
        </p>
        <div className={styles.button}>
          <p className={styles.label}>现在预约</p>
        </div>
      </div>
      <p className={styles.text4}>选择您的宠物</p>
      <div className={styles.myPets}>
        <div className={styles.ellipse2}>
          <img src="../image/mk544052-iih6yew.svg" className={styles.search} />
        </div>
        <div className={styles.ellipse3}>
          <img src="../image/mk544052-u0905a1.png" className={styles.petImage} />
        </div>
        <div className={styles.petImage2}>
          <img src="../image/mk544052-76rv5bd.png" className={styles.petImage} />
        </div>
        <div className={styles.petImage2}>
          <img src="../image/mk544052-kz0mnac.png" className={styles.petImage} />
        </div>
      </div>
      <div className={styles.autoWrapper4}>
        <div className={styles.cardRows}>
          <div className={styles.petShop}>
            <div className={styles.title}>
              <p className={styles.text5}>宠物超市</p>
              <p className={styles.text6}>查看全部</p>
            </div>
            <div className={styles.cards2}>
              <div className={styles.cards}>
                <div className={styles.shopCard}>
                  <div className={styles.card2}>
                    <img
                      src="../image/mk544056-56dgxzu.png"
                      className={styles.image1}
                    />
                    <p className={styles.text7}>毛绒针织款可水洗猫爬架</p>
                    <div className={styles.bottom}>
                      <div className={styles.price}>
                        <p className={styles.a2900}>￥29.00</p>
                        <p className={styles.a3400}>￥34.00</p>
                      </div>
                      <div className={styles.ellipse4}>
                        <img
                          src="../image/mk544052-60d2vv3.svg"
                          className={styles.plus}
                        />
                      </div>
                    </div>
                    <div className={styles.saleInfo}>
                      <p className={styles.text8}>优惠 10%</p>
                    </div>
                  </div>
                </div>
                <div className={styles.shopCard2}>
                  <div className={styles.card1}>
                    <img
                      src="../image/mk544057-fhs0yec.png"
                      className={styles.image1}
                    />
                    <p className={styles.text7}>
                      龙猫大师
                      <br />
                      宠物罐头
                    </p>
                    <div className={styles.bottom2}>
                      <p className={styles.a2900}>￥29.00</p>
                      <div className={styles.ellipse4}>
                        <img
                          src="../image/mk544052-vnmwa2a.svg"
                          className={styles.plus}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.shopCard}>
                  <div className={styles.card2}>
                    <img
                      src="../image/mk544057-sm0muo2.png"
                      className={styles.image1}
                    />
                    <p className={styles.text7}>宠物零食多口味，毛孩子都爱吃</p>
                    <div className={styles.bottom}>
                      <div className={styles.price}>
                        <p className={styles.a2900}>￥29.00</p>
                        <p className={styles.a3400}>￥34.00</p>
                      </div>
                      <div className={styles.ellipse4}>
                        <img
                          src="../image/mk544052-vnmwa2a.svg"
                          className={styles.plus}
                        />
                      </div>
                    </div>
                    <div className={styles.saleInfo}>
                      <p className={styles.text8}>优惠 10%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.vets}>
            <div className={styles.title2}>
              <p className={styles.text5}>兽医</p>
              <p className={styles.text6}>查看全部</p>
            </div>
            <div className={styles.cards4}>
              <div className={styles.cards3}>
                <div className={styles.vet}>
                  <img
                    src="../image/mk544057-74cz884.png"
                    className={styles.image}
                  />
                  <div className={styles.nameStars}>
                    <p className={styles.text9}>陈佑康</p>
                    <img
                      src="../image/mk544052-420amlw.svg"
                      className={styles.stars}
                    />
                  </div>
                </div>
                <div className={styles.vet}>
                  <img
                    src="../image/mk544057-u5w1eqa.png"
                    className={styles.image}
                  />
                  <div className={styles.nameStars}>
                    <p className={styles.text9}>李鑫宇</p>
                    <img
                      src="../image/mk544052-420amlw.svg"
                      className={styles.stars}
                    />
                  </div>
                </div>
                <div className={styles.vet}>
                  <img
                    src="../image/mk544057-ecm8a3a.png"
                    className={styles.image}
                  />
                  <div className={styles.nameStars}>
                    <p className={styles.text9}>钱佳仪</p>
                    <img
                      src="../image/mk544052-420amlw.svg"
                      className={styles.stars}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.vets2}>
            <div className={styles.title3}>
              <p className={styles.text5}>提醒事项</p>
              <p className={styles.text6}>查看全部</p>
            </div>
            <div className={styles.cards6}>
              <div className={styles.cards5}>
                <div className={styles.iconBox}>
                  <img
                    src="../image/mk544052-lv1wuet.svg"
                    className={styles.plus2}
                  />
                </div>
                <div className={styles.reminder}>
                  <div className={styles.top}>
                    <div className={styles.color}>
                      <div className={styles.autoWrapper2}>
                        <div className={styles.rectangle} />
                      </div>
                    </div>
                    <div className={styles.text12}>
                      <p className={styles.text10}>欣宠克可咀嚼片，12毫克</p>
                      <p className={styles.text11}>每天1片</p>
                    </div>
                  </div>
                  <div className={styles.time3}>
                    <div className={styles.frame19}>
                      <img
                        src="../image/mk544052-mcu7fpp.svg"
                        className={styles.clock}
                      />
                      <p className={styles.a02200250}>02:20 - 02:50</p>
                    </div>
                    <img
                      src="../image/mk544052-41tdb70.svg"
                      className={styles.navBarIcon}
                    />
                  </div>
                </div>
                <div className={styles.reminder}>
                  <div className={styles.top}>
                    <div className={styles.color}>
                      <div className={styles.autoWrapper2}>
                        <div className={styles.rectangle} />
                      </div>
                    </div>
                    <div className={styles.text12}>
                      <p className={styles.text10}>顺毛可咀嚼片，10毫克</p>
                      <p className={styles.text11}>每天1片</p>
                    </div>
                  </div>
                  <div className={styles.time3}>
                    <div className={styles.frame19}>
                      <img
                        src="../image/mk544052-p4ysp94.svg"
                        className={styles.clock}
                      />
                      <p className={styles.a02200250}>02:20 - 02:50</p>
                    </div>
                    <img
                      src="../image/mk544052-41tdb70.svg"
                      className={styles.navBarIcon}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.background2}>
          <div className={styles.vector} />
          <div className={styles.autoWrapper3}>
            <img src="../image/mk544052-wy2nii8.svg" className={styles.search} />
            <img src="../image/mk544052-r67q7v5.svg" className={styles.search} />
            <img src="../image/mk544052-wl3had7.svg" className={styles.search} />
            <img src="../image/mk544052-41tdb70.svg" className={styles.search} />
            <img src="../image/mk544052-56xln0m.svg" className={styles.search} />
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
