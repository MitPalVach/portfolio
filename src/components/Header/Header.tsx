import React from 'react';
import styles from './Header.module.css';
import Panel from "./Panel/Panel";
import git from "./Panel/git.svg";
import inst from "./Panel/inst.svg";
import fb from "./Panel/fb.svg";
import telegram from './Panel/telegram.svg';
import Menu from "./Menu/Menu";


const Header = () => {
    return (
        <header id={'header'} className={styles.headerInner}>
            <nav className={styles.navInner}>
                <div className={styles.headerSocial}>
                    <a href="https://github.com/MitPalVach" target='_blank' className={styles.panelSocial}><img
                        className={styles.panelImg} src={git} alt="github"/></a>
                    <a href="https://t.me/mitpalv" target='_blank' className={styles.panelSocial}><img
                        className={styles.panelImg} src={telegram} alt="telegram"/></a>
                    <a href="https://www.instagram.com/?hl=ru" target='_blank' className={styles.panelSocial}><img
                        className={styles.panelImg} src={inst} alt="instagram"/></a>
                    <a href="https://www.facebook.com/dmitriy.vachugov.9" target='_blank'
                       className={styles.panelSocial}><img className={styles.panelImg} src={fb} alt="facebook"/></a>
                </div>
                <Menu/>
            </nav>
            <div className={styles.headerWrapper}>
                <Panel/>
            </div>
        </header>
    );
};

export default Header;