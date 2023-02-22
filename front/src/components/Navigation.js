import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
    return (
        <header>
            <a className='logo' href="#">cm</a>
            <nav>
                <ul className='link hide-for-mobile'>
                    <li><HashLink smooth to="#accueil">Accueil</HashLink></li>
                    <li><HashLink smooth to="#apropos">A propos</HashLink></li>
                    <li><HashLink smooth to="#competences">Compétences</HashLink></li>
                    <li><HashLink smooth to="#portfolio">Portfolio</HashLink></li>
                    <li><HashLink smooth to="#contact">Contact</HashLink></li>
                </ul>

                <button className='burger-btn closed'>
                    <div><FontAwesomeIcon icon={faBars} size="2x" /></div>
                </button>
                {/* <button className='burger-menu'> <div>
                        <FontAwesomeIcon icon={faXmark} size="2x" />
                        </div>
                    </button> */}
            </nav>
            <ul className='toggle hide-for-desktop has-fade'>
                <li><HashLink smooth to="#accueil">Accueil</HashLink></li>
                <li><HashLink smooth to="#apropos">A propos</HashLink></li>
                <li><HashLink smooth to="#competences">Compétences</HashLink></li>
                <li><HashLink smooth to="#portfolio">Portfolio</HashLink></li>
                <li><HashLink smooth to="#contact">Contact</HashLink></li>
            </ul>
        </header>
    );
};

export default Navigation;