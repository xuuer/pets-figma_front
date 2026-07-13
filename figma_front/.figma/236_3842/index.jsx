import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.frame2}>
      <div className={styles.header}>
        <div className={styles.leftIcon}>
          <img src="../image/mk57oy88-77jpkuk.svg" className={styles.back} />
        </div>
        <p className={styles.myPets}>评论</p>
        <div className={styles.statusBarIPhone}>
          <div className={styles.time2}>
            <p className={styles.time}>9:41</p>
          </div>
          <div className={styles.levels}>
            <img
              src="../image/mk57oy89-gjxt81v.svg"
              className={styles.cellularConnection}
            />
            <img src="../image/mk57oy89-r272eja.svg" className={styles.wifi} />
            <img src="../image/mk57oy89-ygfbwgs.svg" className={styles.frame} />
          </div>
        </div>
      </div>
      <div className={styles.tabs2}>
        <div className={styles.tabs}>
          <p className={styles.text}>最近</p>
          <p className={styles.text}>差评</p>
          <p className={styles.text}>好评</p>
        </div>
        <div className={styles.autoWrapper}>
          <div className={styles.vector} />
          <div className={styles.indicator} />
        </div>
      </div>
      <div className={styles.ratingGraphic}>
        <p className={styles.rating}>4,6</p>
        <div className={styles.graphic}>
          <div className={styles.autoWrapper3}>
            <div className={styles.autoWrapper2}>
              <p className={styles.a5}>5</p>
              <p className={styles.a4}>4</p>
            </div>
            <p className={styles.a3}>3</p>
            <p className={styles.a2}>2</p>
            <p className={styles.a2}>1</p>
          </div>
          <div className={styles.autoWrapper4}>
            <div className={styles.lines}>
              <div className={styles.rectangle1}>
                <div className={styles.rectangle2} />
              </div>
              <div className={styles.rectangle12}>
                <div className={styles.rectangle22} />
              </div>
              <div className={styles.rectangle13}>
                <div className={styles.rectangle23} />
              </div>
              <div className={styles.rectangle14}>
                <div className={styles.rectangle24} />
              </div>
              <div className={styles.rectangle15}>
                <div className={styles.rectangle25} />
              </div>
            </div>
            <p className={styles.text2}>124 条评价</p>
          </div>
        </div>
      </div>
      <div className={styles.autoWrapper5}>
        <div className={styles.reviews}>
          <div className={styles.review}>
            <div className={styles.nameDateRating}>
              <div className={styles.nameAndDate}>
                <p className={styles.name}>刘逸志</p>
                <p className={styles.date}>2天前</p>
              </div>
              <div className={styles.rating2}>
                <img src="../image/mk57oy88-ha4pja7.svg" className={styles.stars} />
              </div>
            </div>
            <p className={styles.description3}>
              <span className={styles.description}>
                对我的狗狗贝拉所受到的照顾印象深刻。惊人的手术技能，再加上高标准的护理和同情心。Susie非常出色，让这段紧张的时光变得轻松了许多。非常感谢...
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
                <img src="../image/mk57oy88-vfhizot.svg" className={styles.stars} />
              </div>
            </div>
            <p className={styles.description3}>
              <span className={styles.description}>
                我从来不写评论，但这次我觉得必须写。我的狗凯莎非常讨厌去兽医那里，以至于她会感到非常紧张，她会躲在椅子下面，拒绝出来，她会颤抖，尾巴也…….&nbsp;
              </span>
              <span className={styles.description2}>阅读更多</span>
            </p>
          </div>
          <div className={styles.review}>
            <div className={styles.nameDateRating}>
              <div className={styles.nameAndDate}>
                <p className={styles.name}>储永岫</p>
                <p className={styles.date}>12天前</p>
              </div>
              <div className={styles.rating2}>
                <img src="../image/mk57oy88-vfhizot.svg" className={styles.stars} />
              </div>
            </div>
            <p className={styles.description3}>
              <span className={styles.description}>
                我有一只像小牛一样强壮的斯普罗克犬（一种杂交犬），它总是到处乱窜。今年到目前为止，你们已经免费从他的眼皮上取下了一只蜱虫，并给了我一些防跳蚤/蜱虫的药物。今天我们又遇到了另一个紧急情况...&nbsp;
              </span>
              <span className={styles.description2}>阅读更多</span>
            </p>
          </div>
        </div>
        <div className={styles.rectangle}>
          <div className={styles.button}>
            <p className={styles.label}>写评论</p>
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
