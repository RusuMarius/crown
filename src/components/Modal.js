import React from 'react';
import {Modal} from 'react-bootstrap';
import Logo from '../components/images/logo.png';



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
                    <Modal.Body><p>Hi, this is the Covid modal <br /> It will be automatically opened at each reload of&nbsp;page <br />
                    wear a mask, show that you care!</p>
                    </Modal.Body>

                </Modal>

        );
    }
}

export default ModalMain;
