import React from 'react';
import styles from './Contacts.module.css';
import git from './git.svg';
import fb from './fb.svg';
import telegram from './telegram.svg';
import notebook from './notebook.webp';
// import inst from "./inst.svg";
import linkedin from './linkedin.svg';
import {ALL_CONSTANTS_CONTACTS as elem} from './constants/index';


const Contacts = () => {
    return <div id={'contacts'} className={styles.contactsInner}>
        <div className={styles.container}>
            <div className={styles.contactsTitleWrapper}>
                <h2 className={styles.contactsTitle}>{elem.contactsTitle}</h2>
            </div>
            <div className={styles.contactsWrapper}>
                <div className={styles.contactsDescr}>
                    <p className={styles.contactsSubTitle}>{elem.callMe}</p>
                    <div className={styles.contactsSocial}>
                        <a href="https://github.com/MitPalVach" className={styles.contactsSocialLink}
                           target='_blank'><img className={styles.contactsSocialImg} src={git} alt="github"/></a>
                        <a href="https://t.me/mitpalv" target='_blank' className={styles.contactsSocialLink}><img
                            className={styles.contactsSocialImg} src={telegram} alt="telegram"/></a>
                        <a href="https://www.facebook.com/dmitriy.vachugov.9" className={styles.contactsSocialLink}
                           target='_blank'><img className={styles.contactsSocialImg} src={fb} alt="facebook"/></a>
                        <a href="https://www.linkedin.com/in/vachugov" className={styles.contactsSocialLink}
                           target='_blank'><img className={styles.contactsSocialImg} src={linkedin} alt="linkedin"/></a>
                        {/*<a href="https://www.instagram.com/?hl=ru" target='_blank' className={styles.contactsSocialLink}><img*/}
                        {/*    className={styles.contactsSocialImg} src={inst} alt="instagram"/></a>*/}
                    </div>
                    <p className={styles.contactsSubTitle}>{elem.or}</p>

                    <form className={styles.contactsForm}>
                        <div className={styles.contactsInputWrapper}>
                            <input className={styles.contactsInput} type="text"/>
                            <label className={styles.contactsLabel}>{elem.yourName}</label>
                        </div>
                        <div className={styles.contactsInputWrapper}>
                            <input className={styles.contactsInput} type="email"/>
                            <label className={styles.contactsLabel}>{elem.yourEmail}</label>
                        </div>
                        <div className={styles.contactsTextareaWrapper}>
                            <textarea className={styles.contactsTextarea} name="text"/>
                            <label className={styles.contactsLabel}>{elem.yourMessage}</label>
                        </div>
                        <div className={styles.contactsTriggers}>
                            <button type={"submit"} className={styles.contactsBtn}>{elem.send}</button>
                        </div>
                    </form>
                </div>
                <div className={styles.contactsImgWrapper}>
                    <img className={styles.contactsImg} src={notebook} alt="notebook"/>
                </div>
            </div>
        </div>
    </div>
};

export default Contacts;