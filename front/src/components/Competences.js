import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faSass, faJs,
        faReact,
        faGit, faSquareGithub, faNpm } from '@fortawesome/free-brands-svg-icons'

const Competences = () => {
    return (
        <section id='competences' className='section'>
            <h2>compétences<span>mes technos</span></h2>
            <div className="separation-line"></div>
            <div className='technos'>
                <article>
                    <h3>Langages et Framework :</h3>
                    <ul>
                        <li><FontAwesomeIcon className='pink-icon' title='HTML5' icon={faHtml5} size="3x" /></li>
                        <li><FontAwesomeIcon className='pink-icon' title='CSS3' icon={faCss3Alt} size="3x" /></li>
                        <li><FontAwesomeIcon className='pink-icon' title='SASS' icon={faSass} size="3x" /></li>
                        <li><FontAwesomeIcon className='pink-icon' title='JavaScript' icon={faJs} size="3x" /></li>
                        <li><FontAwesomeIcon className='pink-icon' title='React JS' icon={faReact} size="3x" /></li>
                    </ul>
                </article>
                <article>
                    <h3>Outils :</h3>
                    <ul>
                        <li><FontAwesomeIcon className='pink-icon' title='Git' icon={faGit} size="3x" /></li>
                        <li><FontAwesomeIcon className='pink-icon' title='GitHub' icon={faSquareGithub} size="3x" /></li>
                        <li><FontAwesomeIcon className='pink-icon' title='npm' icon={faNpm} size="3x" /></li>
                    </ul>
                </article>
            </div>
        </section>
    );
};

export default Competences;