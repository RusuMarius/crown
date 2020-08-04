import React from 'react';
import {Modal} from 'react-bootstrap';
import Logo from '../components/images/logo.png';


let lastShown = parseInt(localStorage.getItem('.modal-wrapper')); //EDIT: Added parseInt
let maxTime = 5000; //ms (1 second)
//if lastShown is undefined or enough time has passed
if(!lastShown | lastShown + maxTime < Date.now()) {

  //show it
  //store the time to check next time the page is loaded
  localStorage.setItem('.modal-wrapper', Date.now());
}
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
        })
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
