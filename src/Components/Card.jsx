import React from "react";

const Card = ({item, setSwich}) => {
    const { fecha, hora, vuelo } = item;

    return(
    <div>
        <h4>Pasaje</h4>
        <h3>Fecha: {fecha}</h3>
        <h3>Hora: {hora}</h3>
        <h3>Vuelo: {vuelo}</h3>
        <button onClick={() => setSwich({ card: item, form: true })}>
            Agregar Pasaje.
        </button>
    </div>);
};

export default Card;
