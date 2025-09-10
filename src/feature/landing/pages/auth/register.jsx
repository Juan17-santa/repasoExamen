import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Registrate() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        usuario: "",
        contraseña: ""
    })

    const data = ((e)=>{
        const {name, value} = e.target
        setFormData((prev)=>({
            ...prev,
            [name]:value
        }))
    })

    function handleregister(e) {
        e.preventDefault()

        const examen = JSON.parse(localStorage.getItem("examenReact")) || []

        examen.push(formData)

        localStorage.setItem("examenReact", JSON.stringify(examen))

        alert ("Registro exitoso!")
        console.log(examen)
        navigate("/login")
    }

    return (
        <>
            <div className="min-h-screen flex flex-col items-center gap-6">
                <div className="mt-6">
                    <h1 className="text-3xl font-semibold">Registrate</h1>
                </div>
                <div>
                    <form className="w-96 p-4 flex flex-col gap-3 bg-white shadow rounded-xl" onSubmit={handleregister}>
                        <label>Email:</label>
                        <input type="email" className="border rounded p-1" name="email" onChange={data} required/>

                        <label>Usuario:</label>
                        <input type="text" className="border rounded p-1" name="usuario" onChange={data} required/>

                        <label>Contraseña:</label>
                        <input type="password" className="border rounded p-1" name="contraseña" onChange={data} required/>

                        <button type="submit" className="bg-green-400 hover:bg-green-500 cursor-pointer py-2 w-44 rounded self-center">Acceder</button>
                    </form>
                </div>
            </div>
        </>
    )
}