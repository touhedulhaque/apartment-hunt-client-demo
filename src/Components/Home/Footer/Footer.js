import React from 'react';
import './Footer.css';
import location from '../../../images/logos/map-marker-alt-solid 1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <section className="footer mt-5 p-3">
            <div className="container mt-5">
                <div className="row align-items-baseline">
                    <div className="col-md-4 text-center">
                        <img src={location} className="mt-5 ml-2" height="40px" alt="" /> <br />
                        <br />
                        <p> H#340 (4th Floor), Road #24, New DOHS, Mohakhali, Dhaka, Bangladesh Phone: 018XXXXXXXX E-mail: info@company.com</p>
                    </div>

                    <div className="col-md-2 col-sm-6 p-5">
                        <h4>Company</h4>
                        <p>About</p>
                        <p>Site MAP</p>
                        <p>Support Center</p>
                        <p>Terms & Conditions</p>
                    </div>
                    <div class="col-md-3 p-5">
                        <h4>Quick Links</h4>
                        <p>Rentals</p>
                        <p>Sales</p>
                        <p>Terms & Conditions</p>
                        <p>Contact</p>
                    </div>
                    <div class="col-md-3 p-5">
                        <h4>About Us</h4>
                        <p>We are the top real estate agency in Sydney, with agents available to answer any question 24/7.</p>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;