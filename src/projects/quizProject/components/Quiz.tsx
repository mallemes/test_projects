import React, {useState} from 'react';
import styles from "../style/index.module.css";
import {QuizDates} from "../data";
import {useParams} from "react-router-dom";


const Quiz:React.FC  = () => {
    let { quizId } = useParams();
       let  a = Number(quizId)
    if (a>=QuizDates.length || a<0){
        a = 0
    }
    const quizDates = QuizDates[a]
    const [quizProcess, setQuizProcess] = useState({currentQuestion: 0, score: 0, isFinish: false})
    const nextQuiz = (isCorrect: boolean) => {
        if (quizProcess.currentQuestion + 2 > quizDates.length) {
            if (isCorrect) setQuizProcess({...quizProcess, score: quizProcess.score + 1, isFinish: true})
            else setQuizProcess({...quizProcess, isFinish: true})
        } else {
            if (isCorrect) setQuizProcess({
                ...quizProcess,
                score: quizProcess.score + 1,
                currentQuestion: quizProcess.currentQuestion + 1
            })
            else
                setQuizProcess({...quizProcess, currentQuestion: quizProcess.currentQuestion + 1})
        }
    }
    const restart = () => setQuizProcess({currentQuestion: 0, score: 0, isFinish: false})
    return (
        <div className={styles.quiz}>
            <div className={styles.container}>
                {!quizProcess.isFinish
                    ? <>
                        <div className={styles.question}>{quizDates[quizProcess.currentQuestion].questionText}</div>
                        <div className={styles.answerPR}>
                            {quizDates[quizProcess.currentQuestion].answers.map((question,index) =>
                                <div onClick={() => nextQuiz(question.isCorrect)} key={index}
                                     className={styles.answer}>
                                    {question.answer}
                                </div>
                            )}
                        </div>
                    </>
                    : <div className={styles.end}>
                        <div className={styles.endTitle}>
                            <span>YOUR SCORE IS</span>
                        </div>
                        <div className={styles.score}>
                            <span>{quizProcess.score}/{quizDates.length}</span>
                        </div>
                        <div className={styles.restart}>
                            <span onClick={restart}>RESTART</span>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Quiz;