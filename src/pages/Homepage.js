import React from 'react';
import Hero from '../components/images/hero-img.png';
import Rama from '../components/images/rama.png';
import Crown from '../components/images/crown-icon.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slider from '../components/Slider';


class Homepage extends React.Component {

    render() {

        return (
            <div className='home'>
                <div className='hero'>
                    <img src={Hero} alt='hero' />
                    <div className='hero-text'>
                    <p>Sanatatea ta incepe
                    cu noi</p>

                    </div>
                </div>
                <div className='main-container'>
                <div className="motto">
                    <div className="motto-item prezentare">
                        <div className="crown-title">
                            <img src={Crown} alt='crown' />
                        </div>
                        <p>Filozofia noastra este simpla si neschimbata de peste 20 de ani de activitate:</p>
                        <ul>
                            <li><i className='fas'>&#xf101;</i>suntem devotatiorientati catre nevoile pacientilor nostri astfel incat acestia sa se bucure de toate beneficiile pe care le putem oferi </li>
                            <li><i className='fas'>&#xf101;</i>suntem dedicati in totalitate si facem totul ghidati de pasiunea care ne reprezinta</li>
                            <li><i className='fas'>&#xf101;</i>folosind  cele mai bune materiale si aparatura ultra moderna facem posibile rezultate excelente</li>
                            <li><i className='fas'>&#xf101;</i>echipa noastra este alcatuita numai din profesionisti cu o vasta experienta medicala</li>
                            <li><i className='fas'>&#xf101;</i>un ambient pozitiv si primitor</li>
                            <li><i className='fas'>&#xf101;</i>punem la dispozitie pacientilor nostri cele mai bune si adecvate solutii astfel incat alegerile lor sa fie cele mai multumitoare</li>
                            <li><i className='fas'>&#xf101;</i>realizam planuri de tratament personalizate facand posibila o abordare a tuturor pacientilor din toate segmentele de piata</li>
                        </ul>
                    </div>
                    <div className='motto-item rama-box'>
                        <img src={Rama} alt='rama' />
                    </div>
                </div>


                </div>
                <div className="filosofy">
                    <div className="main-container">
                        <h2>"Omnium Artium Medicina Nobilissima Est"<br />
                        ~ Aristotel ~</h2>
                        <p>Fiecare om are dreptul si merita un tratament medical de cea mai buna calitate iar noi ne asumam rolul de partener de incredere in aceasta minunata excursie a zambetului.</p>
                    </div>
                </div>
                <Slider />
                <div className="program">
                    <div className="main-container">
                        <h2>PROGRAM</h2>
                        <ul>
                            <li><i className='fas'>&#xf101;</i><p>Lun - Vin :  09 - 20</p></li>
                            <li><i className='fas'>&#xf101;</i><p>Sambata :  10 - 16</p></li>
                            <li><i className='fas'>&#xf101;</i><p>Duminica:  10 - 14 </p></li>
                        </ul>
                        <h2>ADRESA</h2>
                        <ul>
                            <li><i className='fas'>&#xf101;</i><p>str. Petre Ispirescu, nr. 89-91</p></li>
                        </ul>



                    </div>
                </div>
            </div>
        );
    }
}

export default Homepage;
