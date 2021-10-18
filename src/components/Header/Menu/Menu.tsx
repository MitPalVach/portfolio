import React from 'react';
import styles from './Menu.module.css';
import {ALL_CONSTANTS_MENU as elem} from './constants/index'



const Menu = () => {
    return (
        <div className={styles.headerMenu}>
            <a className={styles.navItem} href={"#header"}>{elem.main}</a>
            <a className={styles.navItem} href={"#iuse"}>{elem.skills}</a>
            <a className={styles.navItem} href={"#myportfolio"}>{elem.works}</a>
            <a className={styles.navItem} href={"#contacts"}>{elem.contacts}</a>
        </div>
    );
};


export default Menu;