import React from 'react';
import cv from './../assets/cv/cv.pdf'

const Apropos = () => {
    return (
        <section id="apropos">
            <h2>à-propos de moi<span>qui suis-je ?</span></h2>
            <div className="separation-line"></div>
            <p>Passionnée par le développement web, je suis particulièrement intéressée par le front-end et le framework React JS. Pour élargir mes compétences, je continue à me former quotidiennement sur ce framework.
            J'ai comme ambition de progresser et d'élargir mes compétences afin de rester à la pointe de l'innovation en terme de compétences.
            </p>
            <button><a target="_blank" rel="noreferrer" href={cv}>Télécharger mon CV</a></button>
        </section>
    );
};

export default Apropos;