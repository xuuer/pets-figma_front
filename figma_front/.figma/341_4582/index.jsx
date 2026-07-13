import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.background}>
      <p className={styles.text}>智能宠物护理</p>
      <p className={styles.text2}>
        为您的宠物找到完美
        <br />
        的兽医
      </p>
      <div className={styles.button}>
        <p className={styles.label}>现在预约</p>
      </div>
    </div>
  );
}

export default Component;
