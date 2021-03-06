import React from 'react';
import './App.scss';
import './pages/scss/slider.scss'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Oferte from './pages/Oferte';
import Homepage from './pages/Homepage';
import Interventii from './pages/Interventii';
import GhidMedical from './pages/GhidMedical';
import ScrollToTop from './components/ScrollToTop';
import ModalMain from './components/Modal';
import Error from './components/Error';
import Covidpage from './pages/Covidpage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Router>
        <div className='main-body'>
        <Navbar />
          <div className='main-path'>
          <ModalMain />
            <Switch>
              <Route path="/" component={Homepage} exact />
              <Route path='/echipa' component={Team}/>
              <Route path="/oferte" component={Oferte}/>
              <Route path="/interventii" component={Interventii}/>
              <Route path="/ghid-medical" component={GhidMedical}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/covid-info" component={Covidpage}/>
              <Route component={Error}/>
            </Switch>
          </div>
          <ScrollToTop />
          <Footer />
        </div>
      </Router>

    </div>
  );
}

export default App;
