import React from 'react';

const Footer = () => {
    const date = new Date()
    const currentYear = date.getFullYear()

    return (
        <footer>
            <p>Copyright &copy; {currentYear} Céline Mouflard
            </p>
        </footer>
    );
};

export default Footer;