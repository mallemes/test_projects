import React from 'react';
import Quiz from "./components/Quiz";
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AddQuiz from "./components/AddQuiz";
import Index from "./components/Index";
import PageNotFount from "./components/PageNotFount";
import Register from "./components/Register";
import Profile from "./components/Profile";
import About from "./components/About";
import {AuthProvider} from "./components/Context/AuthContext";
import AuthRequire from "./components/HOC/AuthRequire";

const QuizApp = () => {

    return (
        <BrowserRouter>
            <AuthProvider>
                <Navbar/>
                <Routes>
                    <Route element={<Index/>} path={'/'}/>
                    <Route element={<Register/>} path={'/register'}/>
                    <Route element={<About/>} path={'/about'}/>
                    <Route element={<Quiz/>} path={'/quiz/:quizId'}/>
                    <Route element={<PageNotFount/>} path={'*'}/>
                    <Route element={<AuthRequire><AddQuiz/></AuthRequire>} path={'/add_quiz'}/>
                    <Route element={<AuthRequire><Profile/></AuthRequire>} path={'/profile'}/>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
};

export default QuizApp;