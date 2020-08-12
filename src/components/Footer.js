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
                            <a href='mailto:custom_art_concept@yahoo.com'>Adresă de Email: custom_art_concept@yahoo.com</a>
                            <p>Telefon: <a href='tel:021.423.35.95'>021.423.35.95</a></p>
                            <p>Adresă: str. Petre Ispirescu, nr. 89-91</p>
                        </div>
                        <div className="footer-item links-box">
                            <h2>Pagini</h2>
                            <Link to="/echipa">Echipă</Link>
                            <Link to="/oferte">Oferte</Link>
                            <Link to="/interventii">Intervenții</Link>
                            <Link to="/ghid-medical">Ghid Medical</Link>
                            <Link to="/contact">Contact</Link>
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
