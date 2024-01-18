import React, { useState } from 'react';
import Metas from './Metas';
import '../style/ListaMetas.css';

function ListaMetas() {
    const [metas, setMetas] = useState([]);
    const [nuevaMeta, setNuevaMeta] = useState('');

    const agregarMetas = () => {
        if (nuevaMeta.trim() === '') return;
        setMetas([...metas, { id: Date.now(), texto: nuevaMeta }]);
        setNuevaMeta('');
    };

    const eliminarMeta = (id) => {
        setMetas((prevMetas) => prevMetas.filter((meta) => meta.id !== id));
    };

    const editarMeta = (id, nuevoTexto) => {
        setMetas((prevMetas) =>
            prevMetas.map((meta) => (meta.id === id ? { ...meta, texto: nuevoTexto } : meta))
        );
    };

    return (
        <div className='contenedor-principal'>
            <input
                className="input"
                type="text"
                value={nuevaMeta}
                onChange={(e) => setNuevaMeta(e.target.value)}
            />
            <button className='boton' onClick={agregarMetas}>Agregar</button>
            {metas.map((meta) => (
                <meta
                    key={meta.id}
                    meta={meta}
                    onDelete={eliminarMeta}
                    onEdit={editarMeta}
                />
            ))}
        </div>
    );
}

export default ListaMetas;