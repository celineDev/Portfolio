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

    function handleClick(e) {
        e.preventDefault();
        const target = e.target.getAttribute('href');
        const newTarget = target.substring(1)

        if (newTarget.charAt(0) === '#') {
            const offset = document.querySelector(newTarget).offsetTop - 160
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            })
        }
    }

    return (
        <header>
            <div className='nav-container'>
                <HashLink className='logo' smooth to="#accueil">cm</HashLink>
                <nav>
                    <ul className='link hide-for-mobile'>
                        <li><HashLink onClick={handleClick} to="#apropos">A propos</HashLink></li>
                        <li><HashLink onClick={handleClick} to="#competences">Compétences</HashLink></li>
                        <li><HashLink onClick={handleClick} to="#portfolio">Portfolio</HashLink></li>
                        <li><HashLink onClick={handleClick} to="#contact">Contact</HashLink></li>
                    </ul>

                    <button onClick={handleMenu} className='burger-btn'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </nav>
            </div>

            {isOpen && (
                <ul className='toggle hide-for-desktop'>
                    {/* <li><HashLink smooth to="#accueil">Accueil</HashLink></li> */}
                    <li><HashLink onClick={handleClick} to="#apropos">A propos</HashLink></li>
                    <li><HashLink onClick={handleClick} to="#competences">Compétences</HashLink></li>
                    <li><HashLink onClick={handleClick} to="#portfolio">Portfolio</HashLink></li>
                    <li><HashLink onClick={handleClick} to="#contact">Contact</HashLink></li>
                </ul>
            )}
        </header>
    );
};

export default Navigation;