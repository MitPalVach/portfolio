import React from 'react';
import styles from './Footer.module.css';
import {ALL_CONSTANTS_FOOTER as elem} from './constants/index'


const Footer = () => {
    return (
        <footer className={styles.footerInner}>
            <div className={styles.container}>
                <div className={styles.footerTitleWrapper}>
                    <h2 className={styles.footerTitle}>{elem.VachugovDmitriy}</h2>
                </div>
                {/*<div className={styles.footerWrapper}>*/}
                {/*<div className={styles.footerItem}> </div>*/}
                {/*<div className={styles.footerItem}> </div>*/}
                {/*<div className={styles.footerItem}> </div>*/}
                {/*<div className={styles.footerItem}> </div>*/}
                {/*<div className={styles.footerItem}> </div>*/}
                {/*</div>*/}
                <div className={styles.footerCopyRightsWrapper}>
                    <p className={styles.footerCopyRights}>{elem.copyRights}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;