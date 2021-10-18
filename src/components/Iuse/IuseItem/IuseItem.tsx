import React from 'react';
import styles from './IuseItem.module.css';
import {PropsIuseType} from "../constants";


const IuseItem = (props: PropsIuseType) => {
    return (
        <>
            <div className={styles.iuseItem}>
                <div className={styles.iuseImgWrapper}>
                    <img src={props.src} alt={props.alt} className={styles.iuseImg}/>
                </div>
                <h3 className={styles.iuseSubTitle}>{props.sub}</h3>
                <p className={styles.iuseText}>{props.descr}</p>
            </div>
        </>
    );
};

export default IuseItem;
