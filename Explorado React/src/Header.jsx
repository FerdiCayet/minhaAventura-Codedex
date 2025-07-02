import "./Header.css";

import { FaReact } from "react-icons/fa";

const Header = () => {
    return (
        <header className="header">
            <div className="stars-bg"></div>
            <div className="header-content">
                <FaReact className="react-icon" />
                <h1>Explorando o Cosmos com React</h1>
                <p>Do átomo ao universo — compondo a imensidão com código.</p>
            </div>
        </header>
    );
};

export default Header;