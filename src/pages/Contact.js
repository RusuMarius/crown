import React from 'react';
import './scss/contact.scss';
import Form from './../components/Form';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps'


function Map() {
    return (
        <GoogleMap
        defaultZoom={16}
        defaultCenter={{lat: 44.415707636110376, lng: 26.06012537973909}} >
            <Marker position={{lat: 44.415707636110376, lng: 26.06012537973909}} >
                <InfoWindow><div className='info-text'>Crown Medical Center</div></InfoWindow>
            </Marker>


        </GoogleMap>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

class Contact extends React.Component {
    render() {
        return (
            <div>
                <div className='main-container contact'>
                    <img className='contact-bg' src="./images/coffee2.png" alt="coffee"/>
                    <div className="contact-way">
                        <Form />
                        <div className='map-box'>
                            <WrappedMap
                                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCYX7sLPqx_AFGlZ2wcOCXPmmmlQjXSEII`}
                                loadingElement={<div style={{ height: `100%` }} />}
                                containerElement={<div style={{ height: `400px` }} />}
                                mapElement={<div style={{ height: `100%` }} />}
                            />
                            <div className="contact-detail">
                                <p><i class="fa fa-phone" aria-hidden="true"></i> Telefon: <a href="tel:021.423.35.95">021.423.35.95</a></p>
                                <p><i class="fa fa-envelope" aria-hidden="true"></i> Email: <a href="mailto:custom_art_concept@yahoo.com">custom_art_concept@yahoo.com</a></p>
                                <p><i class="fa fa-address-book" aria-hidden="true"></i> Adresa: str. Petre Ispirescu, nr. 89-91</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
