import React, {useState} from 'react';
import styles from "../style/index.module.css";
import {useAuth} from "./Context/useAuth";
import {useNavigate} from 'react-router-dom';
import {loginAPI} from "./API/api";

const Login = () => {
        const [newUser, setNewUser] = useState({username: "", password: ""});
        const [user, setUser] = useState({id: 0, username: "", email: "", isAdmin: false})
        const [errors, setErrors] = useState("");
        const {signIn} = useAuth();
        const navigate = useNavigate();
        const check = !(newUser.username && newUser.password);
        const login = (e: React.SyntheticEvent) => {
            e.preventDefault()
            if (!check) {
                loginAPI(newUser.username, newUser.password).then(r => {
                    if (r) {
                        console.log(r)
                        setUser(prevState => {
                            prevState.id = r?.id || prevState.id;
                            prevState.email = r?.email || prevState.email;
                            prevState.isAdmin = r?.is_superuser || prevState.isAdmin;
                            prevState.username = r?.username || prevState.username;
                            return prevState;
                        });
                    } else {
                        setErrors("wrong email or password")
                    }
                });
            }
        }
        if (user.id != 0){
            console.log(user)
            signIn(user, () => navigate("/profile"))
        }
        return (
            <div className={styles.login}>

                <form className={styles.loginContent}>
                    {errors ? <div style={{color: 'red'}}>{errors}</div> : ""}
                    <div>
                        <label htmlFor="name">Username</label>
                    </div>
                    <div>
                        <input className={styles.input} type="text" value={newUser.username}
                               onChange={e => setNewUser({...newUser, username: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor="name">Password</label>
                    </div>
                    <div>
                        <input className={styles.input} type="password" value={newUser.password}
                               onChange={e => setNewUser({...newUser, password: e.target.value})}/>
                    </div>
                    <div>
                        <button disabled={check} className={styles.btn} onClick={login}>login</button>
                    </div>
                </form>
            </div>
        );
    }
;

export default Login;