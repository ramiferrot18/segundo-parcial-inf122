import React from "react";
import Meta from "./Meta";
import Progreso from "./Progreso";
import '../style/ListaMetas.css';
import { useState } from "react";
function ListaMetas(){
    const[nroCompletadas, setNroCompletadas]=useState(0);
    const[nroPendientes, setNroPendientes]=useState(0);
    const [metas, setMetas]=useState([]);
    const [nuevaMeta,setNuevaMeta]= useState('');
    const agregarMeta=()=>{
        if(nuevaMeta.trim()==='') return;
        setMetas([...metas,{id:Date.now(), texto: nuevaMeta}]);
        setNuevaMeta('');
        setNroPendientes(nroPendientes+1);
    };
    const eliminarMeta = (id)=>{
        setMetas((metasAnteriores) => metasAnteriores.filter((meta)=>meta.id !==id));
        setNroPendientes(nroPendientes-1);
    };
    const tachar=()=>{
        setNroCompletadas(nroCompletadas+1);
        setNroPendientes(nroPendientes-1);
    }
    return(
        <div className="contenedor">
            <h2 className="title">Mis metas</h2>
            <div className="add-meta">
                <input className="input" type='text'value={nuevaMeta} 
                placeholder="Nueva Meta...."
                onChange={(e)=>setNuevaMeta(e.target.value)}/>
                <button className='boton' onClick={agregarMeta}>Agregar</button>
            </div>
            <Progreso pend={nroPendientes} comp={nroCompletadas}/>
            <div className="contenedor-metas">
            {metas.map((meta)=>(
                        <Meta
                        key={meta.id}
                        objetivo={meta}
                        onDelete={eliminarMeta}
                        tach={tachar}
                        />
            ))}
            </div>
        </div>
    );
}
export default ListaMetas;