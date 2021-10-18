import React from 'react';
import styles from './Iuse.module.css';
import {iuseTitle, iuseData} from "./constants";
import IuseItem from "./IuseItem/IuseItem";


const Iuse = () => {
    return (
        <div id={'iuse'} className={styles.iuseInner}>
            <div className={styles.container}>
                <div className={styles.iuseTitleWrapper}>
                    <h2 className={styles.iuseTitle}>{iuseTitle}</h2>
                </div>
                <div className={styles.iuseWrapper}>
                    {iuseData.map(el =>  <IuseItem key={el.id} alt={el.alt} src={el.src} sub={el.sub} descr={el.descr} />)}
                </div>
            </div>
        </div>
    )
}
export default Iuse;