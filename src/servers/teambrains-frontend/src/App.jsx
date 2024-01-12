import React from 'react';
import NavBar from './components/NavBar';
import HeaderSection from './components/HeaderSection';
import HomeContent from './components/HomeContent';
import Footer from './components/Footer';

const App = () => {
    return (
        <div>
            <NavBar />
            <HeaderSection/>
            <HomeContent/>
            <Footer/>
        </div>
    );
};

export default App;
