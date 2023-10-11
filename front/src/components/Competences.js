import React from 'react';
import html5 from './../assets/logos/html5.png'
import css3 from './../assets/logos/css3.png'
import sass from './../assets/logos/sass.png'
import js from './../assets/logos/js.png'
import react from './../assets/logos/react.png'
import next from './../assets/logos/next.png'
import nodejs from './../assets/logos/nodejs.png'
import express from './../assets/logos/express.png'
import mongodb from './../assets/logos/mongodb.png'
import sql from './../assets/logos/sql.png'
import sequelize from './../assets/logos/sequelize.png'
import git from './../assets/logos/git.png'
import github from './../assets/logos/github.png'

const Competences = () => {
    return (
        <section id='competences' className='section'>
            <h2>compétences<span>mes technos</span></h2>
            <div className="separation-line"></div>
            <div class='technos-container'>
                <figure>
                    <img src={html5} alt="html5" />
                    <figcaption>
                        <h3>HTML5</h3>
                    </figcaption>
                </figure>
                <figure>
                    <img src={css3} alt="css3" />
                    <figcaption>
                        <h3>CSS3</h3>
                    </figcaption>
                </figure>
                <figure>
                    <img src={sass} alt="sass" />
                    <figcaption>
                        <h3>Sass</h3>
                    </figcaption>
                </figure>
                <figure>
                    <img src={js} alt="js" />
                    <figcaption>
                        <h3>JavaScript</h3>
                    </figcaption>
                </figure>
                <figure>
                    <img src={react} alt="react" />
                    <figcaption>
                        <h3>React</h3>
                    </figcaption>
                </figure>
                <figure>
                    <img src={next} alt="next" />
                    <figcaption>
                        <h3>Next</h3>
                    </figcaption>
                </figure>
                <figure>
                    <img src={nodejs} alt="nodejs" />
                    <figcaption>
                        <h3>Nodejs</h3>
                    </figcaption>
                </figure>
                <figure>
                    <img src={express} alt="express" />
                    <figcaption>
                        <h3>Express</h3>
                    </figcaption>
                </figure>
                <figure>
                    <img src={mongodb} alt="mongodb" />
                    <figcaption>
                        <h3>MongoDB</h3>
                    </figcaption>
                </figure>
                <figure>
                    <img src={sql} alt="sql" />
                    <figcaption>
                        <h3>Sql</h3>
                    </figcaption>
                </figure>
                <figure>
                    <img src={sequelize} alt="sequelize" />
                    <figcaption>
                        <h3>Sequelize</h3>
                    </figcaption>
                </figure>
                <figure>
                    <img src={git} alt="git" />
                    <figcaption>
                        <h3>Git</h3>
                    </figcaption>
                </figure>
                <figure>
                    <img src={github} alt="github" />
                    <figcaption>
                        <h3>GitHub</h3>
                    </figcaption>
                </figure>
            </div>
        </section>
    );
};

export default Competences;