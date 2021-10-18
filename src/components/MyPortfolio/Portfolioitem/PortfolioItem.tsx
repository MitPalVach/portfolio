import React from 'react';
import styles from './PortfolioItem.module.css';
import {PropsPortfolioType} from "../constants";


const PortfolioItem = (props: PropsPortfolioType) => {
    return (
        <div className={styles.portItem}>
            <a className={styles.portImgLink} target={'_blank'} href={props.href}>
                <img className={styles.portImg} width={'100%'} height={'100%'} src={props.src} alt={props.alt}/>
                <div className={styles.portImgHoverWrapper}>
                    <div className={styles.portImgHover}>{props.portImgHover}</div>
                    <h4 className={styles.portSubTitle}>{props.portSubTitle}</h4>
                    <p className={styles.portText}>{props.portText}</p>
                </div>
            </a>
        </div>
    );
};

export default PortfolioItem;