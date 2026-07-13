import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.articles}>
      <div className={styles.title}>
        <p className={styles.text}>科普文章</p>
        <p className={styles.text2}>查看全部</p>
      </div>
      <div className={styles.cards}>
        <div className={styles.frame33}>
          <div className={styles.frame32}>
            <img
              src="../image/mk55wcm4-45v7fi9.png"
              className={styles.rectangle18}
            />
            <p className={styles.text3}>猫咪护理小贴士</p>
          </div>
          <div className={styles.frame32}>
            <img
              src="../image/mk55wcm4-sbf94tj.png"
              className={styles.rectangle18}
            />
            <p className={styles.text3}>狗狗的十大表现</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;
