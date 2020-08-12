import React from 'react';
import {NavLink} from 'react-router-dom';
import Logo from '../components/images/logo.png';

class Navbar extends React.Component {
    constructor() {
        super()
        this.state = {
            scrolled: false,
            isOpen:false,
            isHovered: false
        }
    }

    handleBurger=()=>{
        this.setState({
            isOpen:!this.state.isOpen,
        })
    }

    closeNav=()=>{
        this.setState({
            isOpen:false
        })
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 117;

            if(isTop !== true) {
                this.setState({ scrolled: true })
            } else {
                this.setState({ scrolled: false })
            }
        })
    }

    componentWillUnmount() {
        window.removeEventListener('scroll')
    }

    render() {
        return (

            <div className={this.state.scrolled ? 'nav scrolled' : 'nav'}>
                <div className="main-container">
                <div className='logo-burger'>
                    <NavLink className="logo" to="/" onClick={this.closeNav}><img className="logo-img" src={Logo} alt="logo" /></NavLink>
                    <div className="burger" onClick={this.handleBurger}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    </div>

                </div>

                <div className={this.state.isOpen ? "showNav menu-nav" : "menu-nav"}>
                    <NavLink to="/echipa" onClick={this.closeNav}>Echipă</NavLink>
                    <NavLink to="/oferte" onClick={this.closeNav}>Oferte</NavLink>
                    <NavLink to="/interventii" onClick={this.closeNav}>Intervenții</NavLink>
                    <NavLink to="/ghid-medical" onClick={this.closeNav}>Ghid Medical</NavLink>
                    <NavLink to="/contact" onClick={this.closeNav}>Contact</NavLink>
                </div>
                </div>
          </div>
        );
    }
}

export default Navbar;
