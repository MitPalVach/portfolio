import React from 'react';
import styles from './Panel.module.css';
import git from './git.svg';
// import inst from './inst.svg';
import fb from './fb.svg';
import telegram from "./telegram.svg";
import linkedin from './linkedin.svg';
import {ALL_CONSTANTS_PANEL as elem} from './constants/index'


const Panel = () => {
    return (
        <aside className={styles.panel}>
            <div className={styles.panelText}>{elem.soc}</div>
            <div className={styles.panelDivider}></div>
            <a href="https://github.com/MitPalVach" target='_blank' className={styles.panelSocial}><img
                className={styles.panelImg} src={git} alt="github"/></a>
            <a href="https://t.me/mitpalv" target='_blank' className={styles.panelSocial}><img
                className={styles.panelImg} src={telegram} alt="telegram"/></a>
            {/*<a href="https://www.instagram.com/?hl=ru" target='_blank' className={styles.panelSocial}><img*/}
            {/*    className={styles.panelImg} src={inst} alt="instagram"/></a>*/}
            <a href="https://www.facebook.com/dmitriy.vachugov.9" target='_blank' className={styles.panelSocial}><img
                className={styles.panelImg} src={fb} alt="facebook"/></a>
            <a href="https://www.linkedin.com/in/vachugov" target='_blank' className={styles.panelSocial}><img
                className={styles.panelImg} src={linkedin} alt="linkedin"/></a>
        </aside>
    );
};

export default Panel;