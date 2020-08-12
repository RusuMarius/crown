import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {Helmet} from 'react-helmet';

class GhidMedical extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Ghid Medical | Crown Medical Center</title>
          <meta name="description" content="Estetica dentara, Implantologie, Parodontologie" />
        </Helmet>

        <div className='main-container'>
          <Tabs className='tabs-all'>
            <TabList className='tabs-field'>
              <Tab><div className='tab-cta'>Parodontoză</div></Tab>
              <Tab><div className='tab-cta'>Efecte adverse</div></Tab>
              <Tab><div className='tab-cta'>Abcesul dentar</div></Tab>
            </TabList>

            <TabPanel>


              <div className="two-col">
                <div className="simple-col">
                  <h2>Parodontoză</h2>
                  <p>Parodontita marginală profundă, cunoscută popular sub numele de parodontoză este o afecțiune inflamatorie a aparatului de susținere a dintelui,
                  numit parodonțiu marginal. Parodontoza afectează atât gingia cât și structurile profunde ale parodonțiului : ligamentele parodontale și osul alveolar.
                  Parodontoza este o boală distructivă care cauzează pierderea atașamentului gingival urmată de resorbția progresivă a ligamentelor periodontale și a osului alveolar.
                  Netratata, parodontoza vă conduce la apariția mobilității dentare și pierderea ulterioară a dinților.
                  La fel ca toate bolile parodontale, parodontoza este cauzată de bacteriile și microorganismele din placa dentară.
                  Majoritatea specialiștilor sunt de acord că parodontoza este întotdeauna precedată de gingivită.
                  </p>
                </div>
                <div className="simple-col">
                  <img src="./images/paro1.png" alt="dsgdfs"/>
                </div>
              </div>
              <div className="two-col">
                <div className="simple-col">
                  <h2>Simptome și semne</h2>
                  <p>
                  În fazele inițiale, parodontoza are foarte puține simptome; de multe ori, boala a progresat semnificativ înainte ca pacienții să se prezinte la medic.
