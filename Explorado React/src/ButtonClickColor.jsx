import React, { useState } from 'react';

export default function ButtonClickColor() {
    const cores = ['red', 'green', 'blue'];
    const [indice, setIndice] = useState(0);

    const mudarCor = () => {
        setIndice((prev) => (prev + 1) % cores.length);
    };

    return (
        <button
            onClick={mudarCor}
            style={{
                backgroundColor: cores[indice],
                color: 'white',
                padding: '15px 30px',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                cursor: 'pointer'
            }}
        >
            Clique para mudar cor
        </button>
    );
}
