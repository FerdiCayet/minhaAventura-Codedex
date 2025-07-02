import { useState } from 'react';

export default function Tooltp() {
    const [showTooltip, setShowTooltip] = useState(false);

    const handleMouseOver = () => {
        setShowTooltip(true);
    };
    const handleMouseLeave = () => {
        setShowTooltip(false);
    };

    return (
        <div className="App">
            <div className="element-with-tooltip" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
                Passe o mouse aqui
                {showTooltip && <div className="tooltip">Isto é uma dica (tooltip)</div>}
            </div>
        </div>
    );
}
