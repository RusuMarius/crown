import React from 'react';
import './scss/interventii.scss';
import Video from './images/file.mp4';
import {Helmet} from 'react-helmet';

class Interventii extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Interventii | Crown Medical Center</title>
          <meta name="description" content="Estetica dentara, Implantologie, Parodontologie" />
        </Helmet>

        <div className='main-container interventii-container'>
          <h2 className='interventii-title'>Cel mai avansat laser dentar diodă din lume</h2>
          <div className="main-row">
            <div className="col-div col-img">
              <img className='img-half' src='./images/aparat.png' alt=""/>
            </div>
            <div className="col-div col-text">
              <p>Crown Medical Center pune la dispoziția pacienților un tratament inovator,
              ultramodern, de înaltă calitate și în același timp foarte prietenos.
              Clinica noastră a incorporat cu succes tratamentul cu ajutorul laserului
              în mai multe subdiviziuni ale stomatologiei cum ar fi endodontia, parodontologia,
              implantologia și estetica dentară.</p>
              <p>Consultă specialiștii noștri în tratamente laser</p>
              <a className='global-cta' href="/contact">APASĂ AICI</a>
            </div>
          </div><br /><br />
          <h2 className='interventii-title'>Inteligent, Precis și De Încredere</h2>
          <div className="main-row2">
            <div className="col-div col-img">
            <video controls poster='./images/aparat2.png' src={Video} type="video/mp4"></video>
            </div>
            <div className="col-div col-text">
              <p>Avantajele tratamentului cu laser în raport cu tratamentele clasice sunt următoarele : </p>
              <ul>
                <li><i className='fas'>&#xf101;</i>sângerare minimă spre deloc</li>
                <li><i className='fas'>&#xf101;</i>fără durere nefiind necesară anestezia</li>
                <li><i className='fas'>&#xf101;</i>operare simplă, fară zgomot, fară vibrații</li>
                <li><i className='fas'>&#xf101;</i>operare sigură în jurul implantelor</li>
                <li><i className='fas'>&#xf101;</i>probabilitate foarte scăzută de infecții având în vedere efectul de sterilizare al fasciculului Laser</li>
                <li><i className='fas'>&#xf101;</i>vindecare mult mai rapidă postoperator</li>
                <li><i className='fas'>&#xf101;</i>cu efect antidurere ceea ce duce la anularea disconfortului postoperator</li>
              </ul>
            </div>
          </div><br /><br />
          <h2 className='interventii-title'>Implantologie</h2>
          <div className="main-row">
            <div className="col-div col-img">
              <img className='img-half' src='./images/filet.png' alt=""/>
            </div>
            <div className="col-div col-text">
              <p>Tratamentul cu implanturi dentare a reprezentat un progres extraordinar
              al stomatologiei moderne și a adus o nouă abordare în domeniul proteticii,
              rezolvând cazuri clinice din ce în ce mai diverse și dificile.

              În cadrul clinicii noastre intervențiile chirurgicale sunt executate de medici
              specialiști, cu experiență de peste 20 de ani pregătiți să facă față celor mai
              dificile cazuri și se folosesc materiale biocompatibile de ultimă oră care se
              integrează excelent în organismul pacientului.</p>
              <p>Specialiștii noștri în implantologie iți stau la dizpozitie </p>
              <a className='global-cta' href="/contact">APASĂ AICI</a>
            </div>
          </div><br /><br />
          <h2 className='interventii-title'>Fațete Dentare</h2>
          <div className="main-row2">
            <div className="col-div col-img">
              <img className='img-half' src='./images/zambet.png' alt=""/>
              <ul>
                <li><i className='fas'>&#xf101;</i>Vrei să ai un zâmbet de star de cinema?</li>
                <li><i className='fas'>&#xf101;</i>Vrei să elimini o dată pentru totdeauna vizitele la stomatolog pentru albiri?</li>
                <li><i className='fas'>&#xf101;</i>Vrei un zâmbet perfect fară să afectezi structura dinților tăi ?</li>
              </ul>
            </div>
            <div className="col-div col-text">
              <p>Fațetele reprezintă o metodă rapidă, confortabilă, minim invazivă cu un rezultat uimitor .
              Ele maschează micile imperfecțiuni ale dinților cum ar fi procese carioase plombate, colorații,
              muchii fisurate și de asemenea abraziunea fiziologică a dinților.<br />
              Fiind foarte subțiri nu este necesară decât o șlefuire superficială a dintelui
              în acest fel conservandu-se foarte mult din substanța acestuia.<br />
              Există, de asemenea, situații când pacienții doresc ca dinții lor să rămână
              integri iar atunci se pot folosi fațetele NO PREP ( no preparation ) <br /><br />Clinica noastră dispune,
              de asemenea, de un laborator performant care folosește inclusiv tehnici de scanare 3D
              pentru ca d-voastră să beneficiați de cele mai bune rezultate. </p>
              <p>Programează-te cu încredere la unul dintre specialiștii noștri</p>
              <a className='global-cta' href="/contact">APASĂ AICI</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Interventii;
