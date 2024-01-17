import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HeaderSection from './components/HeaderSection';
import HomeContent from './components/HomeContent';
import Footer from './components/Footer';
import SignUp from './components/SignUp/Signup';

const App = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <div className="min-h-screen pt-[5rem]">
                    <Routes>
                        <Route path="/" element={
                            <div>
                                <HeaderSection />
                                <HomeContent />
                            </div>
                        } />
                        <Route path="/inscription" element={<SignUp />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
