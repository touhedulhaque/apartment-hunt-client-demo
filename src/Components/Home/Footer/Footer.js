import React from 'react';
import './Footer.css';
import location from '../../../images/logos/map-marker-alt-solid 1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <section class="footer row">
            <div class="col-md-2">
                <img src={location} class="lctn" alt=""/>
                <p class="footerp"> H#340 (4th Floor), Road #24, New DOHS, Mohakhali, Dhaka, Bangladesh Phone: 018XXXXXXXX E-mail: info@company.com</p>
            </div>
            <div class="col-md-2 company">
                    <h4>Company</h4>
                    <p>About</p>
                    <p>Site MAP</p>
                    <p>Support Center</p>
                    <p>Terms & Conditions</p>
            </div>
            <div class="col-md-2 links">
                    <h4>Quick Links</h4>
                    <p>Rentals</p>
                    <p>Sales</p>
                    <p>Terms & Conditions</p>
                    <p>Contact</p>
            </div>
            <div class="col-md-2 about">
                    <h4>About Us</h4>
                    <p>We are the top real estate agency in Sydney, with agents available to answer any question 24/7.</p>
                    <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
            </div>
        </section>
    );
};

export default Footer;