Deoarece gingivita precede întotdeauna parodontoza, semnele clinice ale gingivitei vor fi primele care vor apărea.
Simptomele și semnele clinice ale parodontozei pot include :
                  </p>
                    <ul>
                      <li><i className='fas'>&#xf101;</i>Gingii roșii și tumefiate care pot recidiva periodic.</li>
                      <li><i className='fas'>&#xf101;</i>Sângerare gingivală care apare după periajul dentar, folosirea aței dentare sau mușcarea unui aliment dur.<br />
                      Sângerarea gingivală apare și în cazul gingivitei. Diferența este că, în cazul parodontozei atașamentul gingival este distrus.</li>
                      <li><i className='fas'>&#xf101;</i>Pacienții pot scuipa sânge în urma periajului dentar.</li>
                      <li><i className='fas'>&#xf101;</i>Retracție gingivală, având ca rezultat "alungirea dinților".</li>
                      <li><i className='fas'>&#xf101;</i>Halitoză sau respirație urat mirositoare și un gust metalic în cavitatea bucală</li>
                      <li><i className='fas'>&#xf101;</i>Apariția pungilor parodontale. Pungile parodontale sunt zone situate sub gingie unde atașamentul gingival a fost distrus.
                      Aceste spații pot fi ocupate de bacterii sau celule moarte favorizând agravarea bolii</li>
                    </ul>

                </div>
                <div className="simple-col">
                  <img src="./images/paro2.png" alt="dsgdfs"/>
                </div>
              </div>
              <div className="two-col">
                <div className="simple-col">
                <h2>Stabilirea diagnosticului</h2>
                <p>Diagnosticul de parodontoză se stabilește în urma examinării clinice și a evaluării radiografiilor dentare.
                Examinarea clinică constă în inspecția și palparea gingiei din jurul dinților cu ajutorul sondei dentare.
                Radiografiile vor stabili cantitatea de os pierdută din jurul fiecărui dinte<br />

                <span><strong>~&nbsp;Specialistii nostri te ajuta sa vindeci parodontoza&nbsp;~</strong></span></p>
                </div>
              </div>
              <div className="two-col">
                <div className="simple-col">
                  <p className='global-text-blue'><strong>VREI SĂ SCAPI DE ACEASTĂ AFECȚIUNE?</strong></p>
                  <a className='global-cta' href="/contact">APASĂ AICI</a>
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="two-col">
                <div className="simple-col">
                  <h2>Efectele adverse ale medicamentelor
                  asupra cavitații orale</h2>
                  <p>O mare parte dintre medicamentele existente pe piață, inclusiv suplimentele,  pot avea efecte neplăcute asupra cavitații bucale.</p>
                </div>
                <div className="simple-col">
                  <img src="./images/simptome1.png" alt="dsgdfs"/>
                </div>
              </div>
              <div className="two-col">
                <div className="full-col">
                  <h2>Cele mai frecvente efecte neplăcute ale medicamentelor asupa cavității orale:</h2>
                  <ul>
                    <li><i className='fas'>&#xf101;</i>xerostomia sau senzaţia de uscăciune a gurii</li>
                    <li><i className='fas'>&#xf101;</i>sângerare gingivală</li>
                    <li><i className='fas'>&#xf101;</i>alterarea simţului gustativ</li>
                    <li><i className='fas'>&#xf101;</i>inflamaţie, ulceraţii sau modificări de culoare la nivelul ţesuturilor cavităţii orale</li>
                    <li><i className='fas'>&#xf101;</i>coloraţia dinţilor</li>
                    <li><i className='fas'>&#xf101;</i>respiraţie urât mirositoare sau halitoza</li>
                    <li><i className='fas'>&#xf101;</i>procese carioase</li>
                  </ul>
                  <h2>Medicamente care pot produce xerostomie:</h2>
                  <p>Există sute de tipuri de medicamente care pot avea ca efect advers xerostomia. Saliva ajuta la igienizarea cavităţii orale,
                  însă atunci când fluxul salivar scade, gura se usucă şi favorizează infecţiile şi apariţia cariei dentare. Aceste medicamente sunt cele de tip:</p>
                  <ul>
                    <li><i className='fas'>&#xf101;</i>antihistaminice</li>
                    <li><i className='fas'>&#xf101;</i>antidepresive</li>
                    <li><i className='fas'>&#xf101;</i>antihipertensive</li>
                    <li><i className='fas'>&#xf101;</i>sedative</li>
                    <li><i className='fas'>&#xf101;</i>medicaţia bolii Parkinson</li>
                  </ul>
                  <h2>Medicamente care pot avea ca efect advers sângerarea gingivală:</h2>
                  <p>Asipirina şi anticoagulantele sunt medicamente care previn formarea chegurilor de sânge. Ele sunt utilizate pentru prevenirea atacului de cord şi accidentului vascular cerebral, însă pot avea ca efect advers sângerarea gingivală şi si sângerări în cantităţi mari, mai ales în timpul operaţiilor chirurgicale.
                  De aceea, atunci când urmează o intervenţie chirurgicală, se procedează prin întreruperea tratamentelor anticoagulante pe perioadă scurtă de timp.</p>
                  <h2>Medicamente care afectează simţul gustativ:</h2>
                  <p>Unele medicamente au gust metalic şi altele vă pot afecta simţul gustativ atunci când le luaţi:</p>
                  <ul>
                    <li><i className='fas'>&#xf101;</i>medicamente pentru tratarea bolilor cardiovasculare (beta blocantele şi blocnatele canalelor de calciu)</li>
                    <li><i className='fas'>&#xf101;</i>stimulante ale sistemului nervos central</li>
                    <li><i className='fas'>&#xf101;</i>metronidazolul – antibiotic</li>
                  </ul>
                  <h2>Medicamente care pot afecta ţesuturile cavităţii orale:</h2>
                  <p>Pot produce uleraţii şi inflamaţii ale ţesuturilor moi următoarele medicamente:</p>
                  <ul>
                    <li><i className='fas'>&#xf101;</i>imunosupresive</li>
                    <li><i className='fas'>&#xf101;</i>contraceptive orale</li>
                    <li><i className='fas'>&#xf101;</i>pentru tensiunea arterială</li>
                  </ul>
                  <h2>Medicamente care cresc riscul apariţiei riscului la carie:</h2>
                  <ul>
                    <li><i className='fas'>&#xf101;</i>medicamentele adresate copiilor ce conţin zahăr în cantitate ridicată</li>
                    <li><i className='fas'>&#xf101;</i>tabletele masticabile cu vitaminte</li>
                    <li><i className='fas'>&#xf101;</i>dropsurile</li>
                  </ul>
                  <h2>Medicamente care pot schimba culoare dinţilor şi gingiilor:</h2>
                  <ul>
                    <li><i className='fas'>&#xf101;</i>minociclina – utilizată pentru tratarea acneei</li>
                    <li><i className='fas'>&#xf101;</i>clorhexidina</li>
                  </ul>
                  <p>Este important să cunoaşteţi efectele adverse ale medicamentelor, cititind cu atenţie prospectul acestora, pentru a vă putea feri de eventualele probleme.<br />
                  Specialistii nostrii va pot informa cu precizie vis a vis de orice modificare aparuta in cavitatea bucala !</p>
                </div>
              </div>
              <div className="two-col">
                <div className="simple-col">
                  <p className='global-text-blue'><strong>VREI SA FII CONSULTAT DE UNII
                  DINTRE SPECIALISTII NOSTRI ?</strong></p>
                  <a className='global-cta' href="/contact">APASĂ AICI</a>
                </div>
              </div>
            </TabPanel>

            <TabPanel>

              <div className="two-col">
                <div className="simple-col">
                  <h2>Efectele adverse ale medicamentelor
                  asupra cavitații orale</h2>
                  <p>Abcesul dentar este una din cele mai frecvente urgențe stomatologice. Abcesul dentar este o infecție bacteriană care se manifestă prin apariția unei
                  colecții de puroi la vârful sau în partea laterală a unui dinte.
                  Abcesele dentare se pot forma în diverse zone ale cavitații bucale; netratate, acestea pot difuza în zonele și țesuturile învecinate
                  provocând uneori infecții extrem de grave.
                  Din acest motiv, pacienții care observă apariția unui abces dentar trebuie să consulte cât mai repede un medic stomatolog.</p>
                </div>
                <div className="simple-col">
                  <h2>Abces periodontal</h2>
                  <img src="./images/abces1.png" alt="dsgdfs"/>
                </div>
              </div>

              <div className="two-col">
                <div className="simple-col">
                  <h2>Simptome si semne</h2>
                  <p>Abcesele dentare se pot forma extrem de rapid. Cel mai neplăcut simptom pentru pacienți este durerea intensă care poate difuza și în zonele
                  învecinate: cap, gât, urechi, obraz. Totuși, nu toate abcesele dentare evoluează cu dureri. Uneori, pacienții nu experimentează
                  dureri (sau acestea sunt de intensitate redusă) fiind vizibilă doar colecția purulenta care apare ca o umflatură în dreptul dintelui afectat.</p>
                  <h2>Ce alte simptome și semne pot apărea ?</h2>
                  <ul>
                    <li><i className='fas'>&#xf101;</i>dureri pulsatile la nivelul dintelui afectat care cresc treptat în intensitate</li>
                    <li><i className='fas'>&#xf101;</i>dureri la nivelul gâtului, urechii sau osului maxilar de aceeași parte cu dintele afectat</li>
                    <li><i className='fas'>&#xf101;</i>durerile cresc în intensitate:
                      <ul>
                        <li><i className='fas'>&#xf105;</i>în timpul masticației</li>
                        <li><i className='fas'>&#xf105;</i>în poziția culcat</li>
                        <li><i className='fas'>&#xf105;</i>la atingerea dintelui</li>
                        <li><i className='fas'>&#xf105;</i>la cald</li>
                      </ul>
                    </li>
                    <li><i className='fas'>&#xf101;</i>respirație urât mirositoare și/sau un gust neplăcut în gură</li>
                    <li><i className='fas'>&#xf101;</i>dificultăți la masticație și/sau înghițirea alimentelor</li>
                    <li><i className='fas'>&#xf101;</i>apariția unei colecții de puroi sub forma unei umflături (sau tumefieri) în dreptul dintelui afectat (fie spre obraz fie spre limbă sau palat)</li>
                    <li><i className='fas'>&#xf101;</i>gingia la acest nivel este roșie și tumefiată</li>
                    <li><i className='fas'>&#xf101;</i>dintele își poate schimbă culoarea și poate deveni mobil</li>
                    <li><i className='fas'>&#xf101;</i>în cazul abceselor mai mari, tumefierea obrazului sau feței în partea corespunzătoare acestuia</li>
                    <li><i className='fas'>&#xf101;</i>dacă abcesul a difuzat în zonele învecinate, pacientul poate dezvolta febră, frisoane, dureri de cap și stare generală alterată</li>
                  </ul>
                  <p>Abcesul este rezultatul neglijării igienei și a neglijării vizitelor periodice la dentist. Dinții pot fi afectați foarte grav de un astfel de abces netratat,
                  iar antibioticele nu sunt decât o soluție temporară și numai în situația în care pacientul nu poate ajunge în cabinetul medical.</p>
                </div>
                <div className="simple-col">
                  <h2>Abces gingival</h2>
                  <img src="./images/abces2.png" alt="dsgdfs"/>
                  <h2>Abces periapical</h2>
                  <img src="./images/abces3.png" alt="dsgdfs"/>
                </div>
              </div>

              <div className="two-col">
                <div className="simple-col">
                  <p className='global-text-blue'>
                    <strong>~       Echipa noastră de specialiști te ajută să tratezi cu succes abcesul dentar ~</strong> <br /><br />
                    <strong>Vrei să scapi de această afecțiune?</strong>
                  </p>
                  <a className='global-cta' href="/contact">APASĂ AICI</a>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default GhidMedical;
