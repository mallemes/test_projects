

type QuizDataType = {
        questionText: string;
        answers: Array<{ answer: string; isCorrect: boolean; }>;
    }[];


export const QuizDates: QuizDataType = [
    {
        questionText: "1atyn kim?",
        answers: [
            {answer: "erjan", isCorrect: true},
            {answer: "talgat", isCorrect: false},
            {answer: "marat", isCorrect: false},
            {answer: "kulaw", isCorrect: false},
        ]
    }, {
        questionText: "2atyn kim?",
        answers: [
            {answer: "erjan", isCorrect: true},
            {answer: "talgat", isCorrect: false},
            {answer: "marat", isCorrect: false},
            {answer: "kulaw", isCorrect: false},
        ]
    }, {
        questionText: "3atyn kim?",
        answers: [
            {answer: "erjan", isCorrect: true},
            {answer: "talgat", isCorrect: false},
            {answer: "marat", isCorrect: false},
            {answer: "kulaw", isCorrect: false},
        ]
    }, {
        questionText: "4atyn kim?",
        answers: [
            {answer: "3erjan", isCorrect: true},
            {answer: "talgat", isCorrect: false},
            {answer: "marat", isCorrect: false},
            {answer: "kulaw", isCorrect: false},
        ]
    }
]