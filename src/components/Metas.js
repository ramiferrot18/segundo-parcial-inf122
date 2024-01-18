import React, { useState } from 'react';
import '../style/Metas.css';
function Metas({ meta, onDelete, onEdit }) {
    const [editando, setEditando] = useState(false);
    const [nuevoTexto, setNuevoTexto] = useState(meta.texto);

    const handleGuardar = () => {
        onEdit(meta.id, nuevoTexto);
        setEditando(false);
    };

    return (
        <div>
            {editando ? (
                <div className='editar-meta'>
                    <textarea
                        value={nuevoTexto}
                        onChange={(e) => setNuevoTexto(e.target.value)}
                    />
                    <button onClick={handleGuardar}>Guardar</button>
                </div>
            ) : (
                <div className='contenedor-meta'>
                    <p className='meta'>{meta.texto}</p>
                    <button className='boton' onClick={() => onDelete(meta.id)}>Eliminar</button>
                    <button className='boton' onClick={() => setEditando(true)}>Editar</button>
                </div>
            )}
        </div>
    );
}

export default Metas;