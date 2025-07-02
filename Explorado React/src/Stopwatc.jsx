import { useState, useEffect } from 'react';

export default function Stopwatc() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        // Define o intervalo para executar a cada 1000ms (1 segundo)
        const interval = setInterval(() => {
            setSeconds((prevSeconds) => {
                if (prevSeconds === 10) {
                    console.log('Reiniciou!');
                    return 0; // Reinicia para 0 quando chega a 10
                }
                return prevSeconds + 1;
            });
        }, 1000);

        // Função de limpeza para remover o intervalo quando o componente for desmontado
        return () => clearInterval(interval);
    }, []); // O array vazio [] garante que o useEffect rode apenas uma vez

    return (
        <>
            <h2>Time Starts Now!</h2>
            {seconds} seconds
        </>
    );
}
