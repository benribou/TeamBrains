import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HeaderSection from './components/HeaderSection';
import HomeContent from './components/HomeContent';
import Footer from './components/Footer';

const App = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <Routes>
                    <Route path="/" element={
                        <div>
                            <HeaderSection />
                            <HomeContent />
                        </div>
                    } />
                    {/* Ajoutez d'autres routes ici si nécessaire */}
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
};

export default App;
