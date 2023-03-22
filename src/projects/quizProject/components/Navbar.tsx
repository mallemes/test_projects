import React from 'react';
import styles from "../style/index.module.css";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>QUIZ APP</div>
            <div className={styles.navButtons}>
                <a href="#" className={styles.navButton}>Home</a>
                <a href="#" className={styles.navButton}>About</a>
                <a href="#" className={styles.navButton}>Profile</a>
                <a href="#" className={styles.navButton}>Register</a>
                <a href="#" className={styles.navButton}>Login</a>
            </div>
        </div>
    );
};

export default Navbar;