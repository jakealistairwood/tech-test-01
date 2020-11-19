import React from 'react';
import { Router } from '@reach/router';
import FootballChallenge from '../components/FootballChallenge';
import QuizChallenge from '../components/QuizChallenge';

const routes = () => {
    return (
        <Router>
            <FootballChallenge path="football-challenge" />
            <QuizChallenge path="quiz-challenge" />
        </Router>
    )
}

export default routes;
