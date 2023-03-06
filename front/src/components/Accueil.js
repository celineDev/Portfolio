import React from 'react';
import banner_desktop from './../assets/banner/banner_1920.jpg';
import banner_tablet from './../assets/banner/banner_1280.jpg';
import banner_smart from './../assets/banner/banner_640.jpg';
import profile from './../assets/profile/profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'

const Accueil = () => {
    return (
        <section id='accueil' className='banner-container'>
            <picture className='banner'>
                <source
                    media="(max-width: 375px)"
                    srcSet={banner_smart}
                    sizes="375px"
                />
                <source
                    media="(max-width: 959px)"
                    srcSet={banner_tablet}
                    sizes="959px"
                />
                <source
                    srcSet={banner_desktop}
                    sizes="1280px"
                />
                <img src="image-url-1280.jpeg" alt='banner'/>
            </picture>
            <div className='banner-profile'>
                <figure>
                    <img src={profile} alt="avatar" />
                    <figcaption>Céline Mouflard</figcaption>
                </figure>
                <h1>Développeuse Web Front-End </h1>
                <div className='icon'>
                    <a title='linkedin' target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/celine-mouflard/"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                    <a title='github' target="_blank" rel='noreferrer' href="https://github.com/celineDev?tab=repositories"><FontAwesomeIcon icon={faSquareGithub} size="2x" /></a>
                </div>
                <button className='contact'><a href="mailto:celine667@hotmail.fr">Contactez-moi</a></button>
            </div>
        </section>
    );
};

export default Accueil;
