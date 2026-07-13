import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.frame2}>
      <div className={styles.background}>
        <div className={styles.header}>
          <div className={styles.leftIcon}>
            <img src="../image/mk56tocx-cfd5y6k.svg" className={styles.back} />
          </div>
          <div className={styles.statusBarIPhone}>
            <div className={styles.time2}>
              <p className={styles.time}>9:41</p>
            </div>
            <div className={styles.levels}>
              <img
                src="../image/mk56tocx-9k65jz7.svg"
                className={styles.cellularConnection}
              />
              <img src="../image/mk56tocx-0d10zsj.svg" className={styles.wifi} />
              <img src="../image/mk56tocx-hpz51l6.svg" className={styles.frame} />
            </div>
          </div>
        </div>
        <div className={styles.rectangle2}>
          <div className={styles.bio}>
            <div className={styles.autoWrapper2}>
              <div className={styles.autoWrapper}>
                <p className={styles.text}>陈佑康</p>
                <div className={styles.rating}>
                  <img
                    src="../image/mk56tocx-20yme3b.svg"
                    className={styles.stars}
                  />
                  <p className={styles.a124}>(124)</p>
                </div>
              </div>
              <div className={styles.ellipse}>
                <img src="../image/mk56tocx-ikv20t2.svg" className={styles.call} />
              </div>
            </div>
            <p className={styles.description3}>
              <span className={styles.description}>
                于2016年从德克萨斯农工大学（Texas
                A&M）兽医专业毕业，2017年在纽约市的AMC（美国动物医疗中心）完成了小动物轮转实习，随后在塔夫茨大学（Tufts
                University）继续深造，完成了小动物急诊与危重病学的住院医生培训。&nbsp;
              </span>
              <span className={styles.description2}>阅读更多</span>
            </p>
          </div>
          <div className={styles.rectangle}>
            <div className={styles.autoWrapper3}>
              <p className={styles.title}>6</p>
              <p className={styles.subtitle}>经验</p>
            </div>
            <div className={styles.vector} />
            <div className={styles.autoWrapper4}>
              <p className={styles.title2}>46</p>
              <p className={styles.subtitle}>完成</p>
            </div>
            <div className={styles.vector2} />
            <div className={styles.autoWrapper5}>
              <p className={styles.title2}>￥52.99</p>
              <p className={styles.subtitle}>预约</p>
            </div>
          </div>
          <div className={styles.button}>
            <p className={styles.label}>预约</p>
          </div>
          <div className={styles.homeIndicator2}>
            <div className={styles.homeIndicator} />
          </div>
        </div>
      </div>
      <div className={styles.reviews2}>
        <div className={styles.title3}>
          <p className={styles.text2}>评论</p>
          <p className={styles.text3}>阅读所有</p>
        </div>
        <div className={styles.reviews}>
          <div className={styles.review}>
            <div className={styles.nameDateRating}>
              <div className={styles.nameAndDate}>
                <p className={styles.name}>刘逸志</p>
                <p className={styles.date}>2天前</p>
              </div>
              <div className={styles.rating2}>
                <img src="../image/mk56tocx-20yme3b.svg" className={styles.stars} />
              </div>
            </div>
            <p className={styles.description4}>
              <span className={styles.description}>
                对我的狗狗贝拉所受到的照顾印象深刻。惊人的手术技巧加上高水平...&nbsp;
              </span>
              <span className={styles.description2}>阅读更多</span>
            </p>
          </div>
          <div className={styles.review}>
            <div className={styles.nameDateRating}>
              <div className={styles.nameAndDate}>
                <p className={styles.name}>朱天浩</p>
                <p className={styles.date}>7天前</p>
              </div>
              <div className={styles.rating2}>
                <img src="../image/mk56tocx-g3obfj1.svg" className={styles.stars} />
              </div>
            </div>
            <p className={styles.description4}>
              <span className={styles.description}>
                我从来不写评价，但这次我觉得必须写。我的狗狗凯莎讨厌去宠物医院，但是这次...&nbsp;
              </span>
              <span className={styles.description2}>Read more</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;
