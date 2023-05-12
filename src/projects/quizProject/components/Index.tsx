import React, {useEffect, useState} from 'react';
// import {QuizDates} from "../data";
import styles from "../style/index.module.css";
import {useNavigate} from "react-router-dom";
import {allQuiz} from "./API/api";


const Index = () => {
    const navigate = useNavigate();
    const [apiQuiz,setApiQuiz] = useState<Array<any>>([]);
    useEffect(() => {
        allQuiz().then(r =>setApiQuiz(r))
    }, [])
    return (
        <div className={styles.quizzes}>
            {apiQuiz?.map((quiz) => (
                <div key={quiz.id} onClick={() => navigate(`/quiz/${quiz.id}`)} className={styles.quizItem}>
                    QUIZ {quiz.name}
                </div>
            ))}
        </div>
    );
};

export default Index;