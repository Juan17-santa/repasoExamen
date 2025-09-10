import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Empresas() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        nombre: "",
        nit: "",
        direccion: "",
        telefono: ""
    })

    const data = ((e)=>{
        const {name, value} = e.target
        setFormData((prev)=>({
            ...prev,
            [name]:value
        }))
    })

    function handleempresas(e) {
        e.preventDefault()

        const empresa = JSON.parse(localStorage.getItem("examenReactEmpresas")) || []

        empresa.push(formData)

        localStorage.setItem("examenReactEmpresas", JSON.stringify(empresa))

        alert ("Registro de empresa exitoso!")
        navigate("/dashboard")
    }

    return (
        <>
            <div className="min-h-screen flex flex-col items-center gap-6">
                <div className="mt-6">
                    <h1 className="text-3xl font-semibold">Registro de empresas</h1>
                </div>
                <div>
                    <form className="w-96 p-4 flex flex-col gap-3 bg-white shadow rounded-xl" onSubmit={handleempresas}>
                        <label>Nombre:</label>
                        <input type="text" className="border rounded p-1" name="nombre" onChange={data} required/>

                        <label>NIT:</label>
                        <input type="text" className="border rounded p-1" name="nit" onChange={data} required/>

                        <label>Direccion:</label>
                        <input type="text" className="border rounded p-1" name="direccion" onChange={data} required/>

                        <label>Telefono:</label>
                        <input type="tel" className="border rounded p-1" name="telefono" onChange={data} required/>

                        <button type="submit" className="bg-green-400 hover:bg-green-500 cursor-pointer py-2 w-44 rounded self-center">Registrar Empresa</button>
                    </form>
                </div>
            </div>
        </>
    )
}