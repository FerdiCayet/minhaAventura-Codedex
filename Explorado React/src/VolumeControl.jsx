import React, { useState, useRef, useEffect } from 'react';

export default function VolumeControl() {
    const [volume, setVolume] = useState(50);
    const [status, setStatus] = useState('Use as setas ↑ e ↓ para controlar o volume.');
    const controlRef = useRef(null);

    useEffect(() => {
        // Foca automaticamente a div quando o componente monta
        controlRef.current.focus();
    }, []);

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowUp') {
            setVolume((prevVolume) => Math.min(prevVolume + 5, 100));
            setStatus('Aumentando o volume');
        } else if (e.key === 'ArrowDown') {
            setVolume((prevVolume) => Math.max(prevVolume - 5, 0));
            setStatus('Diminuindo o volume');
        }
    };

    const handleKeyUp = () => {
        setStatus('Use as setas ↑ e ↓ para controlar o volume.');
    };

    return (
        <div>
            <h2>Controle de Volume 🔊</h2>
            <span>Volume: {volume}</span>
            <div id="volume-bar-empty-space" style={{ background: '#eee', height: '10px', width: '100%', margin: '10px 0' }}>
                <div
                    id="volume-bar"
                    style={{
                        width: `${volume}%`,
                        height: '100%',
                        backgroundColor: '#4caf50',
                        transition: 'width 0.2s'
                    }}
                ></div>
            </div>

            {/* Instrução para o usuário */}
            <p style={{ fontStyle: 'italic', color: '#555' }}>
                Clique no quadro abaixo ou pressione <strong>Tab</strong> para ativá-lo. Use as teclas <strong>↑</strong> e <strong>↓</strong> para ajustar o volume.
            </p>

            {/* Área interativa com foco e feedback visual */}
            <div tabIndex={0} ref={controlRef} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp}>
                <strong>Status:</strong> {status}
            </div>
        </div>
    );
}
