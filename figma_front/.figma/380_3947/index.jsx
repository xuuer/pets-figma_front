import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.background}>
      <div className={styles.vector} />
      <div className={styles.autoWrapper}>
        <img src="../image/mk5ahcyz-n83hphj.svg" className={styles.navBarIcon} />
        <img src="../image/mk5ahcyz-d8f0vnw.svg" className={styles.navBarIcon} />
        <img src="../image/mk5ahcyz-n9v6q7z.svg" className={styles.navBarIcon} />
        <div className={styles.navBarIcon2}>
          <div className={styles.ellipse} />
        </div>
        <img src="../image/mk5ahcyz-6gs0xof.svg" className={styles.navBarIcon} />
      </div>
    </div>
  );
}

export default Component;
