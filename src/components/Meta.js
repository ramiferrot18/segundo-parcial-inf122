import React from "react";
import'../style/Meta.css';
function Meta({objetivo, onDelete ,tach}){
    return(
    <div className="obj">
        <div className="obj-info">
            <p className="texto">{objetivo.texto}</p>
        </div>
        <button className='botonA' onClick={()=> onDelete(objetivo.id)}><img src="../icons/VectorB.svg" alt="E"/></button>
        <button className='botonA' onClick={tach}><img src="../icons/VectorC.svg" alt="C"/></button>
    </div>
    );
}
export default Meta;