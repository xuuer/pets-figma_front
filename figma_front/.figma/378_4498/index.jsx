import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.petCard}>
      <img src="../image/mke032qv-q4lwp62.png" className={styles.image} />
      <div className={styles.topBack}>
        <div className={styles.name}>
          <p className={styles.text}>布丁</p>
          <p className={styles.text2}>4岁</p>
        </div>
        <div className={styles.ellipse}>
          <img src="../image/mke032qt-a2fvf4s.svg" className={styles.edit} />
        </div>
      </div>
    </div>
  );
}

export default Component;
