import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigate = useNavigate()
    const [empresas, setEmpresas] = useState([])
    const [empleados, setEmpleados] = useState([])

    const empresa = JSON.parse(localStorage.getItem("examenReactEmpresas")) || []
    const empleado = JSON.parse(localStorage.getItem("examenReactEmpleados")) || []

    useEffect(() => {
        setEmpresas(empresa)
        setEmpleados(empleado)
    }, [])

    return (
        <>
            <div className="min-h-screen p-3 flex flex-col bg-gray-100">
                <div className="flex flex-col">
                    <div className="flex px-6 justify-between">
                        <h1 className="text-2xl font-semibold">Listado de empresas</h1>
                        <button onClick={()=>{navigate("/dashboard/empresas")}} className="px-4 py-2 bg-green-400 hover:bg-green-500 rounded cursor-pointer">Nueva empresa</button>
                    </div>
                    <div>
                        <table className="w-full border-collapse bg-white mt-6 text-left">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="px-4 py-2 border">#</th>
                                    <th className="px-4 py-2 border">Nombre</th>
                                    <th className="px-4 py-2 border">NIT</th>
                                    <th className="px-4 py-2 border">Dirección</th>
                                    <th className="px-4 py-2 border">Teléfono</th>
                                </tr>
                            </thead>
                            <tbody>
                                {empresas.map((empresa, index) => (
                                    <tr key={index}>
                                        <td className="px-4 py-2 border">{index + 1}</td>
                                        <td className="px-4 py-2 border">{empresa.nombre}</td>
                                        <td className="px-4 py-2 border">{empresa.nit}</td>
                                        <td className="px-4 py-2 border">{empresa.direccion}</td>
                                        <td className="px-4 py-2 border">{empresa.telefono}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="flex px-6 justify-between mt-10">
                        <h1 className="text-2xl font-semibold">Listado de empleados</h1>
                        <button onClick={()=>{navigate("/dashboard/empleados")}} className="px-4 py-2 bg-green-400 hover:bg-green-500 rounded cursor-pointer">Nuevo empleado</button>
                    </div>
                    <div>
                        <table className="w-full border-collapse bg-white mt-6 text-left">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="px-4 py-2 border">Documento</th>
                                    <th className="px-4 py-2 border">Nombre</th>
                                    <th className="px-4 py-2 border">Cargo</th>
                                    <th className="px-4 py-2 border">Salario</th>
                                    <th className="px-4 py-2 border">Empresa Asociada</th>
                                </tr>
                            </thead>
                            <tbody>
                                {empleados.map((empleado, index) => (
                                    <tr key={index}>
                                        <td className="px-4 py-2 border">{empleado.documento}</td>
                                        <td className="px-4 py-2 border">{empleado.nombre}</td>
                                        <td className="px-4 py-2 border">{empleado.cargo}</td>
                                        <td className="px-4 py-2 border">{empleado.salario}</td>
                                        <td className="px-4 py-2 border">{empleado.empresaID}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}