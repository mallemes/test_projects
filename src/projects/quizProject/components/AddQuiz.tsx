import React, {useState} from 'react';
import styles from "../style/index.module.css";
import {QuizDates} from "../data";
import {useNavigate} from "react-router-dom";

type quizType = {
    questionText: string;
    answers: Array<{ answer: string; isCorrect: boolean; }>;
}[]
type questionType = {
    questionText: string;
    answers: Array<{ answer: string; isCorrect: boolean; }>;
}
const initialValue = {questionText: "",
    answers: [{answer: "", isCorrect: false}, {answer: "", isCorrect: false},
        {answer: "", isCorrect: false}, {answer: "", isCorrect: false}]
}

const AddQuiz = () => {
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(1)
    const [newQuizValues, setNewQuizValues] = useState<questionType>(initialValue)
    const [newQuiz, setNewQuiz] = useState<quizType|null>(null)
    const inputs = [1, 2, 3, 4];
    const changeArr = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
        const ch = {answer: e.target.value, isCorrect: isChecked - 1 === i}
        const newAnswers = newQuizValues.answers.map((el, j) => (j === i) ? ch : el)
        setNewQuizValues({...newQuizValues, answers: newAnswers})
    }
    const refresh = () => {
        newQuizValues.answers = newQuizValues.answers.map((el: { answer: string; isCorrect: boolean; }, index: number) => (index == isChecked - 1)
            ? {isCorrect: true, answer: el.answer} : {isCorrect: false, answer: el.answer})
        if (!newQuiz) setNewQuiz([ newQuizValues])
        else setNewQuiz([...newQuiz, newQuizValues])

        setNewQuizValues(initialValue)
    }
    const save = () => {
        if (newQuiz) {
            QuizDates.push(newQuiz)
        return navigate('/')
        }
    }

    return (
        <div className={styles.quiz} style={{paddingBottom: "50px"}}>
            <div className={styles.container} style={{height: "500px"}}>
                <div className={styles.newQuestion}>
                    <input placeholder="insert question..."
                           type="text"
                           value={newQuizValues.questionText}
                           onChange={e => setNewQuizValues({...newQuizValues, questionText: e.target.value})}
                           className={styles.input} style={{width: "90%"}}
                    />
                </div>
                <div className={styles.answerPR}>
                    {inputs.map((inp, index) => (
                        <div key={inp}>
                            <input
                                value={newQuizValues.answers[index].answer}
                                onChange={(e) => changeArr(e, index)}
                                placeholder="insert answer..."
                                className={styles.input} style={{width: "70%"}}
                                type="text"/>
                            <input type="checkbox" checked={inp === isChecked} onChange={() => setIsChecked(inp)}/>
                        </div>
                    ))}
                    <div>
                        <button className={styles.addQuizBtn}
                              onClick={save}  style={{backgroundColor: "rgba(136, 134, 134, 0.52)"}}>save
                        </button>
                        <button onClick={refresh} className={styles.addQuizBtn}>+</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AddQuiz;