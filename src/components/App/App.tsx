import React from 'react';
import styles from './App.module.css';
import Header from "../Header/Header";
import About from "../About/About";
import Iuse from "../Iuse/Iuse";
import MyPortfolio from "../MyPortfolio/MyPortfolio";
import Contacts from "../Contacts/Contacts";
import Footer from "../Footer/Footer";


function App() {
    return (
        <div className={styles.container}>
            <Header/>
            <About/>
            <Iuse />
            <MyPortfolio/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
