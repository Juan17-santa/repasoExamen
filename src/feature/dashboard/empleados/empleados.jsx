import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Empleados() {
    const navigate = useNavigate()
    const [empresas, setEmpresas] = useState([])

    const empresa = JSON.parse(localStorage.getItem("examenReactEmpresas")) || []

    useEffect(() => {
        setEmpresas(empresa)
    }, [])

    const [formData, setFormData] = useState({
        documento: "",
        nombre: "",
        cargo: "",
        salario: "",
        empresaID: ""
    })

    const data = ((e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    })

    function handleempleados(e) {
        e.preventDefault()

        const empleado = JSON.parse(localStorage.getItem("examenReactEmpleados")) || []

        empleado.push(formData)

        localStorage.setItem("examenReactEmpleados", JSON.stringify(empleado))

        alert("Registro de empleado exitoso!")
        navigate("/dashboard")
    }

    return (
        <>
            <div className="min-h-screen flex flex-col items-center gap-6">
                <div className="mt-6">
                    <h1 className="text-3xl font-semibold">Registro de empleados</h1>
                </div>
                <div>
                    <form className="w-96 p-4 flex flex-col gap-3 bg-white shadow rounded-xl" onSubmit={handleempleados}>
                        <label>Documento:</label>
                        <input type="number" className="border rounded p-1" name="documento" onChange={data} required />

                        <label>Nombre:</label>
                        <input type="text" className="border rounded p-1" name="nombre" onChange={data} required />

                        <label>Cargo:</label>
                        <input type="text" className="border rounded p-1" name="cargo" onChange={data} required />

                        <label>Salario:</label>
                        <input type="tel" className="border rounded p-1" name="salario" onChange={data} required />

                        <label>Empresa Asociada</label>
                        <select name="empresaID" className="border rounded p-1" onChange={data} required>
                            <option value="">Seleccione una empresa</option>
                            {empresas.map((empresa, index) => (
                                <option key={index} value={empresa.nombre}>
                                    {empresa.nombre}
                                </option>
                            ))}
                        </select>

                        <button type="submit" className="bg-green-400 hover:bg-green-500 cursor-pointer py-2 w-44 rounded self-center">Registrar Empleado</button>
                    </form>
                </div>
            </div>
        </>
    )
}