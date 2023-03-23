import React, {useState} from 'react';
import styles from "../style/index.module.css";
import {useAuth} from "./Context/useAuth";
import {useNavigate} from 'react-router-dom';

const Register = () => {
    const [newUser, setNewUser] = useState({name:"", email:"", password:""})
    const {signIn} =useAuth()
    const navigate = useNavigate();
    const register =(e: React.SyntheticEvent)=>{
        e.preventDefault()
        signIn(newUser, ()=>navigate('/'))
    }
    return (
        <div className={styles.login}>
            <form className={styles.loginContent}>
                <div>
                    <label htmlFor="name">Name</label>
                </div>
                <div>
                    <input className={styles.input} type="text" value={newUser.name} onChange={e =>setNewUser({...newUser,name: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="name">Email</label>
                </div>
                <div>
                    <input className={styles.input} type="text" value={newUser.email} onChange={e =>setNewUser({...newUser,email: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="name">Password</label>
                </div>
                <div>
                    <input className={styles.input} type="password" value={newUser.password} onChange={e =>setNewUser({...newUser,password: e.target.value})}/>
                </div>
                <div>
                    <button className={styles.btn} onClick={register} >register</button>
                </div>
            </form>
        </div>
    );
};

export default Register;