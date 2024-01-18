import React from "react";
import '../style/Meta.css';
function Meta(){
    return(
        <div className="main-container">
            <div className="title">
                <h1 className="title1">Mis Metas</h1>
            </div>
            <input 
            type="text" 
            className="nueva-meta" 
            placeholder="Aprender CSS"/>
            <button onclick="agregarMeta()">Agregar Meta</button>
        </div>
    )
}
export default Meta;