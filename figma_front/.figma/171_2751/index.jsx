import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.vet}>
      <img src="../image/mk54epns-lxelyb8.png" className={styles.image} />
      <div className={styles.nameStars}>
        <p className={styles.text}>陈佑康</p>
        <img src="../image/mk54epns-z8btm0l.svg" className={styles.stars} />
      </div>
    </div>
  );
}

export default Component;
