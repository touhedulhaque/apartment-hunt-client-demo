import React from 'react';
import Apartments from '../Apartments/Apartments';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Apartments></Apartments>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;