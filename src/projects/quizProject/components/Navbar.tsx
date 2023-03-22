import React from 'react';
import styles from "../style/index.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>QUIZ APP</div>
            <div className={styles.navButtons}>
                <NavLink to={'/'} className={styles.navButton}>Home</NavLink>
                <NavLink to={'/add_quiz'} className={styles.navButton}>ADD QUIZ</NavLink>
                <NavLink to={'/e'} className={styles.navButton}>About</NavLink>
            </div>
        </div>
    );
};

export default Navbar;