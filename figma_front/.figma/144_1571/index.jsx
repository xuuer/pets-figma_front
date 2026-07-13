import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.frame2}>
      <div className={styles.header}>
        <div className={styles.leftIcon}>
          <img src="../image/mk5578sv-yptzlfd.svg" className={styles.back} />
        </div>
        <p className={styles.myPets}>搜索</p>
        <div className={styles.statusBarIPhone}>
          <div className={styles.time2}>
            <p className={styles.time}>9:41</p>
          </div>
          <div className={styles.levels}>
            <img
              src="../image/mk5578sv-2hbiaag.svg"
              className={styles.cellularConnection}
            />
            <img src="../image/mk5578sv-qq0kp5p.svg" className={styles.wifi} />
            <img src="../image/mk5578sv-ve7njrg.svg" className={styles.frame} />
          </div>
        </div>
      </div>
      <div className={styles.search2}>
        <p className={styles.typeProblems}>搜索</p>
        <img src="../image/mk5578sv-1gg16es.svg" className={styles.search} />
      </div>
      <div className={styles.discover}>
        <div className={styles.title}>
          <p className={styles.text}>发现</p>
          <div className={styles.vector2} />
        </div>
        <div className={styles.suggestions}>
          <div className={styles.frame26}>
            <p className={styles.text2}>一般宠物护理</p>
            <div className={styles.vector2} />
          </div>
          <div className={styles.frame26}>
            <p className={styles.text2}>动物中毒控制</p>
            <div className={styles.vector2} />
          </div>
          <div className={styles.frame26}>
            <p className={styles.text2}>宠物规划</p>
            <div className={styles.vector2} />
          </div>
          <div className={styles.frame26}>
            <p className={styles.text2}>保护你的宠物</p>
            <div className={styles.vector2} />
          </div>
        </div>
      </div>
      <div className={styles.articles}>
        <div className={styles.title2}>
          <p className={styles.text}>科普文章</p>
          <p className={styles.text3}>查看全部</p>
        </div>
        <div className={styles.cards}>
          <div className={styles.frame33}>
            <div className={styles.frame32}>
              <img
                src="../image/mk5578sx-5fm15tg.png"
                className={styles.rectangle18}
              />
              <p className={styles.text2}>猫咪护理小贴士</p>
            </div>
            <div className={styles.frame32}>
              <img
                src="../image/mk5578sx-4i9ifwa.png"
                className={styles.rectangle18}
              />
              <p className={styles.text2}>狗狗的十大表现</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.autoWrapper}>
        <div className={styles.pets}>
          <div className={styles.topVets}>
            <div className={styles.title3}>
              <p className={styles.text}>顶级兽医</p>
              <p className={styles.text3}>查看全部</p>
            </div>
            <div className={styles.cards3}>
              <div className={styles.cards2}>
                <div className={styles.vet}>
                  <img
                    src="../image/mk5578sx-l2ylvyq.png"
                    className={styles.image}
                  />
                  <div className={styles.nameStars}>
                    <p className={styles.text4}>陈佑康</p>
                    <img
                      src="../image/mk5578sv-gfcp883.svg"
                      className={styles.stars}
                    />
                  </div>
                </div>
                <div className={styles.vet}>
                  <img
                    src="../image/mk5578sx-oaijqky.png"
                    className={styles.image}
                  />
                  <div className={styles.nameStars}>
                    <p className={styles.text4}>钱佳仪</p>
                    <img
                      src="../image/mk5578sv-gfcp883.svg"
                      className={styles.stars}
                    />
                  </div>
                </div>
                <div className={styles.vet}>
                  <img
                    src="../image/mk5578sx-qcl9uzg.png"
                    className={styles.image}
                  />
                  <div className={styles.nameStars}>
                    <p className={styles.text4}>李鑫宇</p>
                    <img
                      src="../image/mk5578sv-gfcp883.svg"
                      className={styles.stars}
                    />
                  </div>
                </div>
              </div>
            </div>
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
