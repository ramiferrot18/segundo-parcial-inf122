import React from "react";
import '../style/Progreso.css';
function Progreso({comp,pend}){
    return(
        <div className="container-prog">
            <div className="completadas">
                <p className="text">Completadas: {comp}</p>
            </div>
            <div className="pendientes">
                <p className="text">Pendientes: {pend}</p>
            </div>
        </div>
    );
}
export default Progreso;