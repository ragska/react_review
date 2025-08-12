import { useState, useEffect } from 'react';

function Usuarios() {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((resposta) => resposta.json())
        .then((dados) => setUsuarios(dados));
    }, []);

    return (

        <div>
            <h1>Usuários</h1>
            <ul>
                {usuarios.map((usuario) => (
                    <li key={usuario.id}>
                        {usuario.name}
                    </li>
                ))}
            </ul>
        </div>

    );
}
export default Usuarios;
