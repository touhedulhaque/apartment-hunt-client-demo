import React from 'react';
import NavbarAh from '../../Home/NavbarAh/NavbarAh';
import DetailsMain from '../DetailsMain/DetailsMain';
import Pics from '../Pics/Pics';


const Details = () => {
    return (
        <div className="dtls">
            <NavbarAh></NavbarAh>
            <DetailsMain></DetailsMain>
            <Pics></Pics>
        </div>
    );
};

export default Details;