import React from "react";

const Card = ({item, setSwich}) => {
    const { fecha, hora, vuelo } = item;

    return(
    <div className="card">
        <h4>Pasaje</h4>
        <h3>Fecha: {fecha}</h3>
        <h3>Hora: {hora}</h3>
        <h3>Vuelo: {vuelo}</h3>
        <button onClick={() => setSwich({ card: item, form: true })}>
        Enviar
        </button>
    </div>);
};

export default Card;
