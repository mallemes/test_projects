import React, {useEffect, useState} from 'react';
import styles from "../style/index.module.css";
// import {QuizDates} from "../data";
import {useParams} from "react-router-dom";
import {quizRetrieve} from "./API/api";


const Quiz: React.FC = () => {
    const [quizDates, setQuizDates] = useState<any>(null)
    let {quizId} = useParams();
    let a = Number(quizId)
    const [quizProcess, setQuizProcess] = useState({currentQuestion: 0, score: 0, isFinish: false})
    useEffect(() => {
        quizRetrieve(a).then(r => {
            if (r) {
                setQuizDates(r.question_set)
            }
        })
    }, [])
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
    if (!quizDates){
        return <div><h1>loading...</h1></div>
    }
    return (
        <div className={styles.quiz}>
            <div className={styles.container}>
                {!quizProcess.isFinish
                    ? <>
                        <div className={styles.question}>{quizDates[quizProcess.currentQuestion]?.questionText}</div>
                        <div className={styles.answerPR}>
                            {quizDates[quizProcess.currentQuestion]?.answer_set.map((question: any) =>
                                <div onClick={() => nextQuiz(question.isCorrect)} key={question.id}
                                     className={styles.answer}>
                                    {question.textAnswer}
                                </div>
                            )}
                        </div>
                    </>
                    : <div className={styles.end}>
                        <div className={styles.endTitle}>
                            <span>YOUR SCORE IS</span>
                        </div>
                        <div className={styles.score}>
                            <span>{quizProcess.score}/{quizDates?.length}</span>
                        </div>
                        <div className={styles.restart}>
                            <span onClick={restart}>RESTART</span>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}


export default Quiz;