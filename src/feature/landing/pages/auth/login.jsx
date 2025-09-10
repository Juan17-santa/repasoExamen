import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Registrate() {
    const [usuario, setUsuario] = useState("")
    const [contraseña, setContraseña] = useState("")
    const navigate = useNavigate()

    function handlelogin(e) {
        e.preventDefault()

        const examen = JSON.parse(localStorage.getItem("examenReact")) || []

        const searchUser = examen.find((u) => u.usuario === usuario && u.contraseña === contraseña)

        if (searchUser) {
            alert ("Bienvenido al sistema!")
            navigate ("/dashboard")
        } else {
            alert ("Credendiales incorretas")
            
        }
    }

    return (
        <>
            <div className="min-h-screen flex flex-col items-center gap-6">
                <div className="mt-6">
                    <h1 className="text-3xl font-semibold">Login</h1>
                </div>
                <div>
                    <form className="w-96 p-4 flex flex-col gap-3 bg-white shadow rounded-xl" onSubmit={handlelogin}>
                        <label>Usuario:</label>
                        <input type="text" className="border rounded p-1" name="usuario" onChange={(e)=>{setUsuario(e.target.value)}}/>

                        <label>Contraseña:</label>
                        <input type="password" className="border rounded p-1" name="contraseña" onChange={(e)=>{setContraseña(e.target.value)}}/>

                        <button type="submit" className="bg-green-400 hover:bg-green-500 cursor-pointer py-2 w-44 rounded self-center">Acceder</button>
                    </form>
                </div>
            </div>
        </>
    )
}