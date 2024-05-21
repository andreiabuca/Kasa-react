import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import FicheLogement from './Pages/FicheLogement/FicheLogement';
import AproposPage from './Pages/AproposPage/AproposPage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';

const AppRouter = () => {
    return (
        <main>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/fichelogement/:id' element={<FicheLogement/>}/>
                <Route path='/apropos' element={<AproposPage/>}/>
                <Route path= '*' element={<NotFoundPage/>}/>
            </Routes>
        </main>
    );
};

export default AppRouter;