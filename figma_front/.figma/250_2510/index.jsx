import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.frame2}>
      <div className={styles.header}>
        <div className={styles.leftIcon}>
          <img src="../image/mk5b7942-c9euw58.svg" className={styles.back} />
        </div>
        <p className={styles.myPets}>添加提醒</p>
        <div className={styles.statusBarIPhone}>
          <div className={styles.time2}>
            <p className={styles.time}>9:41</p>
          </div>
          <div className={styles.levels}>
            <img
              src="../image/mk5b7942-bumpmow.svg"
              className={styles.cellularConnection}
            />
            <img src="../image/mk5b7942-1k3xtvi.svg" className={styles.wifi} />
            <img src="../image/mk5b7943-xgxl8nt.svg" className={styles.frame} />
          </div>
        </div>
      </div>
      <div className={styles.options}>
        <div className={styles.dog}>
          <div className={styles.ellipse2}>
            <div className={styles.ellipse} />
            <img src="../image/mk5b7942-ydq67nc.svg" className={styles.pill} />
          </div>
          <p className={styles.text}>药物</p>
        </div>
        <div className={styles.cat}>
          <div className={styles.ellipse3}>
            <img src="../image/mk5b7942-o7hff1v.svg" className={styles.vaccine} />
          </div>
          <p className={styles.text2}>疫苗</p>
        </div>
        <div className={styles.bird}>
          <div className={styles.ellipse4}>
            <img src="../image/mk5b7942-y5h3zz6.svg" className={styles.vaccine} />
          </div>
          <p className={styles.text3}>运动</p>
        </div>
        <div className={styles.bird2}>
          <div className={styles.ellipse5}>
            <img src="../image/mk5b7942-7yorazd.svg" className={styles.vaccine} />
          </div>
          <p className={styles.text3}>液体</p>
        </div>
      </div>
      <div className={styles.inputs}>
        <div className={styles.frame15}>
          <p className={styles.label}>提醒名称</p>
          <p className={styles.input}>咀嚼片</p>
        </div>
        <div className={styles.input2}>
          <div className={styles.frame152}>
            <p className={styles.label}>期间</p>
            <p className={styles.input}>3天</p>
          </div>
          <img src="../image/mk5b7942-81vcz4w.svg" className={styles.right} />
        </div>
        <div className={styles.input2}>
          <div className={styles.frame152}>
            <p className={styles.label}>时间</p>
            <p className={styles.input}>上午 09:20</p>
          </div>
          <img src="../image/mk5b7942-81vcz4w.svg" className={styles.right} />
        </div>
      </div>
      <div className={styles.amount}>
        <p className={styles.label}>数量</p>
        <div className={styles.buttons}>
          <div className={styles.ellipse6}>
            <img src="../image/mk5b7942-gv8o5au.svg" className={styles.minus} />
          </div>
          <p className={styles.text4}>2颗药</p>
          <div className={styles.ellipse6}>
            <img src="../image/mk5b7942-cee5ljv.svg" className={styles.minus} />
          </div>
        </div>
      </div>
      <div className={styles.button}>
        <p className={styles.label2}>保存</p>
      </div>
      <div className={styles.homeIndicator2}>
        <div className={styles.homeIndicator} />
      </div>
    </div>
  );
}

export default Component;
