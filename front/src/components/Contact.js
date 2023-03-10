import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return (
        <section id='contact' className='section'>
            <h2>Contact<span>contactez-moi</span></h2>
            <div className="separation-line"></div>
            <div className='personnal'>
                <a title='Email' target="_blank" rel='noreferrer' href="mailto:celine667@hotmail.fr"><FontAwesomeIcon icon={faEnvelope} size="2x" />Par Email</a>
                <a title='Linkedin' target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/celine-mouflard/"><FontAwesomeIcon icon={faLinkedin} size="2x" />Linkedin</a>
            </div>
        </section>
    );
};

export default Contact;