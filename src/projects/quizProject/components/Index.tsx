import React from 'react';
import {QuizDates} from "../data";
import styles from "../style/index.module.css";
import {useNavigate} from "react-router-dom";


const Index = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.quizzes}>
            {QuizDates.map((quiz ,index)=>(
                <div key={index} onClick={()=>navigate(`/quiz/${index}`)} className={styles.quizItem}>
                    QUIZ {index+1}
                </div>
            ))}
        </div>
    );
};

export default Index;