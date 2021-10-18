import React from 'react';
import styles from './About.module.css';
import ava from './react.svg';
import {ALL_CONSTANTS_ABOUT as elem} from './constants/index';


const About = () => {
    return (
        <div className={styles.aboutInner}>
            <div className={styles.aboutWrapper}>
                <div className={styles.aboutTitleWrapper}>
                    <h2 className={styles.aboutTitle}>{elem.hi}</h2>
                    <h1 className={styles.aboutTitle}><span>{elem.frontEnd}</span>{elem.dev}</h1>
                </div>
                <div className={styles.aboutPhotoWrapper}>
                    <img className={styles.aboutPhoto} src={ava} alt="photo"/>
                </div>
            </div>
        </div>
    );
};

export default About;