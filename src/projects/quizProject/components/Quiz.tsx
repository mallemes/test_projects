import React, {useState} from 'react';
import styles from "../style/index.module.css";
import {QuizDates} from "../data";

const Quiz = () => {
    const [quizProcess, setQuizProcess] = useState({currentQuestion: 0, score: 0, isFinish: false})
    const nextQuiz = (isCorrect: boolean) => {
        if (quizProcess.currentQuestion + 2 > QuizDates.length) {
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
                        <div className={styles.question}>{QuizDates[quizProcess.currentQuestion].questionText}</div>
                        <div className={styles.answerPR}>
                            {QuizDates[quizProcess.currentQuestion].answers.map(question =>
                                <div onClick={() => nextQuiz(question.isCorrect)} key={question.answer}
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
                            <span>{quizProcess.score}/{QuizDates.length}</span>
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