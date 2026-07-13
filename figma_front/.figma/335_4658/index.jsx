import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.text3}>
      <p className={styles.text}>照顾你的宠物</p>
      <p className={styles.text2}>
        宠物护理可以通过一些简单的步骤来帮助你每天照顾你心爱的宠物
      </p>
    </div>
  );
}

export default Component;
