import React from 'react';
import styles from './MyPortfolio.module.css';
import {portTitle, portfolioData} from './constants';
import PortfolioItem from "./Portfolioitem/PortfolioItem";


const MyPortfolio = () => {
    return (
        <div id={'myportfolio'} className={styles.portInner}>
            <div className={styles.container}>
                <div className={styles.portTitleWrapper}>
                    <h2 className={styles.portTitle}>{portTitle}</h2>
                </div>
                <div className={styles.portWrapper}>
                    {portfolioData.map(p => <PortfolioItem key={p.id} href={p.href} alt={p.alt} src={p.src}
                                                           portImgHover={p.portImgHover} portText={p.portText}
                                                           portSubTitle={p.portSubTitle} id={p.id}/>)}
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;