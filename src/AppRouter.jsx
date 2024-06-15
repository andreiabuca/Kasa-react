import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import ApartmentPage from './Pages/ApartmentPage/ApartmentPage';
import AboutPage from './Pages/AboutPage/AboutPage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';

const AppRouter = () => {
    return (
        <main>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/apartmentpage/:id' element={<ApartmentPage/>}/>
                <Route path='/aboutpage' element={<AboutPage/>}/>
                <Route path= '*' element={<NotFoundPage/>}/>
            </Routes>
        </main>
    );
};

export default AppRouter;