import React from 'react';
import {Link} from 'react-router-dom';
import Fb from './images/fb-logo.png';
import In from './images/in-logo.png';

class Footer extends React.Component {
    render() {
        return (
            <div className='footer'>
                <div className='main-container'>
                    <div className="footer-box">
                        <div className="footer-item contact-links">
                            <h2>Contact</h2>
                            <a href='mailto:rusu.marius1207@gmail.com'>Email Adress: rusu.marius1207@gmail.com</a>
                            <p>phone: <a href='tel:0771583863'>0771583863</a></p>
                        </div>
                        <div className="footer-item links-box">
                            <h2>Links</h2>
                            <Link to="/admin/about" onClick={this.closeNav}>About</Link>
                            <Link to="/admin/products" onClick={this.closeNav}>Products</Link>
                            <Link to="/admin/contact" onClick={this.closeNav}>Contact</Link>
                        </div>
                        <div className="footer-item media">
                            <h2>Media</h2>
                            <div className="media-items">
                            <div className="media-item facebook">
                                <a href="https://www.facebook.com/crownmedicalcenter" target="_blank" rel="noopener noreferrer">
                                <img src={Fb} alt="fb"/>
                                </a>
                            </div>
                            <div className="media-item linkedin">
                                <a href="https://www.linkedin.com/in/marius-rusu-505a0812b/" target="_blank" rel="noopener noreferrer">
                                <img src={In} alt="in"/>
                                </a>
                            </div>
                            </div>
                        </div>
                    </div>
                    <p className='bussiness'>© 2019 by Crown Medical Center</p>
                </div>
            </div>
        );
    }
}

export default Footer;
