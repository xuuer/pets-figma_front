import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.vets}>
      <div className={styles.title}>
        <p className={styles.text}>兽医</p>
        <p className={styles.text2}>查看全部</p>
      </div>
      <div className={styles.cards2}>
        <div className={styles.cards}>
          <div className={styles.vet}>
            <img src="../image/mk542p2n-xb06nub.png" className={styles.image} />
            <div className={styles.nameStars}>
              <p className={styles.text3}>陈佑康</p>
              <img src="../image/mk542p2m-lbxucdo.svg" className={styles.stars} />
            </div>
          </div>
          <div className={styles.vet}>
            <img src="../image/mk542p2n-rqwze58.png" className={styles.image} />
            <div className={styles.nameStars}>
              <p className={styles.text3}>李鑫宇</p>
              <img src="../image/mk542p2m-lbxucdo.svg" className={styles.stars} />
            </div>
          </div>
          <div className={styles.vet}>
            <img src="../image/mk542p2n-rnfmd2n.png" className={styles.image} />
            <div className={styles.nameStars}>
              <p className={styles.text3}>钱佳仪</p>
              <img src="../image/mk542p2m-lbxucdo.svg" className={styles.stars} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;
