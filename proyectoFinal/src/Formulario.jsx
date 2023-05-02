import React, {useState} from "react";


export default function Formulario({pacientes, setPacientes}){
    const[mascota, setMascota]=useState("")
    const[dueño, setDueño]=useState("")
    const[fecha, setFecha]=useState()
    const[hora, setHora]=useState()
    const[sintomas, setSintomas]=useState("")

    function agregarPaciente(){
        const informacion={
            mascota,
            dueño,
            fecha,
            hora,
            sintomas,
        }
        setPacientes([...pacientes,mascota,])
        setMascota("")
        setDueño("")
        setFecha()
        setHora()
        setSintomas("")
    }

    return (
        <div>
            <form className="form" action="">
                <label htmlFor="">Nombre Mascota</label>
                <input onChange={(e)=> {setMascota(e.target.value)}} value={mascota} type="text" />
                <label htmlFor="">Nombre Dueño</label>
                <input onChange={(e)=> {setDueño(e.target.value)}} value={dueño} type="text" />
                <label htmlFor="">Fecha</label>
                <input onChange={(e)=> {setFecha(e.target.value)}} value={fecha} type="date" />
                <label htmlFor="">Hora</label>
                <input onChange={(e)=> {setHora(e.target.value)}} value={hora} type="time" />
                <label htmlFor="">Síntomas</label>
                <textarea onChange={(e)=> {setSintomas(e.target.value)}} value={sintomas} name="" id="" cols="30" rows="5"></textarea>
                <button onClick={agregarPaciente} type="submit" >AGREGAR CITA</button>

            </form>

        </div>

    )


}