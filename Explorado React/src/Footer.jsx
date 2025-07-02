import './Footer.css';

import { FaReact, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <FaReact className="footer-react-icon" />
                <p>Feito com React e amor pelo cosmos © 2025</p>
                <div className="social-icons">
                    <a href="https://github.com/seuusuario" target="_blank" rel="noreferrer" aria-label="GitHub">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/seuusuario" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
