import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class GhidMedical extends React.Component {
  render() {
    return (
      <div>
        <div className='main-container'>
          <Tabs className='tabs-all'>
            <TabList className='tabs-field'>
              <Tab><div className='tab-cta'>Parodontoza</div></Tab>
              <Tab><div className='tab-cta'>Efecte adverse</div></Tab>
              <Tab><div className='tab-cta'>Abcesul dentar</div></Tab>
            </TabList>

            <TabPanel>


              <div className="two-col">
                <div className="simple-col">
                  <h2>Parodontoza</h2>
                  <p>Parodontita marginala profunda, cunoscuta popular sub numele de parodontoza este o afectiune inflamatorie a aparatului de sustinere a dintelui,
                  numit parodontiu marginal. Parodontoza afecteaza atat gingia cat si structurile profunde ale parodontiului : ligamentele parodontale si osul alveolar.
                  Parodontoza este o boala distructiva care cauzeaza pierderea atasamentului gingival urmata de resorbtia progresiva a ligamentelor periodontale si a osului alveolar.
                  Netratata, parodontoza va conduce la aparitia mobilitatii dentare si pierderea ulterioara a dintilor.
                  La fel ca toate bolile parodontale, parodontoza este cauzata de bacteriile si microorganismele din placa dentara.
                  Majoritatea specialistilor sunt de acord ca parodontoza este intotdeauna precedata de gingivita.
                  </p>
                </div>
                <div className="simple-col">
                  <img src="./images/paro1.png" alt="dsgdfs"/>
                </div>
              </div>
              <div className="two-col">
                <div className="simple-col">
                  <h2>Simptome si semne</h2>
                  <p>
                  In fazele initiale, parodontoza are foarte putine simptome; de multe ori, boala a progresat semnificativ inainte ca pacientii sa se prezinte la medic.
Deoarece gingivita precede intotdeauna parodontoza, semnele clinice ale gingivitei vor fi primele care vor aparea.<br />
Simptomele si semnele clinice ale parodontozei pot include :
                  </p>
                    <ul>
                      <li><i className='fas'>&#xf101;</i>Gingii rosii si tumefiate care pot recidiva periodic.</li>
                      <li><i className='fas'>&#xf101;</i>Sangerare gingivala care apare dupa periajul dentar, folosirea atei dentare sau muscarea unui aliment dur.<br />
                      Sangerarea gingivala apare si in cazul gingivitei. Diferenta este ca, in cazul parodontozei atasamentul gingival este distrus.</li>
                      <li><i className='fas'>&#xf101;</i>Pacientii pot scuipa sange in urma periajului dentar.</li>
                      <li><i className='fas'>&#xf101;</i>Retractie gingivala, avand ca rezultat "alungirea dintilor".</li>
                      <li><i className='fas'>&#xf101;</i>Halitoza sau respiratie urat mirositoare si un gust metalic in cavitatea bucala</li>
                      <li><i className='fas'>&#xf101;</i>Aparitia pungilor parodontale. Pungile parodontale sunt zone situate sub gingie unde atasamentul gingival a fost distrus.
                      Aceste spatii pot fi ocupate de bacterii sau celule moarte favorizand agravarea bolii</li>
                    </ul>

                </div>
                <div className="simple-col">
                  <img src="./images/paro2.png" alt="dsgdfs"/>
                </div>
              </div>
              <div className="two-col">
                <div className="simple-col">
                <h2>Stabilirea diagnosticului</h2>
                <p>Diagnosticul de parodontoza se stabileste in urma examinarii clinice si a evaluarii radiografiilor dentare.
                Examinarea clinica consta in inspectia si palparea gingiei din jurul dintilor cu ajutorul sondei dentare.
                Radiografiile vor stabili cantitatea de os pierduta din jurul fiecarui dinte<br />

                <span><strong>~&nbsp;Specialistii nostri te ajuta sa vindeci parodontoza&nbsp;~</strong></span></p>
                </div>
              </div>
              <div className="two-col">
                <div className="simple-col">
                  <p className='global-text-blue'><strong>VREI SA SCAPI DE ACEASTA AFECTIUNE?</strong></p>
                  <a className='global-cta' href="/contact">APASA AICI</a>
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="two-col">
                <div className="simple-col">
                  <h2>Efectele adverse ale medicamentelor
                  asupra cavitatii orale</h2>
                  <p>O mare parte dintre medicamentele existente pe piata, inclusiv suplimentele,  pot avea efecte neplacute asupra cavitatii bucale.</p>
                </div>
                <div className="simple-col">
                  <img src="./images/simptome1.png" alt="dsgdfs"/>
                </div>
              </div>
              <div className="two-col">
                <div className="full-col">
                  <h2>Cele mai frecvente efecte neplacute ale medicamentelor asupa cavitatii orale:</h2>
                  <ul>
                    <li><i className='fas'>&#xf101;</i>xerostomia sau senzaţia de uscăciune a gurii</li>
                    <li><i className='fas'>&#xf101;</i>sangerare gingivala</li>
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
                  <a className='global-cta' href="/contact">APASA AICI</a>
                </div>
              </div>
            </TabPanel>

            <TabPanel>

              <div className="two-col">
                <div className="simple-col">
                  <h2>Efectele adverse ale medicamentelor
                  asupra cavitatii orale</h2>
                  <p>Abcesul dentar este una din cele mai frecvente urgente stomatologice. Abcesul dentar este o infectie bacteriana care se manifesta prin aparitia unei
                  colectii de puroi la varful sau in partea laterala a unui dinte.
                  Abcesele dentare se pot forma in diverse zone ale cavitatii bucale; netratate, acestea pot difuza in zonele si tesuturile invecinate
                  provocand uneori infectii extrem de grave.
                  Din acest motiv, pacientii care observa aparitia unui abces dentar trebuie sa consulte cat mai repede un medic stomatolog.</p>
                </div>
                <div className="simple-col">
                  <h2>Abces periodontal</h2>
                  <img src="./images/abces1.png" alt="dsgdfs"/>
                </div>
              </div>

              <div className="two-col">
                <div className="simple-col">
                  <h2>Simptome si semne</h2>
                  <p>Abcesele dentare se pot forma extrem de rapid. Cel mai neplacut simptom pentru pacienti este durerea intensa care poate difuza si in zonele
                  invecinate: cap, gat, urechi, obraz. Totusi, nu toate abcesele dentare evolueaza cu dureri. Uneori, pacientii nu experimenteaza
                  dureri (sau acestea sunt de intensitate redusa) fiind vizibila doar colectia purulenta care apare ca o umflatura in dreptul dintelui afectat.</p>
                  <h2>Ce alte simptome si semne pot aparea ?</h2>
                  <ul>
                    <li><i className='fas'>&#xf101;</i>dureri pulsatile la nivelul dintelui afectat care cresc treptat in intensitate</li>
                    <li><i className='fas'>&#xf101;</i>dureri la nivelul gatului, urechii sau osului maxilar de aceeasi parte cu dintele afectat</li>
                    <li><i className='fas'>&#xf101;</i>durerile cresc in intensitate:
                      <ul>
                        <li><i className='fas'>&#xf105;</i>in timpul masticatiei</li>
                        <li><i className='fas'>&#xf105;</i>in pozitia culcat</li>
                        <li><i className='fas'>&#xf105;</i>la atingerea dintelui</li>
                        <li><i className='fas'>&#xf105;</i>la cald</li>
                      </ul>
                    </li>
                    <li><i className='fas'>&#xf101;</i>respiratie urat mirositoare si/sau un gust neplacut in gura</li>
                    <li><i className='fas'>&#xf101;</i>dificultati la masticatie si/sau inghitirea alimentelor</li>
                    <li><i className='fas'>&#xf101;</i>aparitia unei colectii de puroi sub forma unei umflaturi (sau tumefieri) in dreptul dintelui afectat (fie spre obraz fie spre limba sau palat)</li>
                    <li><i className='fas'>&#xf101;</i>gingia la acest nivel este rosie si tumefiata</li>
                    <li><i className='fas'>&#xf101;</i>dintele isi poate schimba culoarea si poate deveni mobil</li>
                    <li><i className='fas'>&#xf101;</i>in cazul abceselor mai mari, tumefierea obrazului sau fetei in partea corespunzatoare acestuia</li>
                    <li><i className='fas'>&#xf101;</i>daca abcesul a difuzat in zonele invecinate, pacientul poate dezvolta febra, frisoane, dureri de cap si stare generala alterata</li>
                  </ul>
                  <p>Abcesul este rezultatul neglijarii igienei si a neglijarii vizitelor periodice la dentist. Dintii pot fi afectati foarte grav de un astfel de abces netratat,
                  iar antibioticele nu sunt decat o solutie temporara si numai in situatia in care pacientul nu poate ajunge in cabinetul medical.</p>
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
                    <strong>~       Echipa noastra de specialisti te ajuta sa tratezi cu succes abcesul dentar ~</strong> <br /><br />
                    <strong>Vrei sa scapi de aceasta afectiune?</strong>
                  </p>
                  <a className='global-cta' href="/contact">APASA AICI</a>
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
