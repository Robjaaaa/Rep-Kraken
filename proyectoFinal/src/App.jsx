import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Formulario from './Formulario'
import Paciente from './Paciente'

function App() {
  const [count, setCount] = useState(0)
  const[pacientes, setPacientes]=useState([])

  return (
    <div className="App">
      <div>
        <Header titulo={"CREAR CITA "} />
        <Formulario pacientes={""} setPacientes={setPacientes}/>
      </div>
      
      <div>
       <Header titulo={"Listado de pacientes"} />
        {/* <Paciente nombre={"Leo"} dueño={"Messi"} />
        <Paciente nombre={"Nick"} dueño={"Tesla"} /> */}
        {pacientes.map((paciente)=>{
          return <Paciente nombre={paciente.mascota} dueño={paciente.dueño} fecha={paciente.fecha} hora={paciente.hora} sintomas={paciente.sintomas}/>
        })}
      </div>

    </div>  
  )
}

export default App
