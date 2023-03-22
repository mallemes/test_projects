import React from 'react';
import Quiz from "./components/Quiz";
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AddQuiz from "./components/AddQuiz";
import Index from "./components/Index";

const QuizApp = () => {

    return (
        <BrowserRouter>
            <div>
                <Navbar/>
                <Routes>
                    <Route element={<Index/>} path={'/'}/>
                    <Route element={<Quiz/>} path={'/quiz/:quizId'}/>
                    <Route element={<AddQuiz/>} path={'/add_quiz'}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default QuizApp;