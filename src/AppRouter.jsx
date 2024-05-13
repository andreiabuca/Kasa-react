import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import FicheLogement from './Pages/FicheLogement';
import AproposPage from './Pages/AproposPage';
import NotFoundPage from './Pages/NotFoundPage';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/fichelogement' element={<FicheLogement/>}/>
                <Route path='/apropos' element={<AproposPage/>}/>
                <Route path= '*' element={<NotFoundPage/>}/>
            </Routes>
        </Router>
    );
};

export default AppRouter;