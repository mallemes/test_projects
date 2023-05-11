import React, {useState} from 'react';
import styles from "../style/index.module.css";
import {useNavigate} from 'react-router-dom';
import {registerUser} from "./API/api";

const Register = () => {
    const ValidateEmail = (email: string) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    const [newUser, setNewUser] = useState({username: "", email: "", password: ""})
    const [errors, setErrors] = useState("");
    const navigate = useNavigate();
    const check = !(newUser.email && newUser.password && newUser.username && ValidateEmail(newUser.email));
    const register = (e: React.SyntheticEvent) => {
        e.preventDefault()
        if (!check) {
            registerUser(newUser.username, newUser.password, newUser.email).then(r => {
                    if (r) {
                        console.log(r)
                        navigate('/login')
                    } else {
                        setErrors("error")
                    }
                }
            );
        }
    }
    return (
        <div className={styles.login}>
            <form className={styles.loginContent}>
                {errors ? <div style={{color: "red"}}>{errors}</div> : ""}
                <div>
                    <label htmlFor="name">Name</label>
                </div>
                <div>
                    <input className={styles.input} type="text" value={newUser.username}
                           onChange={e => setNewUser({...newUser, username: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="name">Email</label>
                </div>
                <div>
                    <input className={styles.input} type="text" value={newUser.email}
                           onChange={e => setNewUser({...newUser, email: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="name">Password</label>
                </div>
                <div>
                    <input className={styles.input} type="password" value={newUser.password}
                           onChange={e => setNewUser({...newUser, password: e.target.value})}/>
                </div>

                <div>
                    <button disabled={check} className={styles.btn} onClick={register}>register</button>
                </div>
            </form>
        </div>
    );
};

export default Register;