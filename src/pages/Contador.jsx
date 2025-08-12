import { useState } from 'react';

function Contador() {

    const [contador, setContador] = useState(0);

    return (
        <div>
            <h1>Contador!</h1>
            <div>
                <p>Valor atual: {contador}</p>
                <button onClick={() => setContador(contador + 1)}>Aumentar</button>
            </div>
        </div>
    );
}
export default Contador;
