import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.reviews2}>
      <div className={styles.title}>
        <p className={styles.text}>评论</p>
        <p className={styles.text2}>阅读所有</p>
      </div>
      <div className={styles.reviews}>
        <div className={styles.review}>
          <div className={styles.nameDateRating}>
            <div className={styles.nameAndDate}>
              <p className={styles.name}>刘逸志</p>
              <p className={styles.date}>2天前</p>
            </div>
            <div className={styles.rating}>
              <img src="../image/mk56sgim-q5jv7bq.svg" className={styles.stars} />
            </div>
          </div>
          <p className={styles.description3}>
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
            <div className={styles.rating}>
              <img src="../image/mk56sgim-d7v4a3e.svg" className={styles.stars} />
            </div>
          </div>
          <p className={styles.description3}>
            <span className={styles.description}>
              我从来不写评价，但这次我觉得必须写。我的狗狗凯莎讨厌去宠物医院，但是这次...&nbsp;
            </span>
            <span className={styles.description2}>Read more</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Component;
