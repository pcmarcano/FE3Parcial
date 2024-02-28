import {useState} from 'react'

const Form = ({card}) => {
    const [pasajero, setPasajero] = useState({
        nombre: '',
        apellido: ''
    })
    const [ver, setVer] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(pasajero.nombre.length >= 3 && pasajero.apellido.length >= 6){
            setVer(true)
            setError(false)
        } else {
            setError(true)
        }
    }
    
    return (
    <>
        <h4>Ingresar datos del pasajero</h4>
        {!ver && <form onSubmit={handleSubmit}> 
            <label >Nombre del pasajero: </label>
            <input type="text" onChange={({target}) => setPasajero({...pasajero, nombre: target.value})}/>
            <label >Obra Social: </label>
            <input type="text" onChange={({target}) => setPasajero({...pasajero, apellido: target.value})}/>
            <button>Ingresar</button>
        </form>}
        {ver && <h4>{pasajero.nombre} {pasajero.apellido}, pasaje seleccionado</h4>}
        {error && <p>Por favor chequea que la información sea correcta.</p>}
        <hr />
    </>
    )
}

export default Form