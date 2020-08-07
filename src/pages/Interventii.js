import React from 'react';
import './scss/interventii.scss';
import Video from './images/file.mp4';

class Interventii extends React.Component {
  render() {
    return (
      <div>
        <div className='main-container interventii-container'>
          <h2 className='interventii-title'>Cel mai avansat laser dentar dioda din lume</h2>
          <div className="main-row">
            <div className="col-div col-img">
              <img className='img-half' src='./images/aparat.png' alt=""/>
            </div>
            <div className="col-div col-text">
              <p>Crown Medical Center pune la dispozitia pacientilor un tratament inovator,
              ultramodern, de inalta calitate si in acelasi timp foarte prietenos.
              Clinica noastra a incorporat cu succes tratamentul cu ajutorul laserului
              in mai multe subdiviziuni ale stomatologiei cum ar fi endodontia, parodontologia,
              implantologia si estetica dentara.</p>
              <p>Consulta specialistii nostri in tratamente laser</p>
              <a className='global-cta' href="/contact">APASA AICI</a>
            </div>
          </div><br /><br />
          <h2 className='interventii-title'>Smart, Accurate & Reliable</h2>
          <div className="main-row2">
            <div className="col-div col-img">
            <video controls poster='./images/aparat2.png' src={Video} type="video/mp4"></video>
            </div>
            <div className="col-div col-text">
              <p>Avantajele tratamentului cu laser in raport cu tratamentele clasice sunt urmatoarele : </p>
              <ul>
                <li><i className='fas'>&#xf101;</i>sangerare minima spre deloc</li>
                <li><i className='fas'>&#xf101;</i>fara durere nefiind necesara anestezia</li>
                <li><i className='fas'>&#xf101;</i>operare simpla, fara zgomot, fara vibratii</li>
                <li><i className='fas'>&#xf101;</i>operare sigura in jurul implantelor </li>
                <li><i className='fas'>&#xf101;</i>probabilitate foarte scazuta de infectii avand in vedere efectul de sterilizare al fasciculului Laser</li>
                <li><i className='fas'>&#xf101;</i>vindecare mult mai rapida postoperator</li>
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
              al stomatologiei moderne și a adus o noua abordare în domeniul proteticii,
              rezolvând cazuri clinice din ce în ce mai diverse și dificile.<br/>
              In cadrul clinicii noastre interventiile chirurgicale sunt executate de medici
              specialisti, cu experienta de peste 20 de ani pregatiti sa faca fata celor mai
              dificile cazuri si se folosesc materiale biocompatibile de ultima ora care se
              integrează excelent în organismul pacientului.</p>
              <p>Specialistii nostri in implantologie iti stau la dizpozitie </p>
              <a className='global-cta' href="/contact">APASA AICI</a>
            </div>
          </div><br /><br />
          <h2 className='interventii-title'>Fatete Dentare</h2>
          <div className="main-row2">
            <div className="col-div col-img">
              <img className='img-half' src='./images/zambet.png' alt=""/>
              <ul>
                <li><i className='fas'>&#xf101;</i>Vrei sa ai un zambet de star de cinema?</li>
                <li><i className='fas'>&#xf101;</i>Vrei sa elimini o data pentru totdeauna vizitele la stomatolog pentru albiri?</li>
                <li><i className='fas'>&#xf101;</i>Vrei un zambet perfect fara sa afectezi structura dintilor tai ?</li>
              </ul>
            </div>
            <div className="col-div col-text">
              <p>Fatetele reprezinta o metoda rapida, confortabila, minim invaziva cu un rezultat uimitor .
              Ele mascheaza micile imperfectiuni ale dintilor cum ar fi procese carioase plombate, coloratii,
              muchii fisurate si de asemenea abraziunea fiziologica a dintilor.<br />
              Fiind foarte subtiri nu este necesara decat o slefuire superficiala a dintelui
              in acest fel conservandu-se foarte mult din substanta acestuia.<br />
              Exista, de asemenea, situatii cand pacientii doresc ca dintii lor sa ramana
              integri iar atunci se pot folosi fatetele NO PREP ( no preparation ) <br /><br />Clinica noastra dispune,
              de asemenea, de un laborator performant care foloseste inclusiv tehnici de scanare 3D
              pentru ca d-voastra sa beneficiati de cele mai bune rezultate. </p>
              <p>Programeaza-te cu incredere la unul dintre specialistii nostri </p>
              <a className='global-cta' href="/contact">APASA AICI</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Interventii;
