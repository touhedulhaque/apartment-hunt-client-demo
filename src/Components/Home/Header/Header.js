import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import NavbarAh from '../NavbarAh/NavbarAh';


const Header = () => {
    return (
        <div>
            <NavbarAh></NavbarAh>
            <div className="bg-head">
                <div className="head">
                    <HeaderMain></HeaderMain>
                </div>
            </div>
        </div>
    );
};

export default Header;