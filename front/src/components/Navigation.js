import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleMenu = () => {
        const header = document.querySelector('header')

        if (header.classList.contains('open')) {
            header.classList.remove('open')
        } else {
            header.classList.add('open')
        }
        setIsOpen(!isOpen)
    }

    return (
        <header>
            <a className='logo' href="/">cm</a>
            <nav>
                <ul className='link hide-for-mobile'>
                    <li><HashLink smooth to="#accueil">Accueil</HashLink></li>
                    <li><HashLink smooth to="#apropos">A propos</HashLink></li>
                    <li><HashLink smooth to="#competences">Compétences</HashLink></li>
                    <li><HashLink smooth to="#portfolio">Portfolio</HashLink></li>
                    <li><HashLink smooth to="#contact">Contact</HashLink></li>
                </ul>

                <button onClick={handleMenu} className='burger-btn'>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>

            {isOpen && (
                <ul className='toggle hide-for-desktop has-fade'>
                    <li><HashLink smooth to="#accueil">Accueil</HashLink></li>
                    <li><HashLink smooth to="#apropos">A propos</HashLink></li>
                    <li><HashLink smooth to="#competences">Compétences</HashLink></li>
                    <li><HashLink smooth to="#portfolio">Portfolio</HashLink></li>
                    <li><HashLink smooth to="#contact">Contact</HashLink></li>
                </ul>
            ) }
        </header>
    );
};

export default Navigation;