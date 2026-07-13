import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.frame2}>
      <div className={styles.statusBarIPhone}>
        <div className={styles.time2}>
          <p className={styles.time}>9:41</p>
        </div>
        <div className={styles.levels}>
          <img
            src="../image/mk52h0a2-3p3rqbu.svg"
            className={styles.cellularConnection}
          />
          <img src="../image/mk52h0a2-3xj098q.svg" className={styles.wifi} />
          <img src="../image/mk52h0a2-qhrak3y.svg" className={styles.frame} />
        </div>
      </div>
      <div className={styles.options}>
        <div className={styles.autoWrapper}>
          <p className={styles.text}>登录</p>
          <div className={styles.indicator} />
        </div>
        <p className={styles.text2}>注册</p>
      </div>
      <div className={styles.text7}>
        <p className={styles.text5}>
          <span className={styles.text3}>
            欢迎回来
            <br />
          </span>
          <span className={styles.text4}>宠物爱好者...</span>
        </p>
        <div className={styles.inputs}>
          <div className={styles.input2}>
            <p className={styles.input}>邮箱</p>
          </div>
          <div className={styles.input2}>
            <p className={styles.input}>密码</p>
          </div>
        </div>
        <p className={styles.text6}>忘记密码？</p>
      </div>
      <div className={styles.buttons}>
        <div className={styles.rectangle}>
          <img src="../image/mk52h0a2-smkc0hx.svg" className={styles.icons} />
        </div>
        <div className={styles.rectangle}>
          <img src="../image/mk52h0a2-49w6itq.svg" className={styles.icons} />
        </div>
        <div className={styles.button}>
          <p className={styles.label}>登录</p>
        </div>
      </div>
      <div className={styles.homeIndicator2}>
        <div className={styles.homeIndicator} />
      </div>
    </div>
  );
}

export default Component;
