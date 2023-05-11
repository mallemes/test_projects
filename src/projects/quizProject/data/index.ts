

type QuizDataType = {
        questionText: string;
        answers: Array<{ answer: string; isCorrect: boolean; }>;
    }[][];


export const QuizDates: QuizDataType = [[
    {
        questionText: "Kazakhstan astanasy ?",
        answers: [
            {answer: "Astana", isCorrect: true},
            {answer: "Aktau", isCorrect: false},
            {answer: "Almaty", isCorrect: false},
            {answer: "Semey", isCorrect: false},
        ]
    }, {
        questionText: "President kim?",
        answers: [
            {answer: "Toqaev", isCorrect: true},
            {answer: "Nazarbaev", isCorrect: false},
            {answer: "Putin", isCorrect: false},
            {answer: "Obama", isCorrect: false},
        ]
    }, {
        questionText: "Jer kolemi newinwi orynda",
        answers: [
            {answer: "9", isCorrect: true},
            {answer: "2", isCorrect: false},
            {answer: "1", isCorrect: false},
            {answer: "8", isCorrect: false},
        ]
    }, {
        questionText: "Qazaq handygy kuryldy?",
        answers: [
            {answer: "1465", isCorrect: true},
            {answer: "1234", isCorrect: false},
            {answer: "5432", isCorrect: false},
            {answer: "1994", isCorrect: false},
        ]
    }
]
    ,[
        {
            questionText: "Abylay han shyn aty?",
            answers: [
                {answer: "Abilmansur", isCorrect: true},
                {answer: "talgat", isCorrect: false},
                {answer: "marat", isCorrect: false},
                {answer: "erlan", isCorrect: false},
            ]
        }, {
            questionText: "Orta juz bi?",
            answers: [
                {answer: "Kazybek", isCorrect: true},
                {answer: "Aiteke", isCorrect: false},
                {answer: "tole bi", isCorrect: false},
                {answer: "Asyk bi", isCorrect: false},
            ]
        }, {
            questionText: "Kazak handygy sogysty?",
            answers: [
                {answer: "Shaibani", isCorrect: true},
                {answer: "Mangol", isCorrect: false},
                {answer: "Turik", isCorrect: false},
                {answer: "selzhuk", isCorrect: false},
            ]
        }, {
            questionText: "Kazak handygyn negizin kalagan?",
            answers: [
                {answer: "Kerey & Janibek", isCorrect: true},
                {answer: "Abylay", isCorrect: false},
                {answer: "Tauke", isCorrect: false},
                {answer: "Tauekel", isCorrect: false},
            ]
        }
    ]
]


