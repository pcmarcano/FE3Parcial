import { useState } from "react";
import "./App.css";
import Card from "./Components/Card";
import Form from "./Components/Form";
// pasaje avion
function App() {
  const [swich, setSwich] = useState({
    card: {},
    form: false
  })
  
  let vuelos = [
    { id: 1, fecha: '08/03/2024', hora: '15:00', vuelo: '4325'},
    { id: 2, fecha: '08/03/2024', hora: '23:00', vuelo: '6543'},
    { id: 3, fecha: '09/03/2024', hora: '15:00', vuelo: '7664'},
    { id: 4, fecha: '09/03/2024', hora: '15:00', vuelo: '7654'}
  ]

console.log(swich);
  return (
      <>
        {swich.form && <Form form = {swich.card}/>}
        {vuelos.map((item) => <Card key = {item.id} setSwich = {setSwich} item = {item}/>)}
      </>
  );
}

export default App;