import React from 'react';
import {Modal} from 'react-bootstrap';
import Logo from '../components/images/logo.png';
import {Link} from 'react-router-dom';



class ModalMain extends React.Component {
    constructor() {
        super();
        this.state={
            show:true
        }
    }
    handleModal() {
        this.setState({
            show: !this.state.show
        });

    }

    render() {
        return (

                <Modal show={this.state.show} onHide={()=>this.handleModal()}>
                    <Modal.Header closeButton>
                    <img className="logo-img" src={Logo} alt="logo" />
                    </Modal.Header>
                    <Modal.Body>

                    <ul>
                        <li><i className='fas'>&#xf101;</i>Protejați-vă atât pe dumneavoastră, cât și pe ceilalți, informându-vă și luând măsurile necesare.</li>
                        <li><i className='fas'>&#xf101;</i>Urmați sfaturile autorităților locale din domeniul sănătății.</li>
                        <li><i className='fas'>&#xf101;</i>Pentru a vă informa în legătură cu măsurile de siguranță pe care Crown Medical le pune la dispoziția dumneavoastră,
                        accesați lincul de mai&nbsp;jos:</li>
                    </ul>
                    <Link onClick={()=>this.handleModal()} className='global-cta' to="/covid-info">APASĂ AICI</Link>
                    </Modal.Body>

                </Modal>

        );
    }
}

export default ModalMain;
