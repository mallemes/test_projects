
export type quizType = {
    questionText: string;
    answers: Array<{ answer: string; isCorrect: boolean; }>;
}[]
export type questionType = {
    questionText: string;
    answers: Array<{ answer: string; isCorrect: boolean; }>;
}
export const initialValue = {
    questionText: "",
    answers: [{answer: "", isCorrect: false}, {answer: "", isCorrect: false},
        {answer: "", isCorrect: false}, {answer: "", isCorrect: false}]
}
