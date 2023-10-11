import React from 'react';
import booki from './../assets/projets/booki.png'
import ohmyfood from './../assets/projets/ohmyfood.png'
import lachouette from './../assets/projets/lachouette.png'
import kanap from './../assets/projets/kanap.png'
import groupomania from './../assets/projets/groupomania.png'
import tipcal from './../assets/projets/tipcal.png'
import todo from './../assets/projets/todo.png'
import portfolio from './../assets/projets/portfolio.png'
import infomaniak from './../assets/projets/infomaniak.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'

const Portfolio = () => {
    return (
        <section id='portfolio' className='section'>
            <div>
                <h2>Portfolio<span>mes projets</span></h2>
                <div className="separation-line"></div>

                <div className='portfolio-container'>
                    <figure  className='portfolio-projet'>
                        <img src={booki} alt="" />
                        <figcaption>
                            <p>HTML & CSS</p>
                            <h3>Booki</h3>
                            <p>Transformer une maquette en site web avec HTML & CSS.</p>
                            <a target="_blank" rel='noreferrer' href="https://celinedev.github.io/booki/">Démo du projet <FontAwesomeIcon icon={faLaptopCode} size="lg" /></a>
                        </figcaption>
                    </figure>
                    <figure  className='portfolio-projet'>
                        <img src={ohmyfood} alt="" />
                        <figcaption>
                            <p>HTML & SASS</p>
                            <h3>Ohmyfood</h3>
                            <p>Transformer une maquette en site web avec des animations en mobile-first.</p>
                            <a target="_blank" rel='noreferrer' href="https://celinedev.github.io/Ohmyfood/">Démo du projet <FontAwesomeIcon icon={faLaptopCode} size="lg" /></a>
                        </figcaption>
                    </figure>
                    <figure  className='portfolio-projet'>
                        <img src={lachouette} alt="" />
                        <figcaption>
                            <p>SEO, accessibilité</p>
                            <h3>La chouette agence</h3>
                            <p>Amélioration du SEO et de l'accessibilité d'un site web.</p>
                            <a target="_blank" rel='noreferrer' href="https://celinedev.github.io/lachouetteagence.github.io/index.html">Démo du projet <FontAwesomeIcon icon={faLaptopCode} size="lg" /></a>
                        </figcaption>
                    </figure>
                    <figure  className='portfolio-projet'>
                        <img src={kanap} alt="" />
                        <figcaption>
                            <p>Javascript</p>
                            <h3>Kanap</h3>
                            <p>Réalisation de la partie Javascript d'un site e-commerce dont le back et l'API sont fournit.</p>
                            <a title='github' target="_blank" rel='noreferrer' href="https://github.com/celineDev/kanap">Repo Github du projet <FontAwesomeIcon icon={faSquareGithub} size="lg" /></a>
                        </figcaption>
                    </figure>
                    <figure  className='portfolio-projet'>
                        <img src={groupomania} alt="" />
                        <figcaption>
                            <p>React JS</p>
                            <h3>Groupomania</h3>
                            <p>Construire un réseau social interne entreprise.</p>
                            <a title='github' target="_blank" rel='noreferrer' href="https://github.com/celineDev/groupomania_22022022">Repo Github du projet <FontAwesomeIcon icon={faSquareGithub} size="lg" /></a>
                        </figcaption>
                    </figure>
                    <figure  className='portfolio-projet'>
                        <img src={tipcal} alt="" />
                        <figcaption>
                            <p>Javascript</p>
                            <h3>Tip Calculator App</h3>
                            <p>Application qui calcule le pourboire en fonction du prix, du nombres de personnes et du pourcentage à verser.</p>
                            <a target="_blank" rel='noreferrer' href="https://celinedev.github.io/Tip-Calculator-App/">Démo du projet <FontAwesomeIcon icon={faLaptopCode} size="lg" /></a>
                        </figcaption>
                    </figure>
                    <figure  className='portfolio-projet'>
                        <img src={todo} alt="" />
                        <figcaption>
                            <p>Javascript</p>
                            <h3>Todo App</h3>
                            <p>Application de liste to-do.</p>
                            <a target="_blank" rel='noreferrer' href="https://celinedev.github.io/To-do-app/">Démo du projet <FontAwesomeIcon icon={faLaptopCode} size="lg" /></a>
                        </figcaption>
                    </figure>
                    <figure  className='portfolio-projet'>
                        <img src={portfolio} alt="" />
                        <figcaption>
                            <p>React JS</p>
                            <h3>Portfolio</h3>
                            <p>Mon portfolio de dév.</p>
                            <a target="_blank" rel='noreferrer' href="https://celinedev.github.io/Porfolio-online/">Démo du projet <FontAwesomeIcon icon={faLaptopCode} size="lg" /></a>
                        </figcaption>
                    </figure>
                    <figure  className='portfolio-projet'>
                        <img src={infomaniak} alt="" />
                        <figcaption>
                            <p>Next JS</p>
                            <h3>Infomaniak</h3>
                            <p>Reproduction du site Infomaniak, côté front.</p>
                            <a title='github' target="_blank" rel='noreferrer' href="https://github.com/celineDev/infomaniakClone">Repo Github du projet <FontAwesomeIcon icon={faSquareGithub} size="lg" /></a>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;