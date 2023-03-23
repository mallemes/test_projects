import React from 'react';
import styles from "../style/index.module.css";
import {NavLink} from "react-router-dom";
import {useAuth} from "./Context/useAuth";

const Navbar = () => {
    const {user} = useAuth()
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>QUIZ APP</div>
            <div className={styles.navButtons}>
                <NavLink to={'/'} className={styles.navButton}>Home</NavLink>
                <NavLink to={'/about'} className={styles.navButton}>About</NavLink>
                {user
                    ? <>
                        <NavLink to={'/add_quiz'} className={styles.navButton}>ADD QUIZ</NavLink>
                        <NavLink to={'/profile'} className={styles.navButton}>Profile</NavLink>
                    </>
                    : <NavLink to={'/register'} className={styles.navButton}>Register</NavLink>
                }

            </div>
        </div>
    );
};

export default Navbar;